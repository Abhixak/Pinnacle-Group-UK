// src/Components/Events.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { safeSessionStorage } from "../utils/safeStorage";


/* ---------------- FESTIVALS ---------------- */

const festivals = [
  {
    name: "New Year’s Day",
    date: "1 Jan 2026",
    description: "Celebrate the beginning of a new year with joy and positivity.",
    image: "https://i.imghippo.com/files/DMm2001nR.jpg",
  },
  {
    name: "Happy Lohri",
    date: "13 Jan 2026",
    description: "Celebrate the Lohri with joy and positivity.",
    image: "https://res.cloudinary.com/dljubulyn/image/upload/f_auto,q_auto/v1786693105/events/ovbvj64ubpkop8nbxacc.png",
  },
  {
    name: "Navratri",
    date: "22 Sep 2025 - 2 Oct 2025",
    description: "Nine nights of devotion, dance, and worship of Goddess Durga.",
    image: "https://res.cloudinary.com/dljubulyn/image/upload/f_auto,q_auto/v1786693106/events/ggnrs3smx5ab2sze1gwy.jpg",
  },
  {
    name: "Karwa Chauth",
    date: "10 Oct 2025",
    description: "A fasting ritual for the well-being of husbands.",
    image: "https://res.cloudinary.com/dljubulyn/image/upload/f_auto,q_auto/v1786693104/events/wvygqp4mswwmadeigp9r.jpg",
  },
  {
    name: "Diwali",
    date: "20 Oct 2025",
    description: "Festival of Lights celebrating good over evil.",
    image: "https://res.cloudinary.com/dljubulyn/image/upload/f_auto,q_auto/v1786693103/events/chhzombxwcjrgwmwsrbh.jpg",
  },
];

/* ---------------- DATE HELPERS ---------------- */

const MONTHS = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

function parseSingleDate(str) {
  if (!str) return null;
  const parts = str.replace(/(st|nd|rd|th)/gi, "").split(" ");
  if (parts.length < 3) return null;
  return new Date(
    Number(parts[2]),
    MONTHS[parts[1].toLowerCase().slice(0, 3)],
    Number(parts[0])
  );
}

function parseDateRange(str) {
  if (!str) return [null, null];
  const s = str.replace(/[–—]/g, "-");
  const parts = s.split("-").map(p => p.trim());

  if (parts.length === 2) {
    const start = parseSingleDate(parts[0]);
    const end = parseSingleDate(
      /\d{4}$/.test(parts[1]) ? parts[1] : `${parts[1]} ${parts[0].slice(-4)}`
    );
    return [start, end];
  }

  const single = parseSingleDate(s);
  return [single, single];
}

/* ---------------- COMPONENT ---------------- */

export default function Events() {
  const [todayFestivals, setTodayFestivals] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
    todayFestivals.forEach(ev => {
      safeSessionStorage.setItem(`dismissedFestival_${ev.name}`, "true");
    });
    setShowPopup(false);
  };

  /* generate sparks ONCE */
  const sparks = useMemo(
    () =>
      Array.from({ length: 12 }).map(() => ({
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 2,
      })),
    []
  );

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showPopup]);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const matches = festivals.filter(f => {
      const [start, end] = parseDateRange(f.date);
      const isDismissed = safeSessionStorage.getItem(`dismissedFestival_${f.name}`);
      return start && end && today >= start && today <= end && !isDismissed;
    });

    if (matches.length) {
      setTodayFestivals(matches);
      setShowPopup(true);
    }
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center !p-4">
      <div className="absolute inset-0 bg-black/80" onClick={handleClose} />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="relative max-w-3xl w-full rounded-2xl overflow-hidden bg-white shadow-2xl"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-white text-red-600 rounded-full !p-2 shadow"
          aria-label="Close festival popup"
        >
          ✖
        </button>

        {todayFestivals.map(ev => (
          <div key={ev.name}>
            <img
              src={ev.image}
              alt={ev.name}
              className="w-full h-auto object-contain"
              loading="lazy"
              decoding="async"
            />

            <div className="relative !p-6 text-center overflow-hidden">
              {sparks.map((s, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-red-500"
                  style={{ left: s.left, bottom: "-20px" }}
                  animate={{ y: ["0%", "-120vh"], opacity: [1, 0] }}
                  transition={{
                    duration: s.duration,
                    delay: s.delay,
                    repeat: Infinity,
                  }}
                />
              ))}

              <h3 className="text-xl font-bold">{ev.name}</h3>
              <p className="text-sm text-gray-600">{ev.date}</p>
              <p className="!mt-3 text-gray-700">{ev.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
