import React from "react";
import styles from "./NewFooter.module.css";
import Link from "next/link";
import Image from "next/image";

const NewFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_section}>
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet, adipiscing elit,Lorem ipsum dolor sit
            amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing
            elitLorem ipsum dolor sit amet, adipiscing elit
          </p>
          <br />

          <p>
            <span className={styles.bold_text}>Email</span>
            :kosuruth100@gmail.com
          </p>
          <p>
            <span className={styles.bold_text}>Phone</span>
            :07085644907
          </p>
        </div>
        <div className={styles.footer_section}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Author</Link>
            </li>
            <li>
              <Link href="#">Achived</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_section}>
          <h3>Categories</h3>
          <ul>
            <li>
              <Link href="#">Technology</Link>
            </li>
            <li>
              <Link href="#">Lifestyle</Link>
            </li>
            <li>
              <Link href="#">Business</Link>
            </li>
            <li>
              <Link href="#">Travel</Link>
            </li>
            <li>
              <Link href="#">Economy</Link>
            </li>
            <li>
              <Link href="#">Sport</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_section}>
          <div className={styles.newsletter_box}>
            <h3>Weekly Newsletter</h3>
            <p>Get blog articles and offers </p>
            <form className={styles.newsletter_form}>
              <input
                type="email"
                placeholder="Your email"
                className={styles.email_input}
              />
              <button type="submit" className={styles.subscribe_button}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr className={styles.footer_line} />
      <div className={styles.copyright}>
        <div className={styles.down_logo}>
          <div>
            <p className={styles.logo_text}>
              Tech<span className={styles.bold_text}>BlackGirl</span>
            </p>
            <p className={styles.copyright_text}>
              © JS Template 2023. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className={styles.last_footer}>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};
export default NewFooter;