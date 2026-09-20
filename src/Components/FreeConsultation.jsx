import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FreeConsultation = () => {
  const navigate = useNavigate();

  const [showOnScroll, setShowOnScroll] = useState(false);
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  // Scroll trigger
  useEffect(() => {
    const onScroll = () => {
      setShowOnScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // After close animation ends → remove
  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 600); // must match transition duration

      return () => clearTimeout(timer);
    }
  }, [closing]);

  if (!visible) return null;

  return (
    <div
      className={`
      fixed bottom-6 right-6 z-50
      transition-all duration-700 ease-in-out
      ${
        closing
          ? "translate-x-52 opacity-0 scale-90"
          : showOnScroll
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-40 opacity-0 scale-95"
      }
      `}
    >
      {/* ❌ Close Button */}
      <button
        onClick={() => setClosing(true)}
        className="
        absolute -top-2 -right-2 w-6 h-6
        rounded-full bg-red-200/80 text-red-500 text-xs
        flex items-center justify-center
        hover:bg-white active:bg-white active:scale-105 transition
        z-10
        "
        aria-label="Close free consultation prompt"
      >
        ✕
      </button>

      {/* CTA Button */}
      <button
        onClick={() => navigate("/support")}
        className="
        font-poppins font-semibold tracking-wide uppercase
        cursor-pointer
        !px-6 !py-3 rounded-full shadow-lg
        bg-[#7a1f2b]
        border border-[#7a1f2b]/40
        hover:bg-[#651823] transition-all duration-300
        hover:shadow-[0_0_18px_rgba(122,31,43,0.55)]
        text-white
        text-sm md:text-base
        "
      >
        Book Free Consultation
      </button>
    </div>
  );
};

export default FreeConsultation;
