"use client";
import { useCode } from "@/app/context/codeContext";
import React, { useState } from "react";

const SettingBar = () => {
  const { settings, setSettings, presets } = useCode();
  const [activeTab, setActiveTab] = useState("colors"); // colors, dimensions, borders

  const handleSettingChange = (name, value) => {
    let parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) parsedValue = 0;
    
    let validValue;
    switch (name) {
      case "scrollbarWidth":
      case "scrollbarBorderRadius":
      case "thumbBorderWidth":
        validValue = Math.max(0, parsedValue);
        break;
      default:
        validValue = parsedValue;
    }

    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: validValue,
    }));
  };

  const handleColorChange = (name, color) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: color,
    }));
  };

  const applyPreset = (presetKey) => {
    if (presets[presetKey]) {
      setSettings(presets[presetKey]);
    }
  };

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl p-5 rounded-2xl border border-slate-800 shadow-2xl h-full flex flex-col min-h-0 select-none">
      <div className="flex-shrink-0 mb-4">
        <h1 className="text-xl text-slate-100 font-sans font-bold tracking-tight mb-3">
          Configure Scrollbar
        </h1>
        
        {/* Preset Swatches Grid */}
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 mb-3">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
            Quick Themes
          </span>
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(presets).map((key) => {
              const preset = presets[key];
              const isSelected = settings.name === preset.name;
              return (
                <button
                  key={key}
                  onClick={() => applyPreset(key)}
                  className={`p-2 rounded-lg text-left transition-all duration-200 border text-xs flex items-center justify-between ${
                    isSelected
                      ? "bg-slate-800 border-teal-500/80 shadow-md shadow-teal-500/5 text-teal-400 font-semibold"
                      : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700 text-slate-300"
                  }`}
                >
                  <span className="truncate mr-1">{preset.name}</span>
                  <span className="flex gap-1 flex-shrink-0">
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-slate-950 shadow-sm"
                      style={{ backgroundColor: preset.thumbColor }}
                    />
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-slate-950 shadow-sm"
                      style={{ backgroundColor: preset.trackColor }}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex bg-slate-950/80 p-1 rounded-xl border border-slate-800/50">
          {["colors", "dimensions", "borders"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg capitalize transition-all duration-150 ${
                activeTab === tab
                  ? "bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/10"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Configurations Scroller Container */}
      <div className="flex-1 overflow-y-auto no-scrollbar pr-1 space-y-4 min-h-0 py-1">
        {activeTab === "colors" && (
          <div className="space-y-3.5">
            {/* Track Color */}
            <div className="bg-slate-950/30 p-3.5 rounded-xl border border-slate-850 hover:border-slate-800 transition-colors duration-150">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-200">Track Background</span>
                <span className="text-xs font-mono text-slate-500">{settings.trackColor}</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={settings.trackColor}
                  onChange={(e) => handleColorChange("trackColor", e.target.value)}
                  className="input_style w-10 h-8 rounded-lg cursor-pointer flex-shrink-0"
                />
                <input
                  type="text"
                  value={settings.trackColor}
                  onChange={(e) => handleColorChange("trackColor", e.target.value)}
                  className="bg-slate-950/80 border border-slate-800 rounded-lg px-2.5 py-1 text-xs font-mono text-slate-300 w-full focus:outline-none focus:border-teal-500/50"
                />
              </div>
            </div>

            {/* Thumb Color */}
            <div className="bg-slate-950/30 p-3.5 rounded-xl border border-slate-850 hover:border-slate-800 transition-colors duration-150">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-200">Thumb Color</span>
                <span className="text-xs font-mono text-slate-500">{settings.thumbColor}</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={settings.thumbColor}
                  onChange={(e) => handleColorChange("thumbColor", e.target.value)}
                  className="input_style w-10 h-8 rounded-lg cursor-pointer flex-shrink-0"
                />
                <input
                  type="text"
                  value={settings.thumbColor}
                  onChange={(e) => handleColorChange("thumbColor", e.target.value)}
                  className="bg-slate-950/80 border border-slate-800 rounded-lg px-2.5 py-1 text-xs font-mono text-slate-300 w-full focus:outline-none focus:border-teal-500/50"
                />
              </div>
            </div>

            {/* Thumb Hover Color */}
            <div className="bg-slate-950/30 p-3.5 rounded-xl border border-slate-850 hover:border-slate-800 transition-colors duration-150">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-200">Thumb Hover State</span>
                <span className="text-xs font-mono text-slate-500">{settings.thumbHoverColor || settings.thumbColor}</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={settings.thumbHoverColor || settings.thumbColor}
                  onChange={(e) => handleColorChange("thumbHoverColor", e.target.value)}
                  className="input_style w-10 h-8 rounded-lg cursor-pointer flex-shrink-0"
                />
                <input
                  type="text"
                  value={settings.thumbHoverColor || settings.thumbColor}
                  onChange={(e) => handleColorChange("thumbHoverColor", e.target.value)}
                  className="bg-slate-950/80 border border-slate-800 rounded-lg px-2.5 py-1 text-xs font-mono text-slate-300 w-full focus:outline-none focus:border-teal-500/50"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "dimensions" && (
          <div className="space-y-3.5">
            {/* Width Slider */}
            <div className="bg-slate-950/30 p-3.5 rounded-xl border border-slate-850">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-200">Scrollbar Width</span>
                <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">
                  {settings.scrollbarWidth}px
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                value={settings.scrollbarWidth}
                onChange={(e) => handleSettingChange("scrollbarWidth", e.target.value)}
                className="w-full accent-teal-500 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>2px</span>
                <span>16px</span>
                <span>30px</span>
              </div>
            </div>

            {/* Radius Slider */}
            <div className="bg-slate-950/30 p-3.5 rounded-xl border border-slate-850">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-200">Corner Radius</span>
                <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">
                  {settings.scrollbarBorderRadius}px
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                value={settings.scrollbarBorderRadius}
                onChange={(e) => handleSettingChange("scrollbarBorderRadius", e.target.value)}
                className="w-full accent-teal-500 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>0px</span>
                <span>15px</span>
                <span>30px</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "borders" && (
          <div className="space-y-3.5">
            {/* Border Width */}
            <div className="bg-slate-950/30 p-3.5 rounded-xl border border-slate-850">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-200">Thumb Border Size</span>
                <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">
                  {settings.thumbBorderWidth}px
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                value={settings.thumbBorderWidth}
                onChange={(e) => handleSettingChange("thumbBorderWidth", e.target.value)}
                className="w-full accent-teal-500 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>0px</span>
                <span>7px</span>
                <span>15px</span>
              </div>
            </div>

            {/* Border Color */}
            <div className="bg-slate-950/30 p-3.5 rounded-xl border border-slate-850">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-200">Border Color</span>
                <span className="text-xs font-mono text-slate-500">{settings.thumbBorderColor}</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={settings.thumbBorderColor}
                  onChange={(e) => handleColorChange("thumbBorderColor", e.target.value)}
                  className="input_style w-10 h-8 rounded-lg cursor-pointer flex-shrink-0"
                />
                <input
                  type="text"
                  value={settings.thumbBorderColor}
                  onChange={(e) => handleColorChange("thumbBorderColor", e.target.value)}
                  className="bg-slate-950/80 border border-slate-800 rounded-lg px-2.5 py-1 text-xs font-mono text-slate-300 w-full focus:outline-none focus:border-teal-500/50"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* GitHub Section Footer */}
      <div className="flex-shrink-0 pt-3 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[10px] text-slate-500 font-mono">MIT Licensed</span>
        <a
          href="https://github.com/shaiadul/nextscroll"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-slate-400 hover:text-teal-400 transition-colors duration-150 text-xs font-semibold"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          Repository
        </a>
      </div>
    </div>
  );
};

export default SettingBar;
