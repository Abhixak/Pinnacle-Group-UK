import React, { useState, useEffect } from "react";
import AdminNavbar from "./Components/AdminNavbar";
import axios from "axios";
import { ADMIN_BASE_URL } from "../config";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LabelList,
} from "recharts";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [filter, setFilter] = useState("pageViews");

  // ✅ stats ka proper initial shape
  const [stats, setStats] = useState({
    totalQueries: 0,
    pendingQueries: 0,
    approvedQueries: 0,
    verifiedQueries: 0,
    chats: 0, // agar baad me chats count laoge
  });

  const [pageViews, setPageViews] = useState(0);
  const [chartData, setChartData] = useState([]);
  const [supportQueriesCount, setSupportQueriesCount] = useState(0);

  useEffect(() => {
    // 1️⃣ Queries stats
    axios
      .get(`${ADMIN_BASE_URL}/admin/queries-stats`)
      .then((res) => {
        console.log("QUERIES STATS RESPONSE:", res.data);
        setStats((prev) => ({
          ...prev,
          ...res.data,
          chats: res.data.verifiedQueries || 0, // ⬅️ YAHAN ADD KARO
        }));
      })
      .catch((err) => console.error("queries-stats error:", err));

    // 2️⃣ Pageviews
    axios
      .get(`${ADMIN_BASE_URL}/admin/pageviews`)
      .then((res) => setPageViews(res.data.pageviews || 0))
      .catch((err) => console.error("pageviews error:", err));

    // 3️⃣ Support queries count
    axios
      .get(`${ADMIN_BASE_URL}/admin/supportqueries-count`)
      .then((res) => setSupportQueriesCount(res.data.count || 0))
      .catch((err) => console.error("supportqueries-count error:", err));
  }, []);

  // ✅ Chart data whenever stats / pageViews update
  useEffect(() => {
    setChartData([
      { name: "Page Views", views: pageViews },
      { name: "Total Queries", views: stats.totalQueries || 0 },
      { name: "Pending", views: stats.pendingQueries || 0 },
      { name: "Approved", views: stats.approvedQueries || 0 },
      { name: "Verified", views: stats.verifiedQueries || 0 },
    ]);
  }, [stats, pageViews]);

  return (
    <>
      <AdminNavbar />

      <div className="!p-6 flex flex-col justify-center items-center">
        {/* ===== Top Cards ===== */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 !mb-8">
          <Link
            to="/AdminAuth/support-queries"
            className="bg-white shadow-sm hover:shadow-md transition-all shadow-blue-200 rounded-lg cursor-pointer !p-5 text-center"
          >
            <h3 className="text-gray-600 font-medium text-base sm:text-lg">
              Support Queries
            </h3>
            <p className="text-2xl sm:text-3xl font-bold text-blue-700 !mt-2">
              {supportQueriesCount}
            </p>
          </Link>

          <Link
            to="/AdminAuth/admin-chat"
            className="bg-white shadow-sm hover:shadow-md transition-all shadow-blue-200 rounded-lg cursor-pointer !p-5 text-center"
          >
            <h3 className="text-gray-600 font-medium text-base sm:text-lg">
              Chats
            </h3>
            <p className="text-2xl sm:text-3xl font-bold text-blue-700 !mt-2">
              {
                stats.chats ||
                  0 /* abhi 0, jab backend ready ho tab real value */
              }
            </p>
          </Link>

          <Link
            to="/AdminAuth/admin-docs"
            className="bg-white shadow-sm hover:shadow-md transition-all shadow-blue-200 rounded-lg cursor-pointer !p-5 text-center"
          >
            <h3 className="text-gray-600 font-medium text-base sm:text-lg">
              Documents
            </h3>
            <p className="text-2xl sm:text-3xl font-bold text-blue-700 !mt-2">
              {stats.approvedQueries || 0}
            </p>
          </Link>

          <Link
            to="/AdminAuth/admin-users"
            className="bg-white shadow-sm hover:shadow-md transition-all shadow-blue-200 rounded-lg cursor-pointer !p-5 text-center"
          >
            <h3 className="text-gray-600 font-medium text-base sm:text-lg">
              New Requests
            </h3>
            <p className="text-2xl sm:text-3xl font-bold text-blue-700 !mt-2">
              {stats.pendingQueries || 0}
            </p>
          </Link>
        </div>

        {/* ===== Chart Section ===== */}
        <section className="bg-gray-100 rounded-xl !p-4 w-[95vw]">
          <h2 className="text-2xl font-semibold !mb-4 text-gray-600">
            nriproperty.uk
          </h2>

          <div className="bg-white rounded-lg shadow-md !p-6">
            <h3 className="text-lg font-semibold text-gray-700 !mb-6">
              Analytics
            </h3>

            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100000]} />

                  <Tooltip />
                  <Legend />
                  <Bar dataKey="views" fill="#2563eb">
                    <LabelList dataKey="views" position="top" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminDashboard;
