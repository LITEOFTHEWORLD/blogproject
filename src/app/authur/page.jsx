import React from "react";
import styles from "./authur.module.css";
import Image from "next/image";
import NewCard from "@/components/NewCard/NewCard";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.authorBox}>
          <div className={styles.profile}>
            <Image
              src="/guy.svg"
              alt="Author"
              width={100}
              height={100}
              className={styles.profileImage}
            />
            <h3>Jason Francisco</h3>
            <p>Collaborator & Editor</p>
          </div>
          <div className={styles.writeup}>
            <p>
              Meet Jonathan Doe, a passionate writer and blogger with a love for
              technology and travel. Jonathan holds a degree in Computer Science
              and has spent years working in the tech industry, gaining a deep
              understanding of the impact technology has on our lives.
            </p>
          </div>
        </div>
      </div>
      <section className={styles.grid_section}>
        <h2 className={styles.grid_heading}>Latest Post</h2>
        <div className={styles.grid_container}>
          <NewCard />
        </div>
      </section>
    </>
  );
};

export default page;
