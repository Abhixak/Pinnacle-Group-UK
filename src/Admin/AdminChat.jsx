// AdminChat.jsx
import React, { useEffect, useState, useRef } from "react";
import AdminNavbar from "./Components/AdminNavbar";
import axios from "axios";
import { ArrowLeft, MessageCircle, Camera } from "lucide-react";
import { useLocation } from "react-router-dom"; // 👈 NEW
import { ADMIN_BASE_URL } from "../config";

const AdminChat = () => {
  const location = useLocation();
  const initialUserId = location.state?.userId || null; // 👈 from navigate state

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [sending, setSending] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState("");

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null); // ✅ for camera/file input

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // ✅ Fetch chat of selected user
  const fetchMessages = async (userId) => {
    if (!userId) {
      console.warn("fetchMessages called with empty userId");
      return;
    }

    try {
      setLoadingMessages(true);
      setError("");
      const res = await axios.get(`${ADMIN_BASE_URL}/admin/chat/${userId}`);
      console.log("MESSAGES RESPONSE:", res.data);
      setMessages(res.data.messages || []);
    } catch (err) {
      console.error("Error fetching messages:", err);
      setError("Unable to load messages.");
    } finally {
      setLoadingMessages(false);
    }
  };

  // ✅ Fetch user list
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoadingUsers(true);
        setError("");
        const res = await axios.get(`${ADMIN_BASE_URL}/admin/chat-users`);
        console.log("CHAT USERS RAW RESPONSE:", res.data);

        const rawUsers = res.data?.users || [];

        const normalizedUsers = rawUsers.map((u, index) => ({
          ...u,
          _id: u._id || u.id || u.customId || `user-${index}`,
        }));

        setUsers(normalizedUsers);

        // 🔹 Auto-select user if we came from profile dialog
        if (normalizedUsers.length > 0) {
          let userToSelect = null;

          if (initialUserId) {
            userToSelect = normalizedUsers.find(
              (u) =>
                String(u.customId) === String(initialUserId) ||
                String(u._id) === String(initialUserId)
            );
          }

          if (!userToSelect) {
            userToSelect = normalizedUsers[0];
          }

          setSelectedUser(userToSelect);
          fetchMessages(userToSelect._id);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Unable to load users.");
      } finally {
        setLoadingUsers(false);
      }
    };

    fetchUsers();
  }, [initialUserId]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setMessages([]);
    setNewMessage("");
    fetchMessages(user._id);
  };

  const handleBackToUsers = () => {
    setSelectedUser(null);
    setMessages([]);
    setNewMessage("");
  };

  // ✅ Send text message
  const handleSendMessage = async () => {
    if (!selectedUser || !newMessage.trim() || sending) return;

    try {
      setSending(true);
      setError("");

      const res = await axios.post(
        `${ADMIN_BASE_URL}/admin/chat/${selectedUser._id}`,
        { text: newMessage.trim() }
      );

      if (res.data?.message) {
        setMessages((prev) => [...prev, res.data.message]);
      }

      setUsers((prev) =>
        prev.map((u) =>
          u._id === selectedUser._id
            ? {
                ...u,
                lastMessage: newMessage.trim(),
                lastMessageAt: new Date(),
              }
            : u
        )
      );

      setNewMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Unable to send message.");
    } finally {
      setSending(false);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // ✅ Camera / Image choose button
  const handleOpenCamera = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // ✅ Handle selected image (camera or gallery)
  const handleImageSelect = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file || !selectedUser) return;

    const tempUrl = URL.createObjectURL(file);

    // Abhi ke liye sirf UI me preview
    setMessages((prev) => [
      ...prev,
      {
        _id: `local-${Date.now()}`,
        sender: "admin",
        text: "",
        imageUrl: tempUrl,
        createdAt: new Date().toISOString(),
      },
    ]);

    e.target.value = "";
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Navbar fixed at top of this layout */}
      <div className="flex-shrink-0">
        <AdminNavbar />
      </div>
      <hr className="h-1 text-blue-600 bg-blue-300" />

      {/* Chat area fills FULL remaining screen height */}
      <div className="flex-1 flex overflow-hidden">
        {/* ================== USER LIST PANEL ================== */}
        <div
          className={`h-full bg-gray-50 flex-shrink-0 border-r 
          w-full md:w-80 
          ${selectedUser ? "hidden" : "block"} md:block`}
        >
          {/* Header */}
          <div className="flex items-center justify-between !px-4 !py-5 border-b bg-white">
            <h2 className="font-semibold text-gray-800 flex !pt-1 items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              NRI Chat Box
            </h2>
          </div>

          {/* User List */}
          <div className="h-[calc(100%-3rem)] overflow-y-auto">
            {loadingUsers && (
              <p className="text-center text-sm text-gray-500 !mt-4">
                Loading users...
              </p>
            )}

            {!loadingUsers && users.length === 0 && (
              <p className="text-center text-sm text-gray-500 !mt-4">
                No users found.
              </p>
            )}

            {users.map((user) => (
              <button
                key={user._id}
                onClick={() => handleSelectUser(user)}
                className={`w-full text-left !px-4 !py-3 cursor-pointer border-b hover:bg-blue-50 transition flex flex-col
                ${selectedUser?._id === user._id ? "bg-blue-100" : ""}`}
              >
                <span className="font-medium text-sm text-gray-800 truncate">
                  {user.name || "Unnamed User"}{" "}
                  {user.customId && (
                    <span className="text-[11px] text-gray-400">
                      @{user.customId}
                    </span>
                  )}
                </span>

                {user.lastMessage && (
                  <span className="text-xs text-gray-400 !mt-1 truncate">
                    {user.lastMessage}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ================== CHAT PANEL ================== */}
        <div
          className={`flex-1 h-full ${
            selectedUser ? "flex" : "hidden"
          } md:flex flex-col bg-white`}
        >
          {/* Chat Header */}
          <div className="flex items-center gap-3 !px-4 !py-3 border-b bg-white">
            {selectedUser && (
              <button
                onClick={handleBackToUsers}
                className="md:hidden !mr-2 !p-2 rounded-full hover:bg-gray-100"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}

            <div className="flex flex-col !pt-1">
              <span className="font-semibold text-gray-800">
                {selectedUser ? selectedUser.name : "Admin Chat"}
              </span>
              <span className="text-xs text-gray-500">
                {selectedUser
                  ? selectedUser.email
                  : "Select a user to start chat"}
              </span>
            </div>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto bg-gray-50">
            {!selectedUser && (
              <div className="hidden md:flex flex-col items-center justify-center h-full text-left !px-6 !pt-6 text-gray-400">
                <MessageCircle className="w-10 h-10 !mb-3" />
                <p className="text-lg font-semibold !mb-1">Admin Chat Panel</p>
                <p className="text-sm">
                  Choose a user from the left list to view their chat and
                  respond.
                </p>
              </div>
            )}

            {selectedUser && (
              <div className="flex flex-col gap-2 !px-6 !pt-6 !pb-4">
                {loadingMessages && (
                  <p className="text-center text-sm text-gray-500">
                    Loading chat...
                  </p>
                )}

                {!loadingMessages && messages.length === 0 && (
                  <p className="text-center text-sm text-gray-500">
                    No messages yet. Start the conversation!
                  </p>
                )}

                {messages.map((msg, index) => {
                  const isAdmin = msg.sender === "admin";
                  return (
                    <div
                      key={index}
                      className={`flex ${
                        isAdmin ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[75%] rounded-2xl !px-3 !py-2 text-sm shadow-sm ${
                          isAdmin
                            ? "bg-blue-600 text-white rounded-br-none"
                            : "bg-white text-gray-800 rounded-bl-none"
                        }`}
                      >
                        {msg.imageUrl ? (
                          <img
                            src={msg.imageUrl}
                            alt="sent"
                            className="max-h-48 rounded-lg object-contain"
                          />
                        ) : (
                          <p>{msg.text}</p>
                        )}

                        {msg.createdAt && (
                          <p className="text-[10px] !mt-1 opacity-70 text-right">
                            {new Date(msg.createdAt).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Message input */}
          <div className="border-t bg-white !px-3 !py-2 flex items-center gap-2">
            {/* Hidden file input for camera/gallery */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={handleImageSelect}
            />

            {/* Camera button */}
            <button
              type="button"
              onClick={handleOpenCamera}
              className="!p-2 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
            >
              <Camera className="w-5 h-5 text-gray-600" />
            </button>

            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded-full !px-3 !py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleInputKeyDown}
              disabled={sending || !selectedUser}
            />
            <button
              type="button"
              className={`!px-4 !py-2 text-sm rounded-full text-white transition ${
                sending || !newMessage.trim() || !selectedUser
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
              onClick={handleSendMessage}
              disabled={sending || !newMessage.trim() || !selectedUser}
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </div>

      {error && (
        <p className="text-xs text-red-500 !mb-2 text-center">{error}</p>
      )}
    </div>
  );
};

export default AdminChat;
