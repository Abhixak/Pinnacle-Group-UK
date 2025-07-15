import React, { useEffect, useState } from "react";

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    const endpoint = hasVisited
      ? "https://pinnacle-backend-v0yj.onrender.com/view"
      : "https://pinnacle-backend-v0yj.onrender.com/";

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setVisitCount(data.visits);
        setLoading(false);

        // Only set flag if it was a visit-incrementing request
        if (!hasVisited) {
          sessionStorage.setItem("hasVisited", "true");
        }
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
