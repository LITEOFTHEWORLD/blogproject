"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import styles from "./NewNavbar.module.css";
import ThemeToggle from "../themeToggle/ThemeToggle";

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <div>
          <p className={styles.logo_text}>
            Tech<span className={styles.bold_text}>BlackGirl</span>
          </p>
        </div>
      </div>

      <div className={`${styles.links} ${isOpen ? styles.linksOpen : ""}`}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/blog" className={styles.link}>
          Blog
        </Link>
        <Link href="/authur" className={styles.link}>
          Author
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </div>

      <div className={styles.topNav}>
        <input type="text" placeholder="Search.." />
      </div>

      <div>
        <ThemeToggle />
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default NewNavbar;
