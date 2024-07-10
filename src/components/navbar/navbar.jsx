import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.social}>
          <div>
            <p className={styles.logo_text}>
              Tech<span className={styles.bold_text}>BlackGirl</span>
            </p>
          </div>
        </div>
        <div className={styles.links}>
          <Link href="/ " className={styles.link}>
            Home
          </Link>
          <Link href="/blog" className={styles.link}>
            Blog
          </Link>

          <Link href="/authur" className={styles.link}>
            authur
          </Link>
          <Link href="/contact" className={styles.link}>
            contact
          </Link>
        </div>
        <div class={styles.topNav}>
          <input type="text" placeholder="Search.." />
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
