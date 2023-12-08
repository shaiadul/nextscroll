"use client";
import { createContext, useContext, useState } from "react";

const CodeContext = createContext();

export const CodeProvider = ({ children }) => {
  // State to manage settings
  const [settings, setSettings] = useState({
    thumbColor: "#43da86",
    trackColor: "#23769C",
    scrollbarWidth: 10,
    scrollbarBorderRadius: 10,
    thumbBorderWidth: 0,
    thumbBorderColor: "#232E33",
  });

  return (
    <CodeContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {children}
    </CodeContext.Provider>
  );
};

export const useCode = () => useContext(CodeContext);
