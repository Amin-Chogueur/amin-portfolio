"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";

const navLinks = [
  {
    id: 0,
    url: "/",
    label: "Home",
  },
  {
    id: 1,
    url: "/#About",
    label: "About",
  },
  {
    id: 2,
    url: "/#Skills",
    label: "Skills",
  },
  {
    id: 3,
    url: "/#Projects",
    label: "Projects",
  },

  {
    id: 4,
    url: "/#Contact",
    label: "Contact",
  },
];

function NavBar() {
  const [currentLink, setCurrentLink] = useState("Home");
  const [showLink, setShowLink] = useState(false);
  function handleShowLinks() {
    setShowLink((pre) => !pre);
  }
  function handleCHangeCurrentLink(path) {
    setCurrentLink(path);
  }
  return (
    <nav className={`${styles.navBar}`}>
      <h1 className="gradientText">
        <Link href={"/"}>{`{AMIN.DEV}`}</Link>
      </h1>
      <ul className={styles.links}>
        {navLinks.map((link, i) => {
          return (
            <li key={i}>
              <Link
                onClick={() => handleCHangeCurrentLink(link.label)}
                className={`${styles.link} ${
                  currentLink === link.label && styles.active
                } `}
                href={link.url}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        <li>
          <ThemeToggle />
        </li>
      </ul>
      {showLink ? (
        <div className={styles.closeBurger} onClick={handleShowLinks}>
          ✖
        </div>
      ) : (
        <HiBars3BottomRight
          onClick={handleShowLinks}
          className={styles.burgerMenu}
        />
      )}

      <ul className={`${styles.linksMobile} ${showLink ? styles.open : ""}`}>
        {navLinks.map((link, i) => {
          return (
            <li key={i}>
              <Link
                onClick={() => {
                  setShowLink(false);
                  handleCHangeCurrentLink(link.label);
                }}
                href={link.url}
                className={`${styles.link} ${
                  currentLink === link.label && styles.active
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
