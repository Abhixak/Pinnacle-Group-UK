import React, { useEffect, useState } from "react";
import AdminNavbar from "./Components/AdminNavbar";
import ApprovedUsers from "./Components/ApprovedUsers";
import ApproveDialog from "./Components/ApproveDialog";
import AppointmentDialog from "./Components/AppointmentDialog";
import { Trash2 } from "lucide-react";
import { ADMIN_BASE_URL } from "../config";

const AdminUsers = () => {
  const [showTable, setShowTable] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [showApproveDialog, setShowApproveDialog] = useState(false);
  const [showAppointmentDialog, setShowAppointmentDialog] = useState(false);

  const [users, setUsers] = useState([]);

  // ✅ Sirf "new queries" load karo (isApproved: false, isVerified: false)
  useEffect(() => {
    fetch(`${ADMIN_BASE_URL}/admin/new-queries`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const filtered = data.users.filter(
            (u) => u.isApproved === false && u.isVerified === false
          );

          console.log("New Queries (filtered) ===>", filtered);
          setUsers(filtered);
        }
      })
      .catch((err) => console.log("Fetch error:", err));
  }, []);



  const openApprove = (user) => {
    setSelectedUser(user);
    setShowApproveDialog(true);
  };

  const openAppointment = (user) => {
    setSelectedUser(user);
    setShowAppointmentDialog(true);
  };

  return (
    <>
      <AdminNavbar />

      {/* Top Section */}
      <div className="!p-4 !mx-4 !mt-6 flex items-center bg-white rounded-lg shadow-md">
        <h2 className="font-semibold text-lg">
          New Queries : <span className="text-blue-700">{users.length}</span>
        </h2>

        <button
          onClick={() => setShowTable(!showTable)}
          className="!ml-auto bg-blue-700 text-white !px-4 !py-2 rounded-lg shadow-md hover:bg-blue-800 transition"
        >
          {showTable ? "Hide" : "Show"}
        </button>
      </div>

      {/* Table / Cards Section */}
      <section
        className={`rounded-lg bg-blue-100 !m-4 overflow-hidden transition-all duration-500 ${
          showTable ? "max-h-[380px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* ===== MOBILE VIEW (Cards) ===== */}
        <div className="md:hidden !p-3 max-h-[320px] overflow-y-auto flex flex-col gap-y-3">
          {users.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm !p-4 text-center text-gray-600">
              No queries found!
            </div>
          ) : (
            users.map((user, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm !p-3 flex flex-col gap-2"
              >
                {/* Name + Service in one row */}
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-gray-800 truncate">
                    {user.name}
                  </p>

                  {/* ✅ Service right side, safe fallback */}
                  <span className="text-xs text-gray-500 ml-auto">
                    {user.service || "No service selected"}
                  </span>
                </div>

                <p className="text-sm text-gray-700 break-all">
                  <span className="font-semibold">Email: </span>
                  {user.email}
                </p>

                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Phone: </span>
                  {user.phoneCode} {user.phone}
                </p>

                <div className="flex items-center gap-3 !mt-2">
                  <button
                    className="text-sm font-medium text-blue-600 hover:underline"
                    onClick={() => openApprove(user)}
                  >
                    Approve
                  </button>

                  <button
                    className="text-sm font-medium text-green-600 hover:underline"
                    onClick={() => openAppointment(user)}
                  >
                    Appointment
                  </button>

                  <button className="!ml-auto">
                    <Trash2 className="w-5 h-5 text-red-600 hover:text-red-400 cursor-pointer" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ===== DESKTOP VIEW (Table) ===== */}
        <div className="hidden md:block rounded-lg overflow-x-auto">
          <table className="min-w-[800px] w-full text-gray-700 border-collapse table-fixed">
            <thead className="bg-gray-200 sticky top-0">
              <tr className="table w-full table-fixed">
                <th className="!px-4 !py-2 text-left">Name</th>
                <th className="!px-4 !py-2 text-left">Email</th>
                <th className="!px-4 !py-2 text-left">Phone</th>
                <th className="!px-4 !py-2 text-left">Service</th>
                <th className="!px-4 !py-2 text-left">Approve</th>
                <th className="!px-4 !py-2 text-left">Appointment</th>
                <th className="!px-4 !py-2 text-left">Remove</th>
              </tr>
            </thead>

            <tbody className="block max-h-60 overflow-y-auto w-full">
              {users.length === 0 ? (
                <tr className="table w-full text-center bg-white">
                  <td className="table-cell !py-4 text-gray-600" colSpan="7">
                    No queries found!
                  </td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <tr
                    key={index}
                    className="table w-full table-fixed bg-white border-b hover:bg-gray-100"
                  >
                    <td className="!px-4 !py-2 truncate">{user.name}</td>
                    <td className="!px-4 !py-2 break-all">{user.email}</td>
                    <td className="!px-4 !py-2">
                      {user.phoneCode} {user.phone}
                    </td>

                    {/* ✅ Service with fallback */}
                    <td className="!px-4 !py-2 truncate">
                      {user.service || "No service"}
                    </td>

                    {/* ✅ Approve Button */}
                    <td className="!px-4 !py-2">
                      <button
                        className="text-blue-600 hover:underline"
                        onClick={() => openApprove(user)}
                      >
                        Approve
                      </button>
                    </td>

                    {/* ✅ Appointment Button */}
                    <td className="!px-4 !py-2">
                      <button
                        className="text-green-600 hover:underline"
                        onClick={() => openAppointment(user)}
                      >
                        Appointment
                      </button>
                    </td>

                    {/* ✅ Delete User Icon */}
                    <td className="!px-4 !py-2">
                      <Trash2 className="text-red-600 hover:text-red-400 cursor-pointer" />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <ApprovedUsers />

      {showApproveDialog && (
        <ApproveDialog
          user={selectedUser}
          close={() => setShowApproveDialog(false)}
        />
      )}

      {showAppointmentDialog && (
        <AppointmentDialog
          user={selectedUser}
          close={() => setShowAppointmentDialog(false)}
        />
      )}
    </>
  );
};

export default AdminUsers;
