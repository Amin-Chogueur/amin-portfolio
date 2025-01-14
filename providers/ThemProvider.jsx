"use client";
import { useContext, useEffect, useState } from "react";
import { themeContext } from "../context/ThemeContext";

export default function ThemProvider({ children }) {
  const { theme } = useContext(themeContext); // Get the theme from context
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render null until the component is mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return <div className={theme}>{children}</div>;
}
