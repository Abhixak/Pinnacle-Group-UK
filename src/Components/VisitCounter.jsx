import React, { useEffect, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { API_BASE_URL } from "../config";

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [targetCount, setTargetCount] = useState(0);
  const [hasTarget, setHasTarget] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  // Retry fetch with exponential backoff
  const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch");
      return await res.json();
    } catch (err) {
      if (retries == 0) throw err;
      await new Promise((r) => setTimeout(r, delay));
      return fetchWithRetry(url, retries - 1, delay * 2);
    }
  };

  useEffect(() => {
    if (hasStarted) return;
    const node = counterRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 100px 0px", threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const hasVisited = sessionStorage.getItem("hasVisited");

    const endpoint = hasVisited
      ? `${API_BASE_URL}/views/view`
      : `${API_BASE_URL}/views/increment-view`;

    fetchWithRetry(endpoint)
      .then((data) => {
        setTargetCount(Number(data.visits || 0));
        setHasTarget(true);
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
  }, [hasStarted]);

  useEffect(() => {
    if (!hasTarget) return;
    let rafId;
    const durationMs = 2000;
    const start = performance.now();
    const from = 0;
    const to = targetCount;

    const tick = (now) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVisitCount(Math.floor(from + (to - from) * eased));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setVisitCount(to);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hasTarget, targetCount]);

  if (!hasStarted) {
    return <div ref={counterRef} className="inline-flex h-9 w-40" />;
  }

  if (error || loading) {
    return (
      <div ref={counterRef} className="inline-flex items-center gap-2 !px-3 !py-1.5 rounded-full bg-white/90 border border-slate-200 text-slate-700 shadow-sm">
        <FaEye className="text-slate-500" />
        <span className="text-xs font-medium">
          {error ? "Visitors unavailable" : "Loading visitors"}
        </span>
      </div>
    );
  }

  return (
    <div ref={counterRef} className="inline-flex items-center gap-3 !px-3 !py-1.5 rounded-full bg-white/90 border border-slate-200 text-slate-800 shadow-sm">
      <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#7a1f2b]/10 text-[#7a1f2b] border border-[#7a1f2b]/20">
        <FaEye className="text-[12px]" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-widest text-slate-500">Visitors</span>
        <span className="text-sm font-semibold text-slate-900 tabular-nums">
          {visitCount}
        </span>
      </div>
    </div>
  );
};

export default VisitCounter;
