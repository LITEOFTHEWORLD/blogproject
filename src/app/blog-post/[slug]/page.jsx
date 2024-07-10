import React from "react";
import styles from "./singlePost.module.css";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../../../../dummyBlog";

const BlogPost = ({ params }) => {
  const post = blogData.find((post) => post.slug === params.slug);
  return (
    <>
      <section className={styles.main_container}>
        <div className={styles.first_section}>
          <div className={styles.showna}>
            <Link href="#" className={styles.button}>
              Technology
            </Link>
            <h1>{post.description}</h1>
            <div className={styles.image_and_text}>
              <div className={styles.round_image_container}>
                <Image
                  src={post.roundSrc}
                  alt="small"
                  className={styles.round_image}
                  width={30}
                  height={30}
                />
              </div>
              <div className={styles.text_container}>
                <p className={styles.text}>{post.author}</p>
                <p className={styles.text}>{post.date}</p>
              </div>
            </div>
          </div>
          <div className={styles.second_section}>
            <div className={styles.image_container}>
              <Image
                src={post.image}
                alt="image"
                className={styles.Image}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw 700px"
              />
            </div>
          </div>
          <p className={styles.blogData}>{post.blogData}</p>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
