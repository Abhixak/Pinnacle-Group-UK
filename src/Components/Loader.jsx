// src/Components/Loader.jsx
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";

const Loader = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/Loader.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation", err));
  }, []);

  // 10 different messages to show randomly
  const messages = [
    "Building trust between NRIs and their Indian homes...",
    "Managing your property in India made simple and secure...",
    "Connecting NRIs to their roots with ease and transparency...",
    "Your Indian property, managed professionally from anywhere...",
    "Helping NRIs buy, sell, and manage property, online and hassle-free...",
    "Bridging the distance between you and your Indian home...",
    "Property solutions you can trust, no matter where you are...",
    "Turning NRI property worries into peace of mind...",
    "Experience seamless property management, the NRI way...",
    "Empowering NRIs to stay connected with their investments...",
    "8+ years of NRI property expertise | 20+ years in real estate | 3-time award winner | 1000+ happy clients 🌍"
  ];

  // Pick one random message
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center z-[9999] transition-opacity duration-700 !p-6">
      {animationData && (
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="w-60 h-60 md:w-72 md:h-72"
        />
      )}
      <h2 className="text-[#0a3d62] text-md md:text-xl font-semibold !mt-4 animate-pulse text-center !px-6">
        NRIPROPERTY.UK – {randomMessage}
      </h2>
    </div>
  );
};

export default Loader;
