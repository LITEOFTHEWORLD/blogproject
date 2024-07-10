import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
import { blogData } from "../../../dummyBlog";
const imageCards = [
  {
    src: "/first.svg",
    alt: "Image 1",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    roundSrc: "/round1.svg",
    cardText: " Tracey Wilson ",
  },
  {
    src: "/second.svg",
    alt: "Image 2",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    roundSrc: "/round2.svg",
    cardText: "Jason Francisco",
  },
  {
    src: "/third.svg",
    alt: "Image 3",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    roundSrc: "/round3.svg",
    cardText: " Elizabeth Slavin",
  },
  {
    src: "/fourth.svg",
    alt: "Image 4",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    roundSrc: "/round6.svg",
    cardText: " Tracey Wilson ",
  },
  {
    src: "/fifth.svg",
    alt: "Image 5",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    roundSrc: "/round5.svg",
    cardText: " Elizabeth Slavin",
  },
  {
    src: "/sixth.svg",
    alt: "Image 6",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    roundSrc: "/round3.svg",
    cardText: "Jason Francisco",
  },
  {
    src: "/seventh.svg",
    alt: "Image 7",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    roundSrc: "/round4.svg",
    cardText: " Tracey Wilson ",
  },
  {
    src: "/eigth.svg",
    alt: "Image 8",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    roundSrc: "/round1.svg",
    cardText: " Elizabeth Slavin",
  },
  {
    src: "/ninth.svg",
    alt: "Image 9",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    roundSrc: "/round6.svg",
    cardText: "Jason Francisco",
  },
];

const Card = () => {
  return (
    <>
      {blogData.map((card, index) => (
        <div key={card.id} className={styles.grid_item}>
          <Image
            src={card.image}
            alt={card?.alt}
            className={styles.card_image}
            width={300}
            height={200}
          />
          <Link href="#" className={styles.card_button}>
            Technology
          </Link>
          <div>
            <Link href={`/blog-post/${card.slug}`} className={styles.card_text}>
              {card.description}
            </Link>
          </div>

          <div className={styles.image_and_text}>
            <div className={styles.round_image_container}>
              <Image
                src={card.roundSrc}
                alt="small round image"
                className={styles.round_image}
                width={30}
                height={30}
              />
            </div>
            <div className={styles.text_container}>
              <p className={styles.text}>{card.author}</p>
              <p className={styles.text}>{card.date}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
