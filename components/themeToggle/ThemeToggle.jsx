"use client";
import { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { themeContext } from "@/context/ThemeContext";

function ThemeToggle() {
  const { theme, handleToggleTheme } = useContext(themeContext);

  return (
    <div className={styles.container} onClick={handleToggleTheme}>
      <div
        className={styles.ball}
        style={theme === "light" ? { right: "1px" } : { left: "1px" }}
      ></div>

      <Image src={"/sun.png"} alt="sun" width={18} height={18} />

      <Image src={"/moon.png"} alt="moon" width={16} height={16} />
    </div>
  );
}

export default ThemeToggle;
