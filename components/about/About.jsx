"use client";
import Image from "next/image";
import styles from "./about.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function About() {
  // Use two different refs for the image and text
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Triggers when element is about to enter the viewport

  return (
    <div ref={ref} className={styles.aboutContainer} id="About">
      {/* Image sliding in from the left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }} // Start off-screen (left)
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Animate in when in view
        transition={{ duration: 1 }}
        className={styles.imageContainer}
      >
        <Image
          src={"/amin2.jpeg"}
          alt={"Amin Chogueur's profile picture"}
          width={250}
          height={250}
        />
      </motion.div>

      {/* Text content sliding in from the right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }} // Start off-screen (right)
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Animate in when in view
        transition={{ duration: 1 }}
        className={styles.content}
      >
        <h2 className={"gradientText"}>About me</h2>
        <p>
          I began my coding journey in 2023 by learning C++ to build a strong
          foundation in programming. Soon after, I discovered my passion for web
          development and have been growing ever since. As a freelancer for
          Made4Cloud Ltd, I’ve had the opportunity to work on real-world
          projects that helped me turn that passion into professional
          experience.
        </p>
        <p>
          Now, I’m looking to join a company where I can collaborate with a
          team, continue learning, and take my skills to the next level. I’m
          excited to contribute, grow alongside experienced developers, and keep
          doing what I love—building meaningful digital solutions.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
