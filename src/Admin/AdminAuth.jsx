// Admin/AdminAuth.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api"; // 👈 jo upar banaya

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/admin/login", { email, password });

      if (res.data.success) {
        // token save
        localStorage.setItem("adminToken", res.data.token);
        // redirect to dashboard
        navigate("/AdminAuth/admin-dashboard");
      } else {
        setError(res.data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-150 max-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl !p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center !mb-6">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-600 text-sm !mb-3 text-center">{error}</p>
        )}

        <form onSubmit={handleLogin}>
          <label className="block !mb-3">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              className="w-full border rounded-lg !p-2 !mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
            />
          </label>

          <label className="block !mb-4">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              className="w-full border rounded-lg !p-2 !mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white cursor-pointer !px-4 !py-2 rounded-lg transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
