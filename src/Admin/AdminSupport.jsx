import React, { useEffect, useState } from "react";
import AdminNavbar from "./Components/AdminNavbar";
import axios from "axios";
import { ADMIN_BASE_URL } from "../config";

const AdminSupport = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSupportQueries = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${ADMIN_BASE_URL}/admin/supportqueries`);
        setQueries(res.data.queries || []);
      } catch (error) {
        console.error("Error fetching support queries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSupportQueries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />

      <div className="!p-6">
        <h2 className="text-xl font-semibold text-gray-700 !mb-4">
          Support Queries
        </h2>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="!py-3 !px-4 text-left text-gray-700">Name</th>
                <th className="!py-3 !px-4 text-left text-gray-700">Phone</th>
                <th className="!py-3 !px-4 text-left text-gray-700">Location</th>
                <th className="!py-3 !px-4 text-left text-gray-700">Issue</th>
                <th className="!py-3 !px-4 text-left text-gray-700">Date</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center !py-6 text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : queries.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center !py-6 text-gray-500">
                    No support queries found.
                  </td>
                </tr>
              ) : (
                queries.map((item) => (
                  <tr key={item._id} className="border-b hover:bg-gray-50">
                    <td className="!py-3 !px-4">{item.name}</td>
                    <td className="!py-3 !px-4">{item.phone}</td>
                    <td className="!py-3 !px-4">{item.location}</td>
                    <td className="!py-3 !px-4">{item.issue}</td>
                    <td className="!py-3 !px-4">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminSupport;
