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
          <Image
            src="/firstLogo.svg"
            alt="logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.links}>
          <Link href="/ " className={styles.link}>
            Home
          </Link>
          <Link href="/blog" className={styles.link}>
            Blog
          </Link>
          <Link href="/singlepost" className={styles.link}>
            SinglePost
          </Link>
          <Link href="/" className={styles.link}>
            Pages
          </Link>
          <Link href="/" className={styles.link}>
            Contact
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
