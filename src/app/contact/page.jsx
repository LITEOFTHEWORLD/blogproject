import React from "react";
import Head from "next/head";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us for more information" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
          We'd love to hear from you! Please reach out with any questions or
          comments.
        </p>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
