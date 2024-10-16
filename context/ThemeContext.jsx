"use client";
import { createContext, useEffect, useState } from "react";

export const themeContext = createContext();

function getThemeFromLocalStorage() {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "dark";
  }
  return "dark";
}

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => getThemeFromLocalStorage());

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}
