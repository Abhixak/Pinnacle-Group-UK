import React, { useEffect, useState, useRef } from "react";

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(null);
  const [error, setError] = useState(false);
  const hasIncremented = useRef(false); // ✅ Prevent double call

  useEffect(() => {
    if (hasIncremented.current) return; // ⛔ skip if already called
    hasIncremented.current = true;

    fetch("http://localhost:3001/api/visit")
      .then((res) => res.json())
      .then((data) => setVisitCount(data.visits))
      .catch((err) => {
        console.error("Visit counter error:", err);
        setError(true);
      });
  }, []);

  return (
    <div className="!my-4 !px-6 !py-1 rounded-xl bg-black shadow-lg text-white flex items-center gap-3 animate-fade-in">
      <span className="text-lg">👁️ Visitors:</span>
      <span className="text-xl font-mono tracking-widest bg-black/20 !px-3 !py-1 rounded-md">
        {error ? "Error" : visitCount !== null ? visitCount : "Loading..."}
      </span>
    </div>
  );
};

export default VisitCounter;
