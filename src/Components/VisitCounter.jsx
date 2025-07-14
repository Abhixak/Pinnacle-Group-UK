import React, { useEffect, useState, useRef } from "react";

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const hasIncremented = useRef(false); // Prevent double fetch (especially in React StrictMode)

  useEffect(() => {
    if (hasIncremented.current) return;
    hasIncremented.current = true;

    fetch("https://pinnacle-backend-v0yj.onrender.com")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setVisitCount(data.visits);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Visit counter error:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="!my-4 !px-6 !py-2 rounded-xl bg-black shadow-lg text-white flex items-center gap-3 animate-fade-in">
      <span className="text-lg">👁️ Visitors:</span>
      <span className="text-xl font-mono tracking-widest bg-black/20 !px-3 !py-1 rounded-md">
        {error ? "Error" : loading ? "Loading..." : visitCount}
      </span>
    </div>
  );
};

export default VisitCounter;
