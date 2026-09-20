import React, { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { safeLocalStorage } from "../utils/safeStorage";

const CookieConsent = ({ onAccept, onDecline }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show banner with a slight delay for smoother user experience
    const timer = setTimeout(() => {
      const consent = safeLocalStorage.getItem("cookieConsent");
      if (!consent) {
        setShow(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setShow(false);
    onAccept();
  };

  const handleDecline = () => {
    setShow(false);
    onDecline();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md bg-white border border-gray-100 shadow-2xl rounded-2xl !p-6 z-[99999] flex flex-col gap-4 backdrop-blur-lg bg-opacity-95"
        >
          <div className="flex gap-4 items-start">
            <div className="!p-3 bg-red-50 text-red-700 rounded-xl flex-shrink-0">
              <Cookie className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">We value your privacy</h3>
              <p className="text-sm text-gray-600 !mt-1 leading-relaxed">
                This website uses cookies to analyze traffic, improve user experience, and assist with our marketing efforts (such as Google Ads). You can choose to accept all cookies or reject them. Read our{" "}
                <Link
                  to="/cookies-policy"
                  className="text-red-800 hover:text-red-900 underline font-medium cursor-pointer"
                >
                  Cookies Policy
                </Link>{" "}
                for details.
              </p>
            </div>
          </div>
          <div className="flex gap-3 justify-end !mt-1">
            <button
              onClick={handleDecline}
              className="!px-6 !py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-100/60 hover:bg-gray-100 active:scale-95 rounded-xl transition-all duration-200 cursor-pointer"
            >
              Reject All
            </button>
            <button
              onClick={handleAccept}
              className="!px-6 !py-2.5 text-sm font-semibold text-white bg-red-800 hover:bg-red-900 active:bg-red-950 active:scale-95 rounded-xl transition-all duration-200 shadow-lg shadow-red-800/10 cursor-pointer"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
