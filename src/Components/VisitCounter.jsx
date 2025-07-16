import React, { useEffect, useState } from "react";

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Retry fetch with exponential backoff
  const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch");
      return await res.json();
    } catch (err) {
      if (retries === 0) throw err;
      await new Promise((r) => setTimeout(r, delay));
      return fetchWithRetry(url, retries - 1, delay * 2);
    }
  };

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    const endpoint = hasVisited
      ? "https://pinnacle-backend-v0yj.onrender.com/view"
      : "https://pinnacle-backend-v0yj.onrender.com/";

    fetchWithRetry(endpoint)
      .then((data) => {
        setVisitCount(data.visits);
        setLoading(false);
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

  if (error || loading) {
    return (
      <div className="!my-4 !px-6 !py-2 rounded-xl bg-black text-white shadow-lg">
        {error ? "Error fetching view count" : "Loading..."}
      </div>
    );
  }

  return (
    <div className="!my-4 !px-6 !py-2 rounded-xl bg-black shadow-lg text-white flex items-center gap-3 animate-fade-in">
      <span className="text-lg">👁️ Visitors:</span>
      <span className="text-xl font-mono tracking-widest bg-black/20 !px-3 !py-1 rounded-md">
        {visitCount}
      </span>
    </div>
  );
};

export default VisitCounter;
