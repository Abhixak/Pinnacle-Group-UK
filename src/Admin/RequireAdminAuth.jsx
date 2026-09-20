import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAdminAuth = () => {
  const token = localStorage.getItem("adminToken");
  const location = useLocation();

  if (!token) {
    // Not logged in → send to login
    return <Navigate to="/AdminAuth" replace state={{ from: location }} />;
  }

  // Logged in → allow nested routes
  return <Outlet />;
};

export default RequireAdminAuth;
