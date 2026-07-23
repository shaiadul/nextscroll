"use client";
import { createContext, useContext, useState } from "react";

const CodeContext = createContext();

export const PRESETS = {
  default: {
    name: "Classic Mint",
    thumbColor: "#43da86",
    thumbHoverColor: "#5af49c",
    trackColor: "#23769C",
    scrollbarWidth: 10,
    scrollbarBorderRadius: 5,
    thumbBorderWidth: 0,
    thumbBorderColor: "#232E33",
  },
  neon: {
    name: "Neon Glow",
    thumbColor: "#ff007f",
    thumbHoverColor: "#ff5ea6",
    trackColor: "#1a0033",
    scrollbarWidth: 12,
    scrollbarBorderRadius: 10,
    thumbBorderWidth: 2,
    thumbBorderColor: "#00ffff",
  },
  minimal: {
    name: "Minimalist",
    thumbColor: "#a1a1aa",
    thumbHoverColor: "#71717a",
    trackColor: "transparent",
    scrollbarWidth: 6,
    scrollbarBorderRadius: 10,
    thumbBorderWidth: 0,
    thumbBorderColor: "#000000",
  },
  cyberpunk: {
    name: "Cyberpunk",
    thumbColor: "#facc15",
    thumbHoverColor: "#fef08a",
    trackColor: "#0f172a",
    scrollbarWidth: 14,
    scrollbarBorderRadius: 0,
    thumbBorderWidth: 3,
    thumbBorderColor: "#3b82f6",
  },
  lavender: {
    name: "Lavender",
    thumbColor: "#c084fc",
    thumbHoverColor: "#e9d5ff",
    trackColor: "#3b0764",
    scrollbarWidth: 10,
    scrollbarBorderRadius: 8,
    thumbBorderWidth: 1,
    thumbBorderColor: "#fae8ff",
  }
};

export const CodeProvider = ({ children }) => {
  // State to manage settings
  const [settings, setSettings] = useState(PRESETS.default);

  return (
    <CodeContext.Provider
      value={{
        settings,
        setSettings,
        presets: PRESETS,
      }}
    >
      {children}
    </CodeContext.Provider>
  );
};

export const useCode = () => useContext(CodeContext);

