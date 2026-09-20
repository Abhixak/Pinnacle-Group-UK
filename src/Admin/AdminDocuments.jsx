// AdminDocuments.jsx
import React, { useEffect, useState } from "react";
import AdminNavbar from "./Components/AdminNavbar";
import axios from "axios";
import { User, FileText, Loader2, ArrowLeft } from "lucide-react";
import { useLocation } from "react-router-dom";
import { ADMIN_BASE_URL } from "../config";

const AdminDocuments = () => {
  const location = useLocation();
  const initialUserId = location.state?.userId || null; // 👈 aaya from navigate

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [error, setError] = useState("");

  const [isMobile, setIsMobile] = useState(false);
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  // ---------- Helpers for IDs & file URLs ----------

  const getUserId = (user) => {
    if (!user) return "N/A";
    if (user.customId && String(user.customId).trim() !== "") {
      return user.customId;
    }
    return user._id || "N/A";
  };

  const buildFileUrl = (rawUrl) => {
    if (!rawUrl) return "#";

    if (rawUrl.startsWith("http://") || rawUrl.startsWith("https://")) {
      return rawUrl;
    }

    const cleaned = rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`;
    return `${ADMIN_BASE_URL}${cleaned}`;
  };

  const normalizeFiles = (field) => {
    if (!field) return [];

    if (Array.isArray(field)) {
      return field.map((item, idx) => {
        if (typeof item === "string") {
          return {
            label: `File ${idx + 1}`,
            url: buildFileUrl(item),
          };
        }

        const rawUrl = item.url || item.path || item.filePath || "";
        const label =
          item.name ||
          item.title ||
          item.originalName ||
          (rawUrl ? rawUrl.split("/").pop() : `File ${idx + 1}`);

        return {
          label,
          url: buildFileUrl(rawUrl),
        };
      });
    }

    if (typeof field === "string") {
      return [{ label: "File 1", url: buildFileUrl(field) }];
    }

    if (typeof field === "object") {
      const rawUrl = field.url || field.path || field.filePath || "";
      const label =
        field.name ||
        field.title ||
        field.originalName ||
        (rawUrl ? rawUrl.split("/").pop() : "File 1");

      return [
        {
          label,
          url: buildFileUrl(rawUrl),
        },
      ];
    }

    return [];
  };

  const renderFileList = (title, files) => {
    if (!files.length) {
      return (
        <p className="text-sm text-gray-500 !mt-1">
          No {title.toLowerCase()} uploaded.
        </p>
      );
    }

    return (
      <ul className="space-y-2 !mt-2">
        {files.map((file, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-50 rounded-lg border border-gray-200 !px-3 !py-2"
          >
            <div className="flex items-center gap-2 min-w-0">
              <FileText className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-sm text-gray-700 break-all line-clamp-2">
                {file.label}
              </span>
            </div>
            {file.url && file.url !== "#" && (
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline shrink-0 !ml-2"
              >
                Open
              </a>
            )}
          </li>
        ))}
      </ul>
    );
  };

  // ✅ Fetch users + auto-select based on initialUserId
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoadingUsers(true);
        setError("");
        const res = await axios.get(`${ADMIN_BASE_URL}/admin/new-queries`);
        const list = res.data.users || res.data || [];
        setUsers(list);

        if (list.length > 0) {
          let found = null;

          if (initialUserId) {
            found = list.find(
              (u) => String(getUserId(u)) === String(initialUserId)
            );
          }

          setSelectedUser(found || list[0]);
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

  // Detect mobile vs desktop (md breakpoint ~768px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ====== Small-screen components ======

  const renderUserList = () => (
    <aside className="w-full md:w-1/3 lg:w-1/4 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50 flex flex-col">
      <div className="!p-3 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <User className="w-4 h-4 text-blue-600" />
          Users
        </h2>
        <span className="text-xs text-gray-500">{users.length} found</span>
      </div>

      <div className="flex-1 max-h-full overflow-y-auto custom-scrollbar">
        {loadingUsers && (
          <div className="flex items-center justify-center !p-4">
            <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
            <span className="text-sm text-gray-600 !ml-2">
              Loading users...
            </span>
          </div>
        )}

        {error && !loadingUsers && (
          <p className="text-sm text-red-500 !p-4">{error}</p>
        )}

        {!loadingUsers && !error && users.length === 0 && (
          <p className="text-sm text-gray-500 !p-4">No users available.</p>
        )}

        {!loadingUsers &&
          !error &&
          users.map((user) => (
            <button
              key={getUserId(user)}
              onClick={() => {
                setSelectedUser(user);
                if (isMobile) setShowMobileDetail(true);
              }}
              className={`w-full text-left !px-4 !py-3 border-b border-gray-100 hover:bg-blue-50 transition flex flex-col gap-0.5 ${
                selectedUser && getUserId(selectedUser) === getUserId(user)
                  ? "bg-blue-100"
                  : "bg-transparent"
              }`}
            >
              <span className="text-sm font-semibold text-gray-800 truncate">
                {user.name || "Unnamed User"}
              </span>
              <span className="text-xs text-gray-500 break-all">
                {user.email}
              </span>
              <span className="text-[11px] text-gray-400 break-all">
                ID: {getUserId(user)}
              </span>
            </button>
          ))}
      </div>
    </aside>
  );

  const renderDocumentsView = () => (
    <section className="w-full md:w-2/3 lg:w-3/4 !p-3 sm:!p-4 flex flex-col">
      {/* Back button — only on mobile */}
      {isMobile && (
        <button
          onClick={() => setShowMobileDetail(false)}
          className="inline-flex items-center text-sm text-blue-600 !mb-3"
        >
          <ArrowLeft className="w-4 h-4 !mr-1" />
          Users
        </button>
      )}

      {!selectedUser ? (
        <div className="flex flex-1 items-center justify-center !py-10">
          <p className="text-sm text-gray-500 text-center">
            Select a user from the left to view their documents.
          </p>
        </div>
      ) : (
        <div className="flex-1 flex flex-col space-y-4 overflow-hidden">
          {/* User Info */}
          <div className="border border-gray-200 rounded-xl !p-3 sm:!p-4 bg-gray-50">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 !mb-1 break-words">
              {selectedUser.name || "Unnamed User"}
            </h2>
            <p className="text-[11px] sm:text-xs text-gray-500 !mb-1 break-all">
              ID: {getUserId(selectedUser)}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-gray-600">
              {selectedUser.email && (
                <span className="break-all">
                  Email: {selectedUser.email}
                </span>
              )}
              {selectedUser.country && (
                <span>Country: {selectedUser.country}</span>
              )}
              {(selectedUser.phoneCode || selectedUser.phone) && (
                <span>
                  Phone: {selectedUser.phoneCode} {selectedUser.phone}
                </span>
              )}
            </div>
          </div>

          {/* Documents Blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 flex-1 overflow-y-auto pb-2">
            {/* Contracts */}
            <div className="border border-gray-200 rounded-xl !mt-2 !p-3 sm:!p-4">
              <h3 className="text-sm sm:text-md font-semibold text-gray-800 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                Contracts
              </h3>
              {renderFileList(
                "Contracts",
                normalizeFiles(selectedUser.contracts)
              )}
            </div>

            {/* Documents */}
            <div className="border border-gray-200 rounded-xl !mt-2 !p-3 sm:!p-4">
              <h3 className="text-sm sm:text-md font-semibold text-gray-800 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                Documents
              </h3>
              {renderFileList(
                "Documents",
                normalizeFiles(selectedUser.documents)
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );

  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      <AdminNavbar />

      <div className="flex-1 !p-2 sm:!p-4">
        <div className="h-full w-full bg-white sm:rounded-2xl shadow-md overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 !px-3 sm:!px-4 !py-3 gap-1 sm:gap-0">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
              User Documents
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Showing Contracts & Documents
            </p>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col md:flex-row">
            {isMobile ? (
              <>
                {showMobileDetail ? renderDocumentsView() : renderUserList()}
              </>
            ) : (
              <>
                {renderUserList()}
                {renderDocumentsView()}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDocuments;
