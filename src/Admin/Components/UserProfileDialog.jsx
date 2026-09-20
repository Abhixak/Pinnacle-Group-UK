// UserProfileDialog.jsx
import React from "react";
import {
  X,
  MessageCircle,
  FileText,
  ShieldCheck,
  Clock,
  AlertTriangle,
  PauseCircle,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserProfileDialog = ({ user, onClose }) => {
  const navigate = useNavigate();

  if (!user) return null;

  // Badge style based on status
  const getStatusBadge = (status) => {
    switch (status) {
      case "Analysing your query":
        return (
          <span className="flex items-center gap-1 bg-gray-200 text-gray-700 !px-3 !py-1 rounded-full text-sm">
            <Clock size={16} /> Analysing
          </span>
        );
      case "Under Process":
        return (
          <span className="flex items-center gap-1 bg-blue-200 text-blue-700 !px-3 !py-1 rounded-full text-sm">
            <ShieldCheck size={16} /> Under Process
          </span>
        );
      case "Pending Documents":
        return (
          <span className="flex items-center gap-1 bg-yellow-200 text-yellow-700 !px-3 !py-1 rounded-full text-sm">
            <AlertTriangle size={16} /> Pending Docs
          </span>
        );
      case "Process On Hold":
        return (
          <span className="flex items-center gap-1 bg-orange-200 text-orange-700 !px-3 !py-1 rounded-full text-sm">
            <PauseCircle size={16} /> On Hold
          </span>
        );
      case "Process Completed":
        return (
          <span className="flex items-center gap-1 bg-green-200 text-green-700 !px-3 !py-1 rounded-full text-sm">
            <CheckCircle size={16} /> Completed
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1 bg-gray-100 text-gray-700 !px-3 !py-1 rounded-full text-sm">
            {status || "N/A"}
          </span>
        );
    }
  };

  // Safely get ID for routing (prefer customId, fallback _id)
  const getUserId = () => {
    if (!user) return null;
    if (user.customId && String(user.customId).trim() !== "") {
      return user.customId;
    }
    return user._id || null;
  };

  const handleChatClick = () => {
    const id = getUserId();
    if (!id) return;

    navigate("/AdminAuth/admin-chat", {
      state: { userId: id },
    });
    // onClose && onClose(); // agar dialog band karna ho to uncomment
  };

  const handleDocumentsClick = () => {
    const id = getUserId();
    if (!id) return;

    navigate("/AdminAuth/admin-docs", {
      state: { userId: id },
    });
    // onClose && onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg !mx-2 min-w-sm max-w-2xl !p-6 relative">
        {/* Close */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
          onClick={onClose}
        >
          <X size={22} />
        </button>

        <h2 className="text-xl font-semibold !mb-3 text-blue-700">
          {user.name}
        </h2>

        <p>
          <b>User ID:</b> {user.customId || user._id}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
        <p>
          <b>Country:</b> {user.country}
        </p>
        <p>
          <b>Phone:</b> {user.countryCode}-{user.phone}
        </p>
        <p>
          <b>Service:</b> {user.service}
        </p>
        <p className="!mt-1">
          <b>Message:</b> {user.message}
        </p>

        <p className="!mt-3">
          <b>Documents:</b>{" "}
          {user.contracts?.length
            ? `${user.contracts.length} files uploaded`
            : "No Documents Uploaded"}
        </p>

        {/* Status Badge */}
        <div className="!mt-4">
          <label className="font-semibold !mr-2">Status:</label>
          <span>{getStatusBadge(user.status)}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 !mt-6">
          <button
            onClick={handleChatClick}
            className="flex items-center justify-center gap-2 cursor-pointer bg-blue-600 text-white flex-1 !py-2 rounded-lg hover:bg-blue-700"
          >
            <MessageCircle size={18} /> Chat
          </button>

          <button
            onClick={handleDocumentsClick}
            className="flex items-center justify-center gap-2 cursor-pointer bg-gray-200 text-gray-800 flex-1 !py-2 rounded-lg hover:bg-gray-300"
          >
            <FileText size={18} /> Documents
          </button>
        </div>

        <button
          onClick={onClose}
          className="bg-black cursor-pointer text-white w-full !py-2 rounded-lg !mt-4 hover:bg-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserProfileDialog;
