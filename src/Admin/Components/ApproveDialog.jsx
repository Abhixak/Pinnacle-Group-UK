import React, { useEffect, useState } from "react";
import { ADMIN_BASE_URL, API_BASE_URL } from "../../config";

const ApproveDialog = ({ user, close }) => {
  const [contractHistory, setContractHistory] = useState([]);
  const [file, setFile] = useState(null);

  // ✅ Fetch contract history when dialog opens
  const handleSave = async () => {
    if (!file) return alert("Please select a file first.");

    const formData = new FormData();
    formData.append("contractFile", file);

    try {
      const res = await fetch(
        `${ADMIN_BASE_URL}/admin/upload-contract/${user._id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      if (data.success) {
        alert("✅ Contract uploaded!");
        close();
      }
    } catch (err) {
      console.log("❌ Upload Error:", err);
    }
  };

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/contract/history/${user._id}`
        );
        const data = await res.json();

        if (data.success) {
          setContractHistory(data.contracts);
        }
      } catch (error) {
        console.log("❌ Error fetching contract history:", error);
      }
    };

    fetchHistory();
  }, [user._id]);

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="bg-white !p-6 rounded-lg shadow-lg min-w-[350px] max-w-[500px]">
        <h2 className="text-xl font-semibold !mb-3">Approve User</h2>
        <p className="text-gray-600 !mb-4">
          {user.name} - {user.email}
        </p>

        <h3 className="font-semibold">Contract History:</h3>

        {contractHistory.length === 0 ? (
          <p className="text-sm text-gray-500 !mb-3">
            No previous contracts found.
          </p>
        ) : (
          <ul className="list-disc !ml-6 text-sm !mb-3">
            {contractHistory.map((c, i) => (
              <li key={i}>{c.fileName || "Contract File"}</li>
            ))}
          </ul>
        )}

        <label className="block !mb-4">
          <span className="text-sm font-medium text-gray-700">
            Upload Contract File
          </span>
          <input
            type="file"
            accept=".pdf,.docx"
            className="block !mt-1 border rounded-lg w-full text-sm text-gray-600 !p-2"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        <div className="flex justify-end gap-3">
          <button
            onClick={close}
            className="!px-3 cursor-pointer !py-2 text-gray-600 hover:underline"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white cursor-pointer !px-4 !py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApproveDialog;
