
import React, { useEffect, useState } from "react";

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
  fetch("https://corsproxy.io/?https://api.countapi.xyz/update/pinnaclegroupuk/homepage?amount=1")
    .then((res) => {
      if (!res.ok) throw new Error("Network error");
      return res.json();
    })
    .then((data) => setVisitCount(data.value))
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
