"use client";
import { useCode } from "@/app/context/codeContext";
import React, { useState } from "react";

const Description = () => {
  const {
    settings: {
      thumbColor,
      thumbHoverColor,
      trackColor,
      scrollbarWidth,
      scrollbarBorderRadius,
      thumbBorderWidth,
      thumbBorderColor,
    },
  } = useCode();

  const [playgroundView, setPlaygroundView] = useState("document"); // document, gallery, console

  return (
    <section className="lg:col-span-2 px-6 py-5 h-full flex flex-col min-h-0 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
      <style jsx>{`
        .custom-preview-scroll {
          --sb-track-color: ${trackColor};
          --sb-thumb-color: ${thumbColor};
          --sb-size: ${scrollbarWidth}px;
          scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
        }

        .custom-preview-scroll::-webkit-scrollbar {
          width: var(--sb-size);
          height: var(--sb-size);
        }

        .custom-preview-scroll::-webkit-scrollbar-track {
          background: var(--sb-track-color);
          border-radius: ${scrollbarBorderRadius}px;
        }

        .custom-preview-scroll::-webkit-scrollbar-thumb {
          background: var(--sb-thumb-color);
          border-radius: ${scrollbarBorderRadius}px;
          border: ${thumbBorderWidth}px solid ${thumbBorderColor};
          transition: background-color 0.2s ease;
        }

        .custom-preview-scroll::-webkit-scrollbar-thumb:hover {
          background: ${thumbHoverColor || thumbColor};
        }
      `}</style>

      {/* Playground Header & Toggles */}
      <div className="flex-shrink-0 flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-4 mb-4 select-none">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
            Interactive Playground
          </h2>
          <span className="text-xs text-slate-500">
            Select a layout to test scroll responsiveness
          </span>
        </div>

        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-850">
          {[
            { id: "document", label: "Document", icon: "📝" },
            { id: "gallery", label: "Gallery", icon: "🖼️" },
            { id: "console", label: "Console", icon: "💻" },
          ].map((view) => (
            <button
              key={view.id}
              onClick={() => setPlaygroundView(view.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all duration-150 ${
                playgroundView === view.id
                  ? "bg-slate-800 text-teal-400 font-bold border border-slate-700/50"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <span>{view.icon}</span>
              <span>{view.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Playground Active Canvas */}
      <div className="flex-1 min-h-0 bg-slate-950/60 rounded-xl border border-slate-850 p-4 relative flex flex-col">
        {playgroundView === "document" && (
          <div className="flex-1 overflow-y-auto custom-preview-scroll pr-2 text-slate-300 font-sans space-y-4 text-sm leading-relaxed min-h-0">
            <h3 className="text-base font-bold text-slate-100">
              The Art of Scrollbar Customization
            </h3>
            <p>
              Scrollbars are one of the most underrated elements in web interface design. By default, browsers render thick, gray scrollbars that frequently conflict with modern aesthetic designs. Customizing scrollbars ensures a premium, integrated experience.
            </p>
            <p className="bg-slate-900/60 p-3 rounded-lg border border-slate-850/50 text-slate-400 text-xs italic">
              &ldquo;Attention to detail separates good design from exceptional design. A custom scrollbar signals to users that every pixel of the application has been curated.&rdquo;
            </p>
            <p>
              Using standard W3C properties like <code className="text-teal-400 bg-slate-900 px-1 py-0.5 rounded">scrollbar-width</code> and <code className="text-teal-400 bg-slate-900 px-1 py-0.5 rounded">scrollbar-color</code>, developers can achieve clean results in Firefox. In WebKit and Chromium engines (Chrome, Edge, Safari), pseudo-elements like <code className="text-teal-400 bg-slate-900 px-1 py-0.5 rounded">::-webkit-scrollbar-thumb</code> grant precision control over dimensions, borders, and hover states.
            </p>
            <p>
              Hover effects are key for interactivity. By modifying the scrollbar thumb color on hover, you provide visual feedback that the scrollbar is interactive, improving usability.
            </p>
            <p>
              Additionally, rounded corners and custom border sizes add a layer of polish, aligning the scroll mechanics with container layouts. Continue adjusting settings in the configuration panel on the left to see the changes update here instantly!
            </p>
          </div>
        )}

        {playgroundView === "gallery" && (
          <div className="flex-1 overflow-y-auto overflow-x-auto custom-preview-scroll pr-2 pb-2 min-h-0">
            <div className="space-y-4 w-[140%]">
              <h3 className="text-base font-bold text-slate-100 select-none">
                Scrollable Card Deck
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: "Quantum Computing", desc: "Superposition and entanglement exploration.", bg: "from-purple-500/20 to-indigo-500/10", border: "border-purple-500/20" },
                  { title: "Synthetic Biology", desc: "Engineering genomes and biological circuits.", bg: "from-emerald-500/20 to-teal-500/10", border: "border-emerald-500/20" },
                  { title: "Machine Learning", desc: "Neural networks, transformers, and parameters.", bg: "from-amber-500/20 to-orange-500/10", border: "border-amber-500/20" },
                  { title: "Neuroscience", desc: "Mapping synaptic activity and brain waves.", bg: "from-blue-500/20 to-cyan-500/10", border: "border-blue-500/20" },
                  { title: "Aerospace Design", desc: "Fluid dynamics and supersonic propulsion.", bg: "from-rose-500/20 to-red-500/10", border: "border-rose-500/20" },
                  { title: "Cybersecurity", desc: "Cryptography, exploits, and mitigation systems.", bg: "from-pink-500/20 to-fuchsia-500/10", border: "border-pink-500/20" },
                ].map((card, i) => (
                  <div key={i} className={`p-4 rounded-xl bg-gradient-to-br ${card.bg} border ${card.border} hover:scale-[1.02] transition-transform duration-200`}>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">Module 0{i + 1}</span>
                    <h4 className="text-sm font-bold text-slate-200 mt-1">{card.title}</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {playgroundView === "console" && (
          <div className="flex-1 overflow-y-auto custom-preview-scroll bg-slate-950 p-4 rounded-xl border border-slate-900 font-mono text-xs text-slate-300 space-y-2 min-h-0">
            <div className="text-slate-500 select-none">{"// Simulated System Boot Log..."}</div>
            <div className="text-emerald-400">{"[OK] Initializing scroll listener connection..."}</div>
            <div className="text-sky-400">{"[INFO] Loading custom styling config variables..."}</div>
            <div>{"[SYSTEM] Scrollbar size set to: " + scrollbarWidth + "px"}</div>
            <div>{"[SYSTEM] Scrollbar border radius set to: " + scrollbarBorderRadius + "px"}</div>
            <div className="text-amber-400">{"[WARNING] Legacy scroll methods are deprecated."}</div>
            <div className="text-teal-400">{"[SUCCESS] Applied color variables: thumb=" + thumbColor + ", track=" + trackColor}</div>
            <div className="text-emerald-400">{"[OK] Event listeners attached to scrollbar hover states."}</div>
            <div className="text-sky-400">{"[INFO] Render engine ready."}</div>
            <div>{"[SYSTEM] Awaiting user configuration sliders..."}</div>
            <div className="text-slate-500">{"$ nextscroll --watch --port 3000"}</div>
            <div className="text-slate-500">{"Compiling modules..."}</div>
            <div className="text-teal-400">{"Webpack compiler finished in 452ms."}</div>
            <div>{"Listening on http://localhost:3000"}</div>
            <div className="text-sky-400">{"[INFO] State synced."}</div>
            <div className="text-slate-500 select-none">{"// Scroll down to view console endpoints"}</div>
            {[...Array(12)].map((_, idx) => (
              <div key={idx} className="text-slate-400">
                {"[LOG] " + new Date().toISOString() + " - Handled slide update event index " + idx}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Scrollbar Properties Legend */}
      <div className="flex-shrink-0 mt-3 flex justify-between text-[11px] text-slate-500 font-mono select-none">
        <span>Width: {scrollbarWidth}px</span>
        <span>Radius: {scrollbarBorderRadius}px</span>
        <span>Border: {thumbBorderWidth}px</span>
      </div>
    </section>
  );
};

export default Description;
