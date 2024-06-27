import React from "react";
import styles from "./singlePost.module.css";

const page = () => {
  return (
    <>
      <section className={styles.main_section}>
        <div className={styles.first_container}>
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
      </section>
    </>
  );
};

export default page;
