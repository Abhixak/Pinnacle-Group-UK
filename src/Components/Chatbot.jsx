import { BadgeQuestionMark, BadgeQuestionMarkIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/support")}
      className="fixed bottom-24 cursor-pointer right-6 z-30 border-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg !p-3 flex items-center justify-center"
      title="Support"
      aria-label="Open support chat"
    >
      <BadgeQuestionMarkIcon className="h-6"/>
    </button>
  );
};

export default Chatbot;
