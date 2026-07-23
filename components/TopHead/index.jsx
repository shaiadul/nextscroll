import React from "react";

const TopHead = () => {
  return (
    <header className="container mx-auto px-5 pt-8 pb-4">
      <div className="flex justify-between items-center border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-teal-500 to-cyan-500 p-2.5 rounded-xl shadow-lg shadow-teal-500/20">
            <svg
              className="w-7 h-7 text-slate-950"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 9l4-4 4 4M8 15l4 4 4-4" />
              <path d="M12 5v14" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              NextScroll
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Real-time Scrollbar Customizer
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 text-xs font-semibold bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20">
            v1.1.0
          </span>
        </div>
      </div>
    </header>
  );
};

export default TopHead;
