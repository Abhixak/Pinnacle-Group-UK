import React, { useState, useEffect, useRef } from "react";

const MakeCallButton = ({ variant = "primary" }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const buttonRef = useRef(null);

  const phoneNumbers = {
    "India 🇮🇳": "+919216399808",
    "United Kingdom 🇬🇧": "+447868143558",
    "Canada 🇨🇦": "+16132956385",
    "United States 🇺🇸": "+14146906435",
  };

  const handleCall = (number) => {
    const callWindow = window.open(`tel:${number}`);
    if (!callWindow) {
      alert(`Something went wrong! Please call manually: ${number}`);
    }
    setShowOptions(false);
  };

  useEffect(() => {
    if (showOptions && buttonRef.current) {
      const buttonBottom = buttonRef.current.getBoundingClientRect().bottom;
      const dropdownHeight = 200;
      const spaceBelow = window.innerHeight - buttonBottom;
      setDropUp(spaceBelow < dropdownHeight);
    }
  }, [showOptions]);

  return (
    <div className="relative inline-block w-full md:w-auto" ref={buttonRef}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={showOptions}
        onClick={() => setShowOptions(!showOptions)}
        className={
          variant === "quiet"
            ? "w-full rounded-lg border border-slate-200 bg-white !px-4 !py-2.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 md:w-auto"
            : "w-full rounded bg-green-600 !px-6 !py-2 text-lg font-semibold text-white transition hover:bg-green-700 md:w-auto"
        }
      >
        Make a Call
      </button>

      {showOptions && (
        <div
          className={`absolute ${
            dropUp ? "bottom-full !mb-2" : "top-full !mt-2"
          } right-0 w-64 bg-white border rounded-xl !my-4 shadow-lg z-50 !p-3`}
        >
          <p className="text-sm font-semibold !mb-2 text-gray-700 !m-0">
            Choose a branch to call:
          </p>
          {Object.entries(phoneNumbers).map(([country, number]) => (
            <button
              key={country}
              type="button"
              onClick={() => handleCall(number)}
              className="w-full text-left !p-2 !m-0 rounded hover:bg-gray-100 text-gray-800 text-sm"
            >
              {country} — <span className="font-mono">{number}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MakeCallButton;
