import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

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
  const [selectedCode, setSelectedCode] = useState("+91");
  const inputRef = useRef(null);
  const chatboxRef = useRef(null);
  const formRef = useRef();
  const [showRobotIcon, setShowRobotIcon] = useState(false);
  const [collectedData, setCollectedData] = useState({
    messages: [],
  });

  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatboxRef.current)
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }, 100);
  };

  const addMessage = (sender, text) => {
    setChatHistory((prev) => [...prev, { sender, text }]);
    setCollectedData((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        `${sender === "bot" ? "🤖" : "User"}: ${text}`,
      ],
    }));
    scrollToBottom();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h2ax3kz",
        "template_1iz83m7",
        formRef.current,
        "pQqSTFuOf-O4iXuH-"
      )
      .then(
        () => alert("Conversation sent successfully!"),
        () => alert("Failed to send details. Please try again.")
      );
  };

  const handleDetailSubmit = () => {
    const value = inputRef.current?.value?.trim();
    if (!value && inputType !== "countryCode") return;

    if (inputType === "city") {
      addMessage("user", value);
      inputRef.current.value = "";
      addMessage("bot", "Please enter your Name:");
      setInputType("name");
      setInputLabel("Enter your name:");
      return;
    }

    if (inputType === "name") {
      if (!/^[A-Za-z\s]+$/.test(value)) {
        addMessage("bot", "Please enter a valid name.");
        return;
      }
      addMessage("user", value);
      inputRef.current.value = "";
      addMessage("bot", "Select your Country Code:");
      setInputType("countryCode");
      setInputLabel("Select Country Code:");
      return;
    }

    if (inputType === "countryCode") {
      addMessage("user", selectedCode);
      addMessage("bot", "Now enter your Phone Number:");
      setInputType("phone");
      setInputLabel("Enter your phone number:");
      return;
    }

    if (inputType === "phone") {
      if (!/^[0-9]{7,15}$/.test(value)) {
        addMessage("bot", "Phone number should be 7–15 digits.");
        return;
      }
      addMessage("user", value);
      addMessage("bot", "✅ Thank you! Our team will contact you soon.");
      setShowInput(false);
      inputRef.current.value = "";
      setFollowupOptions(mainOptions);
      setTimeout(() => formRef.current.requestSubmit(), 600);
    }
  };

  const handleOptionClick = (value) => {
    addMessage("user", value);
    switch (value) {
      case "Buy Property":
      case "Sell Property":
        addMessage("bot", "Great! In which city would you like to deal?");
        setInputType("city");
        setInputLabel("Enter city name:");
        setShowInput(true);
        setFollowupOptions([]);
        break;

      case "Legal Help":
        addMessage(
          "bot",
          "We offer POA, title checks & NRI legal support. Want a callback?"
        );
        setFollowupOptions(["Yes", "No"]);
        break;

      case "Talk to Advisor":
        addMessage("bot", "Select a branch to call directly:");
        setFollowupOptions([
          "📞 UK: +44-7868143558",
          "📞 IN: +91-9216399808",
          "📞 CA: +1-613-295-6385",
          "📞 US: +1-414-690-6435",
        ]);
        break;

      case "📞 UK: +44-7868143558":
        window.open("tel:+447868143558");
        addMessage("bot", "📞 Calling UK Branch...");
        setFollowupOptions(mainOptions);
        break;

      case "📞 IN: +91-9216399808":
        window.open("tel:+919216399808");
        addMessage("bot", "📞 Calling India Branch...");
        setFollowupOptions(mainOptions);
        break;

      case "📞 CA: +1-613-295-6385":
        window.open("tel:+16132956385");
        addMessage("bot", "📞 Calling Canada Branch...");
        setFollowupOptions(mainOptions);
        break;

      case "📞 US: +1-414-690-6435":
        window.open("tel:+14146906435");
        addMessage("bot", "📞 Calling US Branch...");
        setFollowupOptions(mainOptions);
        break;

      case "Contact via WhatsApp":
        addMessage("bot", "Select a branch to chat via WhatsApp:");
        setFollowupOptions([
          "💬 UK WhatsApp",
          "💬 IN WhatsApp",
          "💬 CA WhatsApp",
          "💬 US WhatsApp",
        ]);
        break;

      case "💬 UK WhatsApp":
        window.open("https://wa.me/+447868143558", "_blank");
        addMessage("bot", "Opening WhatsApp chat with UK Branch...");
        setFollowupOptions(mainOptions);
        break;

      case "💬 IN WhatsApp":
        window.open("https://wa.me/+919216399808", "_blank");
        addMessage("bot", "Opening WhatsApp chat with India Branch...");
        setFollowupOptions(mainOptions);
        break;

      case "💬 CA WhatsApp":
        window.open("https://wa.me/+16132956385", "_blank");
        addMessage("bot", "Opening WhatsApp chat with Canada Branch...");
        setFollowupOptions(mainOptions);
        break;

      case "💬 US WhatsApp":
        window.open("https://wa.me/+14146906435", "_blank");
        addMessage("bot", "Opening WhatsApp chat with US Branch...");
        setFollowupOptions(mainOptions);
        break;

      case "Thanks":
        addMessage("bot", "You're welcome! Have a great day.");
        setIsOpen(false);
        break;

      default:
        addMessage("bot", `Got it! To proceed, we need your details.`);
        setContactMethod("email");
        setInputType("name");
        setInputLabel("Please enter your Name:");
        setShowInput(true);
        break;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowRobotIcon(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const isAtMainMenu = JSON.stringify(followupOptions) === JSON.stringify(mainOptions);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowRobotIcon(false);
        }}
        className="fixed bottom-6 right-6 z-30 border-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg !px-5 !py-3 flex items-center justify-center"
        style={{
          width: isOpen ? "150px" : showRobotIcon ? "60px" : "150px",
          transition: "width 0.5s ease-in-out",
        }}
        title={showRobotIcon ? "Need Help?" : ""}
      >
        {isOpen ? "Close Chat" : showRobotIcon ? "🤖" : "Need Help?"}
      </button>

      {isOpen && (
        <div className="fixed bottom-22 right-4 sm:right-6 w-[90vw] sm:w-80 max-w-sm max-h-[80vh] flex flex-col border-4 border-blue-200 bg-white rounded-lg shadow-lg overflow-hidden z-50">
          <div className="flex items-center justify-start bg-white border-b !px-4 !py-2">
            <button
              onClick={() => {
                if (isAtMainMenu) {
                  setIsOpen(false);
                } else {
                  setFollowupOptions(mainOptions);
                  setShowInput(false);
                  addMessage("bot", "How can I assist you now?");
                }
              }}
              className="text-blue-400 hover:text-blue-900 hover:underline text-sm !p-2"
            >
              ← Go Back
            </button>
          </div>

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

          {/* Input */}
          {showInput && inputType !== "countryCode" && (
            <div className="flex flex-col sm:flex-row border-t bg-white !px-3 !py-2 gap-2">
              <input
                ref={inputRef}
                type="text"
                placeholder={inputLabel}
                className="w-full text-sm border rounded-lg !px-3 !py-2 outline-none"
                onKeyDown={(e) => e.key === "Enter" && handleDetailSubmit()}
              />
              <button
                onClick={handleDetailSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm !px-4 !py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          )}

          {showInput && inputType === "countryCode" && (
            <div className="flex flex-col sm:flex-row border-t bg-white !px-3 !py-2 gap-2">
              <input
                type="text"
                className="w-full text-sm border rounded-lg !px-3 !py-2 outline-none"
                list="countryCodes"
                value={selectedCode}
                onChange={(e) => setSelectedCode(e.target.value)}
                placeholder="Enter country code"
              />
              <datalist id="countryCodes">
                <option value="+91">🇮🇳 India (+91)</option>
                <option value="+44">🇬🇧 UK (+44)</option>
                <option value="+1">🇺🇸 USA / 🇨🇦 Canada (+1)</option>
              </datalist>

              <button
                onClick={handleDetailSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm !px-4 !py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          )}

          {!showInput && (
            <div className="grid grid-cols-1 gap-2 !p-3 border-t bg-white">
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

      {/* Hidden Form to Send Email */}
      <form ref={formRef} onSubmit={sendEmail} style={{ display: "none" }}>
        <textarea
          name="message"
          value={collectedData.messages.join("\n")}
          readOnly
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Chatbot;
