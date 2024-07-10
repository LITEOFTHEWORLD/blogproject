import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Card from "@/components/CARD/CARD";

export default function hell() {
  return (
    <>
      <div className={styles.home_container}>
        <div className={styles.second_section}>
          <div className={styles.image_container}>
            <Image
              src="/Image.svg"
              alt="image"
              className={styles.Image}
              width={700}
              height={500}
            />
            <div className={styles.box}>
              <Link href="#" className={styles.button}>
                Technology
              </Link>
              <h1 className={styles.heading}>
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h1>
              <div className={styles.image_and_text}>
                <div className={styles.round_image_container}>
                  <Image
                    src="/guy.svg"
                    alt="small round image"
                    className={styles.round_image}
                    width={30}
                    height={30}
                  />
                </div>
                <div className={styles.text_container}>
                  <p className={styles.text}>Jason Francisco </p>
                  <p className={styles.text}>june 24 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.new_section}>
          <div className={styles.new_box}>
            <p className={styles.new_text}>Advertisment</p>
            <h1 className={styles.new_heading}>You can place ads</h1>
            <p className={styles.new_text}>750 X 100</p>
          </div>
        </section>

        <section className={styles.grid_section}>
          <h2 className={styles.grid_heading}>Latest Post</h2>
          <div className={styles.grid_container}>
            <Card />
          </div>
        </section>
        <div className={styles.view_button}>
          <Link href="#" className={styles.clear_button}>
            View All Post
          </Link>
        </div>
        <section className={styles.second_box_section}>
          <div className={styles.second_new_box}>
            <p className={styles.new_text}>Advertisment</p>
            <h1 className={styles.new_heading}>You can place ads</h1>
            <p className={styles.new_text}>750 X 100</p>
          </div>
        </section>
      </div>
    </>
  );
}
