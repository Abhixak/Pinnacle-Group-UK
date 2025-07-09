import React from "react";

const MakeCallButton = () => {
  const handleCallClick = () => {
    const phoneNumber = "tel:+919216399808";

    // Try to open the phone dialer
    const callWindow = window.open(phoneNumber);

    // Fallback alert if unable to open dialer
    if (!callWindow) {
      alert("Something Went Wrong! You can make a call to: +91-921639980");
    }
  };

  return (
    <button
      onClick={handleCallClick}
      className="bg-green-600 text-white !px-6 !py-2 rounded shadow hover:bg-green-700 transition duration-300"
    >
      Make a Call
    </button>
  );
};

export default MakeCallButton;
