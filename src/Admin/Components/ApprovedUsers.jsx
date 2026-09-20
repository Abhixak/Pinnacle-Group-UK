import { BadgeInfo, ShieldCheckIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import UserProfileDialog from "./UserProfileDialog";
import { ADMIN_BASE_URL } from "../../config";

const ApprovedUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [userType, setUserType] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [page, setPage] = useState(1);
  const [searchId, setSearchId] = useState("");

  const [selectedUser, setSelectedUser] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const handleOpenProfile = (user) => {
    setSelectedUser(user);
    setShowDialog(true);
  };

  // ✅ Load Users From Backend Instead of Dummy Data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${ADMIN_BASE_URL}/admin/approved-users`);
        const data = await res.json();

        if (data.success) {
          setAllUsers(data.users);
          setFilteredUsers(data.users);
        }
      } catch (err) {
        console.log("❌ Error loading users:", err);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    let data = [...allUsers];

    if (userType === "approved")
      data = data.filter((u) => u.isApproved === true);
    if (userType === "verified")
      data = data.filter((u) => u.isVerified === true);
    if (searchId.trim() !== "")
      data = data.filter((u) => u._id.toString().includes(searchId));

    setFilteredUsers(data);
    setPage(1);
  }, [userType, allUsers, searchId]);

  const indexOfLast = page * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredUsers.length / perPage);

  const updateStatus = (id, newStatus) => {
    setAllUsers((prev) =>
      prev.map((u) => (u._id === id ? { ...u, status: newStatus } : u))
    );
  };

  const handleSaveChanges = () => {
    console.log("Changes saved.");
  };

  return (
    <div className="!p-4">
      <h2 className="text-xl font-semibold !mb-4">Approved Users</h2>

      <div className="flex flex-wrap gap-3 items-center !mb-6">
        <input
          type="text"
          placeholder="Search by User ID"
          className="border rounded !p-2"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />

        <select
          className="border rounded !p-2"
          value={perPage}
          onChange={(e) => setPerPage(Number(e.target.value))}
        >
          <option value={10}>Show 10</option>
          <option value={50}>Show 50</option>
        </select>

        <select
          className="border rounded !p-2"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="all">All Users</option>
          <option value="approved">Approved Users</option>
          <option value="verified">Verified Users</option>
        </select>

        <select
          className="border rounded !p-2"
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
        >
          <option value="grid">Grid View</option>
          <option value="list">List View</option>
        </select>

        <button
          onClick={handleSaveChanges}
          className="bg-blue-700 text-white !px-4 !py-2 rounded-lg shadow hover:bg-blue-800"
        >
          Save Changes
        </button>
      </div>

      {viewMode === "list" ? (
        <div className="border rounded shadow overflow-hidden">
          <div className="max-h-[60vh] overflow-y-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-200 sticky top-0 z-10">
                <tr>
                  <th className="!p-3">User ID</th>
                  <th className="!p-3">Name</th>
                  <th className="!p-3">Email</th>
                  <th className="!p-3">Country</th>
                  <th className="!p-3">Phone</th>
                  <th className="!p-3">Service</th>
                  <th className="!p-3">Message</th>
                  <th className="!p-3">Documents</th>
                  <th className="!p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {currentUsers.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleOpenProfile(user)}
                  >
                    <td className="!p-3 flex items-center gap-1">
                      {user._id}
                      {user.isApproved && user.isVerified ? (
                        <ShieldCheckIcon className="text-green-600" size={16} />
                      ) : user.isApproved && !user.isVerified ? (
                        <BadgeInfo className="text-red-500" size={16} />
                      ) : null}
                    </td>

                    <td className="!p-3">{user.name}</td>
                    <td className="!p-3">{user.email}</td>
                    <td className="!p-3">{user.country}</td>
                    <td className="!p-3">{user.phoneCode} {user.phone}</td>
                    <td className="!p-3">{user.service}</td>

                    <td className="!p-3 truncate max-w-[180px]">{user.message}</td>

                    <td className="!p-3">
                      {user.documents?.length
                        ? `${user.documents.length} files`
                        : "No Docs"}
                    </td>

                    <td className="!p-3">
                      <select
                        value={user.status}
                        onChange={(e) => updateStatus(user._id, e.target.value)}
                        className="border rounded !p-1 bg-white"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <option>Analysing your query</option>
                        <option>Under Process</option>
                        <option>Pending Documents</option>
                        <option>Process On Hold</option>
                        <option>Process Completed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentUsers.map((user) => (
            <div
              key={user._id}
              className="border rounded-xl shadow bg-white !p-4 hover:shadow-lg transition cursor-pointer"
              onClick={() => handleOpenProfile(user)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-blue-700">{user.name}</h3>
                {user.isApproved && user.isVerified ? (
                  <ShieldCheckIcon className="text-green-600" size={18} />
                ) : user.isApproved && !user.isVerified ? (
                  <BadgeInfo className="text-red-500" size={18} />
                ) : null}
              </div>

              <p className="text-sm text-gray-600">ID: {user.customId}</p>
              <p className="text-sm">Email: {user.email}</p>
              <p className="text-sm">Country: {user.country}</p>
              <p className="text-sm">Phone: {user.countryCode}-{user.phone}</p>
              <p className="text-sm !mt-2">Query: {user.service}</p>
              <p className="text-xs !mt-1 text-gray-500">Message: {user.message}</p>

              <p className="text-sm !mt-2">
                Docs: {user.contracts?.length ? `${user.contracts.length} files` : "No Docs"}
              </p>
              
              <p className="text-xs !mt-1 text-gray-500">Status: {user.status}</p>

              {/* <select
                value={user.status}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => updateStatus(user._id, e.target.value)}
                className="border rounded !p-1 !mt-3 bg-gray-100 outline-none w-full"
              >
                <option>Under Process</option>
                <option>Pending Documents</option>
                <option>Process On Hold</option>
                <option>Process Completed</option>
              </select> */}
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center items-center !mt-6 gap-2">
        <button
          className="cursor-pointer !px-3 !py-1 border rounded disabled:opacity-40"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`!px-3 !py-1 cursor-pointer border rounded ${
              page === i + 1 ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="cursor-pointer !px-3 !py-1 border rounded disabled:opacity-40"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>

      {showDialog && (
        <UserProfileDialog
          user={selectedUser}
          onClose={() => setShowDialog(false)}
          updateStatus={updateStatus}
        />
      )}
    </div>
  );
};

export default ApprovedUsers;
