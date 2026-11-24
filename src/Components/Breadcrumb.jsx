import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ currentPage, customMiddle }) {
  const middle = customMiddle === undefined ? { name: "NRI Services", path: "/nri-services" } : customMiddle;

  return (
    <nav
      aria-label="Breadcrumb"
      className="!mb-6 flex flex-wrap items-center text-xs sm:text-sm text-slate-500"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 font-medium text-slate-600 hover:text-[#9d1c1a] transition-colors"
      >
        <Home className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
        <span>Home</span>
      </Link>

      {middle && (
        <>
          <ChevronRight className="h-3.5 w-3.5 !mx-2 text-slate-400 shrink-0" aria-hidden="true" />
          <Link
            to={middle.path}
            className="font-medium text-slate-600 hover:text-[#9d1c1a] transition-colors"
          >
            {middle.name}
          </Link>
        </>
      )}

      {currentPage && (
        <>
          <ChevronRight className="h-3.5 w-3.5 !mx-2 text-slate-400 shrink-0" aria-hidden="true" />
          <span className="font-semibold text-slate-800 truncate max-w-[280px] sm:max-w-none" aria-current="page">
            {currentPage}
          </span>
        </>
      )}
    </nav>
  );
}

