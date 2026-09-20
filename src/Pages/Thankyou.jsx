import React, { useState, useEffect } from "react"; // Added useEffect
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  ChevronDown,
  ChevronUp,
  Images,
} from "lucide-react";
import { BsTiktok } from "react-icons/bs";
import SEO from "../Components/SEO";

const ThankYou = () => {
  const [showCallOptions, setShowCallOptions] = useState(false);
  const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);

  // Trigger Google Ads Conversion on Component Mount
  useEffect(() => {
    // 1. Re-verify the global gtag configuration function exists
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    // 2. Fire your specific conversion event to Google Ads
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-999905524/zdfNCI_9x6EbEPSx5dwD",
      });
    } else {
      // Fallback if script initialized later in dataLayer
      gtag("event", "conversion", {
        send_to: "AW-999905524/zdfNCI_9x6EbEPSx5dwD",
      });
    }
  }, []);

  const phoneNumbers = {
    UK: "+447868143558",
    IN: "+919216399808",
    CA: "+16132956385",
    US: "+14146906435",
    EU: "+4915563030611",
  };

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  const handleWhatsApp = (number) => {
    window.open(`https://wa.me/${number.replace(/\D/g, "")}`, "_blank");
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center !p-6">
      <SEO
        title="Thank You | NRI Property Consultation"
        description="Thank you for contacting us. Our team will review your request and get back to you."
        path="/thankyou"
        noIndex
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl w-full bg-white border-8 border-yellow-600 shadow-xl !p-10 rounded-2xl text-center relative"
        style={{ fontFamily: "'Times New Roman', serif" }}
      >
        {/* Decorative Border */}
        <div className="absolute inset-2 border-4 border-yellow-400 rounded-xl pointer-events-none"></div>
        {/* Thank You Message */}
        <h1 className="text-2xl font-semibold text-gray-800 !mb-4">
          Thank You for Reaching Out!
        </h1>
        <p className="text-gray-700 !mb-8 leading-relaxed">
          Thank you for submitting your request! We've received your application
          and our team is currently reviewing it. You'll receive a confirmation
          email once your account is approved, and you'll be able to login
          immediately after.
        </p>

        {/* Social Media */}
        <div className="flex justify-center gap-6 !mb-10">
          <a
            href="https://www.facebook.com/pinnacleinfra.co.in"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <Facebook size={28} />
          </a>
          <a
            href="https://www.instagram.com/pinnaclegrouplondon/"
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://www.youtube.com/@pinnaclegroupofficial"
            target="_blank"
            rel="noreferrer"
            className="text-red-600 hover:text-red-800"
          >
            <Youtube size={28} />
          </a>
          <a
            href="https://www.tiktok.com/@nripropertyservice"
            target="_blank"
            rel="noreferrer"
            className="relative group"
          >
            <BsTiktok
              size={28}
              className="text-black hover:text-[#EE1D52] bg-gradient-to-r from-[#EE1D52] via-black to-[#69C9D0] bg-clip-text transition duration-300"
            />
          </a>
        </div>

        {/* Call & WhatsApp Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 !mb-12">
          {/* Call Section */}
          <div className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setShowCallOptions(!showCallOptions);
                setShowWhatsAppOptions(false);
              }}
              className="flex items-center justify-center gap-2 bg-yellow-600 text-white !px-6 !py-3 rounded-full shadow-md hover:bg-yellow-700 w-full sm:w-auto"
            >
              <Phone size={20} /> Call{" "}
              {showCallOptions ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </motion.button>

            <AnimatePresence>
              {showCallOptions && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="!mt-3 flex flex-col gap-2"
                >
                  {Object.entries(phoneNumbers).map(([country, number]) => (
                    <motion.button
                      key={country}
                      whileHover={{ scale: 1.05 }}
                      className="bg-yellow-100 text-yellow-700 border border-yellow-400 !px-5 !py-2 rounded-lg shadow-sm hover:bg-yellow-200"
                      onClick={() => handleCall(number)}
                    >
                      {country} ({number})
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* WhatsApp Section */}
          <div className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setShowWhatsAppOptions(!showWhatsAppOptions);
                setShowCallOptions(false);
              }}
              className="flex items-center justify-center gap-2 bg-green-600 text-white !px-6 !py-3 rounded-full shadow-md hover:bg-green-700 w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              WhatsApp{" "}
              {showWhatsAppOptions ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </motion.button>

            <AnimatePresence>
              {showWhatsAppOptions && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="!mt-3 flex flex-col gap-2"
                >
                  {Object.entries(phoneNumbers).map(([country, number]) => (
                    <motion.button
                      key={country}
                      whileHover={{ scale: 1.05 }}
                      className="bg-green-100 text-green-700 border border-green-400 !px-5 !py-2 rounded-lg shadow-sm hover:bg-green-200"
                      onClick={() => handleWhatsApp(number)}
                    >
                      {country} ({number})
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Explore */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-gray-800 text-white !px-6 !py-2 rounded-full shadow-md hover:bg-gray-900 !mx-auto"
          onClick={() => (window.location.href = "/")}
        >
          <Images size={18} /> Explore
        </motion.button>
      </motion.div>
      {/* Trust Note */}
      <p className="text-sm italic text-gray-500 !my-8 text-center">
        Proudly serving clients for more than <b>8 years</b> with trust &
        dedication.
      </p>
    </div>
  );
};

export default ThankYou;