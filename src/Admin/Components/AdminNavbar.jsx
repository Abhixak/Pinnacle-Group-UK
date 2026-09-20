import { Bell, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // 👈 useNavigate add

const AdminNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // 👈 yahan se milega navigate

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // 👈 token hatao
    navigate("/AdminAuth"); // 👈 login page pe redirect
  };

  return (
    <nav className="bg-white md:bg-blue-700 text-white !px-6 !py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo OR Title */}
        <h1 className="text-lg font-bold text-blue-800 md:text-white">
          Pinnacle Group
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-md font-medium">
          <li>
            <Link
              to="/AdminAuth/admin-dashboard"
              className="hover:text-gray-200"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/AdminAuth/admin-users" className="hover:text-gray-200">
              Users
            </Link>
          </li>
          <li>
            <Link to="/AdminAuth/admin-chat" className="hover:text-gray-200">
              Messages
            </Link>
          </li>
          <li>
            <Link to="/AdminAuth/admin-docs" className="hover:text-gray-200">
              Documents
            </Link>
          </li>
          {/* <li><Link to="/AdminAuth/admin-profile" className="hover:text-gray-200">Profile</Link></li> */}

          <li className="!ml-auto flex items-center gap-2">
            <button className="bg-red-500 hover:bg-red-600 cursor-pointer !px-3 !py-2 rounded-lg transition">
              <Bell size={24} />
            </button>

            <button
              onClick={handleLogout} // 👈 Logout action
              className="bg-red-500 hover:bg-red-600 cursor-pointer !px-3 !py-2 rounded-lg transition"
            >
              Logout
            </button>
          </li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-800"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="!mt-3 flex flex-col gap-4 text-md text-blue-700 font-medium md:hidden">
          <li>
            <Link
              to="/AdminAuth/admin-dashboard"
              className="hover:text-gray-200"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/AdminAuth/admin-users"
              className="hover:text-gray-200"
              onClick={() => setOpen(false)}
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/AdminAuth/admin-chat"
              className="hover:text-gray-200"
              onClick={() => setOpen(false)}
            >
              Chat
            </Link>
          </li>
          <li>
            <Link
              to="/AdminAuth/admin-docs"
              className="hover:text-gray-200"
              onClick={() => setOpen(false)}
            >
              Documents
            </Link>
          </li>

          {/* <li><Link to="/AdminAuth/admin-profile" className="hover:text-gray-200" onClick={() => setOpen(false)}>Profile</Link></li> */}

          <div className="flex flex-col md:flex-row items-center gap-3">
            <button className="md:bg-red-500 text-red-500 md:text-white hover:bg-red-600 !px-3 flex gap-2 items-center !py-2 rounded-lg transition">
              <Bell size={18} />
              <p>Notifications</p>
            </button>
            <button
              onClick={handleLogout} // 👈 Mobile logout bhi kaam karega
              className="md:bg-red-500 underline text-red-500 md:text-white hover:bg-red-600 !px-3 !py-2 rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default AdminNavbar;
