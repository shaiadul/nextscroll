"use client";
import { useCode } from "@/app/context/codeContext";
import React, { useRef, useState } from "react";

const Code = () => {
  const { settings } = useCode();
  const {
    thumbColor,
    thumbHoverColor,
    trackColor,
    scrollbarWidth,
    scrollbarBorderRadius,
    thumbBorderWidth,
    thumbBorderColor,
  } = settings;

  const [activeFormat, setActiveFormat] = useState("css"); // css, tailwind, w3c
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  const getCodeString = () => {
    switch (activeFormat) {
      case "tailwind":
        return `// tailwind.config.js configuration
module.exports = {
  theme: {
    extend: {
      colors: {
        scrollbar: {
          track: "${trackColor}",
          thumb: "${thumbColor}",
          hover: "${thumbHoverColor || thumbColor}",
        }
      }
    }
  },
  plugins: [
    // Requires 'tailwind-scrollbar' package
    require('tailwind-scrollbar')({ nocompatible: true }),
  ]
}`;
      case "w3c":
        return `/* W3C Standard Scrollbar CSS (Firefox / Safari / Modern CSS) */
.your-container-class {
  scrollbar-width: ${scrollbarWidth <= 8 ? "thin" : "auto"};
  scrollbar-color: ${thumbColor} ${trackColor};
}`;
      case "css":
      default:
        return `/* Custom Scrollbar Styles (WebKit / Chromium Engines) */
.custom-scrollbar::-webkit-scrollbar {
  width: ${scrollbarWidth}px;
  height: ${scrollbarWidth}px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: ${trackColor};
  border-radius: ${scrollbarBorderRadius}px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: ${thumbColor};
  border-radius: ${scrollbarBorderRadius}px;
  border: ${thumbBorderWidth}px solid ${thumbBorderColor};
  transition: background-color 0.2s ease;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: ${thumbHoverColor || thumbColor};
}`;
    }
  };

  const handleCopyClick = async () => {
    const codeString = getCodeString();
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      if (codeRef.current) {
        const textarea = document.createElement("textarea");
        textarea.value = codeString;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl p-5 rounded-2xl border border-slate-800 shadow-2xl flex flex-col justify-between h-full overflow-hidden select-none">
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-shrink-0 flex items-center justify-between mb-3">
          <h2 className="text-xl text-slate-100 font-sans font-bold tracking-tight">
            Export Code
          </h2>
        </div>

        {/* Exporter Selector Tabs */}
        <div className="flex-shrink-0 flex bg-slate-950/80 p-1 rounded-xl border border-slate-800/60 mb-3">
          {[
            { id: "css", label: "CSS" },
            { id: "tailwind", label: "Tailwind" },
            { id: "w3c", label: "Firefox/W3C" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFormat(tab.id)}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 ${
                activeFormat === tab.id
                  ? "bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/10"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code Block Container */}
        <div className="bg-slate-950/90 p-4 rounded-xl border border-slate-850 font-mono text-[11px] text-slate-300 overflow-y-auto overflow-x-auto flex-1 relative no-scrollbar min-h-0 select-text font-semibold">
          <pre className="my-0 whitespace-pre select-all selection:bg-teal-500/30" ref={codeRef}>
            {getCodeString()}
          </pre>
        </div>
      </div>
      
      <div className="mt-4 flex-shrink-0">
        <button
          className={`w-full py-2.5 px-4 rounded-xl font-semibold tracking-wide flex justify-center items-center gap-2 transition-all duration-300 text-xs ${
            copied
              ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-bold shadow-lg shadow-emerald-500/10"
              : "bg-teal-500 text-slate-950 hover:bg-teal-400 shadow-lg shadow-teal-500/10"
          }`}
          onClick={handleCopyClick}
        >
          {copied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Copied to Clipboard!
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Copy Configurations
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Code;
