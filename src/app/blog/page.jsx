import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card/Card";

const page = () => {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.first_section}>
          <div className={styles.image_section}>
            <h3>Blog</h3>
            <Link href="#" className={styles.btn_Link}>
              Home | Link one
            </Link>
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
                    src="/person.svg"
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
        <section className={styles.grid_section}>
          <div className={styles.grid_container}>
            <Card />
          </div>
        </section>
        <div className={styles.view_button}>
          <Link href="#" className={styles.clear_button}>
            Load More
          </Link>
        </div>
        <marquee behavior="" direction="ltr">
          {" "}
          <section className={styles.second_box_section}>
            <div className={styles.second_new_box}>
              <p className={styles.new_text}>Advertisment</p>
              <h1 className={styles.new_heading}>You can place ads</h1>
              <p className={styles.new_text}>750 X 100</p>
            </div>
          </section>
        </marquee>
      </div>
    </>
  );
};

export default page;
