import React from "react";
import styles from "./singlePost.module.css";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className={styles.main_container}>
        <div className={styles.first_section}>
          <div className={styles.showna}>
            <Link href="#" className={styles.button}>
              Technology
            </Link>
            <h1>
              The impact of Technology on the Worksplace:
              <br /> How Technology is Changing
            </h1>
            <div className={styles.image_and_text}>
              <div className={styles.round_image_container}>
                <Image
                  src="dark.svg"
                  alt="small"
                  className={styles.round_image}
                  width={30}
                  height={30}
                />
              </div>
              <div className={styles.text_container}>
                <p className={styles.text}> Jason Franciso</p>
                <p className={styles.text}> june 24 2024</p>
              </div>
            </div>
          </div>

          <div className={styles.second_section}>
            <div className={styles.image_container}>
              <Image
                src="/tom.svg"
                alt="image"
                className={styles.Image}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw 700px"
              />
            </div>
            <div className={styles.first_writeup}>
              <p>
                Traveling is an enriching experience that opens up new horizons,
                exposes us to different cultures, and creates memories that last
                a lifetime. However, traveling can also be stressful and
                overwhelming, especially if you don't plan and prepare
                adequately. In this blog article, we'll explore tips and tricks
                for a memorable journey and how to make the most of your
                travels.{" "}
              </p>
              <br />
              <p>
                One of the most rewarding aspects of traveling is immersing
                yourself in the local culture and customs. This includes trying
                local cuisine, attending cultural events and festivals, and
                interacting with locals. Learning a few phrases in the local
                language can also go a long way in making connections and
                showing respect
              </p>
              <br />
              <h3>Research Your Destination</h3>
              <p>
                Before embarking on your journey, take the time to research your
                destination. This includes understanding the local culture,
                customs, and laws, as well as identifying top attractions,
                restaurants, and accommodations. Doing so will help you navigate
                your destination with confidence and avoid any cultural faux
                pas.
              </p>{" "}
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
                ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
                euismod elementum nisi quis eleifend quam adipiscing vitae.
                Viverra adipiscing at in tellus.
              </p>{" "}
              <br />
              <h3>Plan Your Itinerary</h3>
              <p>
                While it's essential to leave room for spontaneity and
                unexpected adventures, having a rough itinerary can help you
                make the most of your time and budget. Identify the must-see
                sights and experiences and prioritize them according to your
                interests and preferences. This will help you avoid
                overscheduling and ensure that you have time to relax and enjoy
                your journey.
              </p>{" "}
              <br />
              <p>
                Vitae sapien pellentesque habitant morbi tristique. Luctus
                venenatis lectus magna fringilla. Nec ullamcorper sit amet risus
                nullam eget felis. Tincidunt arcu non sodales neque sodales ut
                etiam sit amet.
              </p>{" "}
              <br />
            </div>
          </div>
          <section className={styles.box_section}>
            <div className={styles.first_new_box}>
              <p className={styles.first_new_text}>
                “ Traveling can expose you to new environments and potential
                health risks, so it's crucial to take precautions to stay safe
                and healthy. ”
              </p>
            </div>
          </section>
        </div>
        <div className={styles.third_section}>
          <div className={styles.third_image}>
            <Image
              src="/boxman.svg"
              alt="image"
              className={styles.third}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw 700px"
            />
          </div>
        </div>
        <section className={styles.second_box_section}>
          <div className={styles.second_new_box}>
            <p className={styles.new_text}>Advertisment</p>
            <h1 className={styles.new_heading}>You can place ads</h1>
            <p className={styles.new_text}>750 X 100</p>
          </div>
        </section>
        <div className={styles.second_writeup}>
          <h3>Pack Lightly and Smartly</h3>
          <br />
          <p>
            Packing can be a daunting task, but with some careful planning and
            smart choices, you can pack light and efficiently. Start by making a
            packing list and sticking to it, focusing on versatile and
            comfortable clothing that can be mixed and matched. Invest in
            quality luggage and packing organizers to maximize space and
            minimize wrinkles.
          </p>
          <br />
          <h3>Stay Safe and Healthy</h3>
          <p>
            Traveling can expose you to new environments and potential health
            risks, so it's crucial to take precautions to stay safe and healthy.
            This includes researching any required vaccinations or medications,
            staying hydrated, washing your hands frequently, and using sunscreen
            and insect repellent. It's also essential to keep your valuables
            safe and secure and to be aware of your surroundings at all times.
          </p>{" "}
          <br />
          <h3>Immerse Yourself in the Local Culture</h3>
          <p>
            One of the most rewarding aspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </p>{" "}
          <br />
          <h3>Capture Memories</h3>
          <p>
            Finally, don't forget to capture memories of your journey. Whether
            it's through photographs, journaling, or souvenirs, preserving the
            moments and experiences of your travels can bring joy and nostalgia
            for years to come. However, it's also essential to be present in the
            moment and not let technology distract you from the beauty of your
            surroundings.
          </p>{" "}
          <br />
          <h3>Conclusion</h3>
          <p>
            Traveling is an art form that requires a blend of planning,
            preparation, and spontaneity. By following these tips and tricks,
            you can make the most of your journey and create memories that last
            a lifetime. So pack your bags, embrace the adventure, and enjoy the
            ride
          </p>{" "}
          <br />
        </div>
      </section>
    </>
  );
};

export default page;
