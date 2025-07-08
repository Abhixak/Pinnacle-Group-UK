import React, { useRef, useState } from "react";
import { useEffect } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "bot",
      text: "🤖 Hello! I'm your Property Assistant. How can I help you today?",
    },
  ]);
  const mainOptions = [
    "Buy Property",
    "Sell Property",
    "Legal Help",
    "Talk to Advisor",
    "Contact via WhatsApp",
    "Thanks",
  ];
  const [followupOptions, setFollowupOptions] = useState(mainOptions);
  const [showInput, setShowInput] = useState(false);
  const [inputLabel, setInputLabel] = useState("");
  const [inputType, setInputType] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const inputRef = useRef(null);
  const chatboxRef = useRef(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatboxRef.current)
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }, 100);
  };

  const addMessage = (sender, text) => {
    setChatHistory((prev) => [...prev, { sender, text }]);
    scrollToBottom();
  };

  const askForDetails = (method = "") => {
    setContactMethod(method);
    setShowInput(true);
    setInputLabel("Please enter your Name:");
    setInputType("name");
  };

  const handleDetailSubmit = () => {
    const value = inputRef.current.value.trim();
    if (!value) return;

    if (inputType === "name") {
      const nameValid = /^[A-Za-z\s]+$/.test(value);
      if (!nameValid) {
        addMessage(
          "bot",
          "Please enter a valid name without numbers or special characters."
        );
        return;
      }
      addMessage("user", value);
      if (contactMethod === "email") {
        addMessage("bot", "Thanks! Please enter your Email:");
        setInputType("email");
        setInputLabel("Please enter your Email:");
      } else {
        addMessage("bot", "Thanks! Enter your Country Code (e.g., +91):");
        setInputType("countryCode");
        setInputLabel("Enter Country Code:");
      }
      inputRef.current.value = "";
      return;
    }

    if (inputType === "email") {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!emailValid) {
        addMessage(
          "bot",
          "Please enter a valid email address (example@domain.com)."
        );
        return;
      }
      addMessage("user", value);
      addMessage("bot", "Great! Enter your Country Code (e.g., +91):");
      setInputType("countryCode");
      setInputLabel("Enter Country Code:");
      inputRef.current.value = "";
      return;
    }

    if (inputType === "countryCode") {
      const codeValid = /^\+\d{1,4}$/.test(value);
      if (!codeValid) {
        addMessage(
          "bot",
          "Please enter a valid country code (e.g., +91, +44)."
        );
        return;
      }
      addMessage("user", value);
      addMessage("bot", "Now enter your Phone Number:");
      setInputType("phone");
      setInputLabel("Please enter your Phone Number:");
      inputRef.current.value = "";
      return;
    }

    if (inputType === "phone") {
      const phoneValid = /^[0-9]{7,15}$/.test(value);
      if (!phoneValid) {
        addMessage(
          "bot",
          "Please enter a valid phone number (7–15 digits, no letters)."
        );
        return;
      }
      addMessage("user", value);
      addMessage("bot", "Thank you! Our team will contact you soon.");
      setShowInput(false);
      setFollowupOptions(mainOptions);
      inputRef.current.value = "";
    }
  };

  const handleOptionClick = (value) => {
    addMessage("user", value);

    switch (value) {
      case "Buy Property":
      case "Sell Property":
        addMessage("bot", "Great! Which city are you interested in?");
        setFollowupOptions([
          "Delhi",
          "Noida",
          "Mumbai",
          "Chandigarh",
          "Mohali",
          "Bangalore",
          "Others",
        ]);
        break;
      case "Legal Help":
        addMessage(
          "bot",
          "We offer POA, title checks & NRI legal support. Want a callback?"
        );
        setFollowupOptions(["Yes", "No"]);
        break;
      case "Talk to Advisor":
        addMessage("bot", "We’ll schedule a callback. Preferred method?");
        setFollowupOptions(["Phone", "Email"]);
        break;
      case "Contact via WhatsApp":
        addMessage("bot", "Which branch would you like to contact?");
        setFollowupOptions(["India Branch", "London Branch"]);
        break;
      case "Thanks":
        addMessage("bot", "You're welcome! Let us know if you need more help.");
        setFollowupOptions(mainOptions);
        break;
      case "India Branch":
        window.open("https://wa.me/+919216399808", "_blank");
        addMessage("bot", "Redirecting you to India Branch on WhatsApp...");
        setFollowupOptions(mainOptions);
        break;
      case "London Branch":
        window.open("https://wa.me/+447892170550", "_blank");
        addMessage("bot", "Redirecting you to London Branch on WhatsApp...");
        setFollowupOptions(mainOptions);
        break;
      case "Phone":
        addMessage(
          "bot",
          "Great! Let's get your details for a phone callback."
        );
        askForDetails("phone");
        break;
      case "Email":
        addMessage(
          "bot",
          "Great! Let's get your details for an email follow-up."
        );
        askForDetails("email");
        break;
      case "Yes":
      case "No":
      case "Delhi":
      case "Noida":
      case "Mumbai":
      case "Chandigarh":
      case "Mohali":
      case "Bangalore":
      case "Others":
        addMessage("bot", `Got it! To proceed, we need a few details.`);
        askForDetails();
        break;
      default:
        addMessage("bot", "I'm not sure how to help with that.");
        setFollowupOptions(mainOptions);
    }
  };
  const [showRobotIcon, setShowRobotIcon] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowRobotIcon(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowRobotIcon(false); // Reset icon on click
        }}
        className={`fixed bottom-6 right-6 z-50 border-4 transition-all duration-500 ease-in-out 
              hover:border-gray-200 hover:text-gray-200 bg-blue-600 hover:bg-blue-700 text-white 
              rounded-full shadow-lg !px-5 !py-3 overflow-hidden inline-flex justify-center items-center
              transition-[width]`}
        style={{
          width: isOpen ? "150px" : showRobotIcon ? "60px" : "150px",
        }}
      >
        {isOpen ? "Close Chat" : showRobotIcon ? "🤖" : "Need Help?"}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[90vw] sm:w-80 max-w-sm max-h-[80vh] flex flex-col border-4 border-blue-200 bg-white rounded-lg shadow-lg overflow-hidden z-50">
          <div
            ref={chatboxRef}
            className="flex-1 overflow-y-auto !px-4 !py-3 bg-gray-50"
          >
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`!my-2 text-sm ${
                  msg.sender === "bot"
                    ? "text-blue-700 text-left"
                    : "text-right text-gray-800"
                }`}
              >
                {msg.sender === "bot" ? "🤖 " : ""}
                {msg.text}
              </div>
            ))}
          </div>

          {showInput && (
            <div className="flex flex-col sm:flex-row border-t border-gray-200 bg-white !px-3 !py-2 gap-2 sm:gap-2">
              <input
                ref={inputRef}
                type="text"
                placeholder={inputLabel}
                className="w-full sm:flex-1 text-sm border border-gray-300 rounded-lg !px-3 !py-2 outline-none"
                onKeyDown={(e) => e.key === "Enter" && handleDetailSubmit()}
              />
              <button
                onClick={handleDetailSubmit}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm !px-4 !py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          )}

          {!showInput && (
            <div className="grid grid-cols-1 gap-2 !p-3 border-t border-gray-200 bg-white">
              {followupOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  className="bg-blue-500 text-white !px-4 !py-2 rounded-lg hover:bg-blue-600 text-sm"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;
