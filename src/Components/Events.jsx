import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const events2025 = [
  // Global
  { date: "2025-01-01", festival: "New Year’s Day", message: "Welcome 2025 with joy!", country: "Global" },
  { date: "2025-04-18", festival: "Good Friday", message: "Reflect and cherish this Good Friday.", country: "Global" },
  { date: "2025-04-21", festival: "Easter Monday", message: "Happy Easter Monday!", country: "Global" },
  { date: "2025-12-25", festival: "Christmas Day", message: "Merry Christmas to you and yours!", country: "Global" },

  // India
  { date: "2025-01-13", festival: "Lohri", message: "Celebrate warmth and joy this Lohri!", country: "India" },
  { date: "2025-01-14", festival: "Makar Sankranti / Pongal", message: "Warm wishes on Makar Sankranti!", country: "India" },
  { date: "2025-03-13", festival: "Holika Dahan", message: "Holika Dahan—victory of virtue!", country: "India" },
  { date: "2025-03-14", festival: "Holi", message: "Splash into colors of joy this Holi!", country: "India" },
  { date: "2025-03-30", festival: "Ram Navami", message: "Blessings on Ram Navami!", country: "India" },
  { date: "2025-04-14", festival: "Ambedkar Jayanti", message: "Honoring Dr. Ambedkar’s legacy.", country: "India" },
  { date: "2025-06-27", festival: "Ratha Yatra", message: "Joyous Ratha Yatra!", country: "India" },
  { date: "2025-07-10", festival: "Guru Purnima", message: "Blessed Guru Purnima!", country: "India" },
  { date: "2025-08-09", festival: "Raksha Bandhan", message: "Celebrate sibling love!", country: "India" },
  { date: "2025-08-15", festival: "Independence Day", message: "Happy Independence Day, India!", country: "India" },
  { date: "2025-08-27", festival: "Ganesh Chaturthi", message: "Blessed Ganesh Chaturthi!", country: "India" },
  { date: "2025-10-21", festival: "Diwali", message: "Happy Diwali – Festival of Lights!", country: "India" },
  { date: "2025-11-06", festival: "Bhai Dooj", message: "Celebrate sibling bonds!", country: "India" },

  // United Kingdom
  { date: "2025-05-05", festival: "Early May Bank Holiday", message: "Enjoy the May Day holiday!", country: "UK" },
  { date: "2025-12-26", festival: "Boxing Day", message: "Enjoy Boxing Day!", country: "UK" },
];

// 🎨 Festival-specific background styles
// 🎨 Festival-specific background styles (professional palettes)
const festivalBackgrounds = {
  "New Year’s Day": "from-indigo-600 via-blue-500 to-cyan-400", // cool + celebratory
  "Good Friday": "from-gray-800 via-gray-900 to-black", // solemn, reflective
  "Easter Monday": "from-yellow-300 via-pink-400 to-purple-500", // cheerful pastel
  "Christmas Day": "from-red-600 via-green-600 to-emerald-500", // traditional Christmas colors
  "Lohri": "from-amber-500 via-orange-600 to-red-600", // festive fire tones
  "Makar Sankranti / Pongal": "from-yellow-400 via-orange-400 to-amber-500", // harvest warmth
  "Holika Dahan": "from-red-700 via-orange-600 to-amber-500", // fire & devotion
  "Holi": "from-pink-500 via-purple-500 to-blue-500", // colorful splash
  "Ram Navami": "from-yellow-500 via-orange-500 to-red-500", // divine & festive
  "Ambedkar Jayanti": "from-blue-700 via-indigo-600 to-cyan-500", // symbolic of his legacy
  "Ratha Yatra": "from-orange-500 via-red-500 to-yellow-500", 
  "Guru Purnima": "from-indigo-600 via-purple-600 to-pink-500",
  "Raksha Bandhan": "from-purple-600 via-pink-500 to-indigo-500", // bonding colors
  "Independence Day": "from-orange-500 via-white to-green-600", // Indian tricolor
  "Ganesh Chaturthi": "from-red-600 via-orange-500 to-amber-400", // vibrant
  "Diwali": "from-amber-400 via-orange-500 to-red-600", // festival of lights
  "Bhai Dooj": "from-pink-500 via-red-500 to-amber-400", 
  "Boxing Day": "from-sky-500 via-indigo-600 to-slate-700", // modern festive winter
};


export default function FestivalPopup({ userCountry = "Global" }) {
  const [visible, setVisible] = useState(false);
  const [eventsToday, setEventsToday] = useState([]);

  useEffect(() => {
    const todayStr = new Date().toLocaleDateString("en-CA"); // yyyy-mm-dd
    const matches = events2025.filter(
      e => e.date === todayStr && (e.country === userCountry || e.country === "Global")
    );
    if (matches.length > 0) {
      setEventsToday(matches);
      setVisible(true);
    }
  }, [userCountry]);

  if (!visible || eventsToday.length === 0) return null;

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 !p-4">
          {eventsToday.map((event, idx) => {
            const bgClass = festivalBackgrounds[event.festival] || "from-orange-400 via-pink-500 to-red-600";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`relative w-full max-w-lg rounded-2xl shadow-2xl !p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br ${bgClass}`}
              >
                <button
                  onClick={() => setVisible(false)}
                  className="absolute top-4 right-4 bg-white text-red-600 rounded-full !p-2 shadow-md hover:bg-red-100"
                  aria-label="Close popup"
                >
                  <X size={20} />
                </button>

                <img src="/logo.png" alt="Company Logo" className="h-30 !mb-4 drop-shadow-lg" />

                <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg !mb-2">
                  Happy {event.festival}!
                </h1>
                <p className="text-base md:text-lg text-white/90 !mb-4">{event.message}</p>

                <p className="text-sm md:text-base text-yellow-200 font-semibold">
                  Celebrate {event.festival} with peace of mind – while we manage, buy, sell, or lease your property remotely in India for NRIs worldwide.
                </p>
              </motion.div>
            );
          })}
        </div>
      )}
    </AnimatePresence>
  );
}
