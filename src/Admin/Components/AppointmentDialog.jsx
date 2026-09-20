import React, { useState } from "react";
import { Clock, Trash2, History } from "lucide-react"; // Make sure you have lucide-react installed

const AppointmentDialog = ({ user, close }) => {
  const [showHistory, setShowHistory] = useState(false);

  // Dummy history — Replace with API later
  const previousSlots = [
    { date: "2025-01-10", time: "10:30 AM", message: "Discuss Property Paperwork" },
    { date: "2025-01-18", time: "02:00 PM", message: "Follow-up Meeting" }
  ];

  const [slots, setSlots] = useState([{ date: "", time: "", message: "" }]);

  const addSlot = () => {
    setSlots([...slots, { date: "", time: "", message: "" }]);
  };

  const deleteSlot = (index) => {
    const updated = slots.filter((_, i) => i !== index);
    setSlots(updated);
  };

  const updateSlot = (index, field, value) => {
    const updated = [...slots];
    updated[index][field] = value;
    setSlots(updated);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999]">
      <div className="bg-white !p-6 rounded-lg shadow-lg !m-4 max-h-[75vh] overflow-y-auto">

        {/* Header with History Button */}
        <div className="flex justify-between items-center !mb-4">
          <h2 className="text-xl font-semibold">Schedule Appointment</h2>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <History size={20} />
          </button>
        </div>

        <p className="text-gray-600 !mb-4">{user.name} - {user.email}</p>

        {/* History Section */}
        {showHistory && (
          <div className="border rounded !p-3 !mb-4 bg-gray-50">
            <h3 className="font-medium !mb-2 flex items-center gap-2">
              <Clock size={18} /> Previous Appointments
            </h3>

            <ul className="text-sm list-disc !ml-5 space-y-1">
              {previousSlots.map((slot, i) => (
                <li key={i}>
                  {slot.date} @ {slot.time} - "{slot.message}"
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Appointment Slot Inputs */}
        {slots.map((slot, index) => (
          <div key={index} className="border !p-3 rounded !mb-3 relative">

            {/* Delete Slot Button */}
            {slots.length > 1 && (
              <button
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                onClick={() => deleteSlot(index)}
              >
                <Trash2 size={18} />
              </button>
            )}

            <h4 className="font-medium !mb-2">Slot {index + 1}</h4>

            <input
              type="date"
              className="w-full border !p-2 !mb-2"
              value={slot.date}
              onChange={(e) => updateSlot(index, "date", e.target.value)}
            />

            <input
              type="time"
              className="w-full border !p-2 !mb-2"
              value={slot.time}
              onChange={(e) => updateSlot(index, "time", e.target.value)}
            />

            <textarea
              className="w-full border !p-2"
              placeholder="Message"
              value={slot.message}
              onChange={(e) => updateSlot(index, "message", e.target.value)}
            ></textarea>
          </div>
        ))}

        <button
          onClick={addSlot}
          className="bg-green-600 text-white !px-3 !py-2 rounded !mb-4 w-full"
        >
          + Slot
        </button>

        <div className="flex justify-end gap-3">
          <button onClick={close} className="!px-3 !py-2 text-gray-600 hover:underline">
            Cancel
          </button>
          <button className="bg-blue-600 text-white !px-4 !py-2 rounded">
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default AppointmentDialog;
