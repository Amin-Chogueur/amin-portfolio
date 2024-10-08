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
          I started my coding journey two years ago by learning C++ to grasp the
          fundamentals of programming. From there, I chose to dive into web
          development, where I see myself continually learning and delivering
          better results. As a freelancer for Made4Cloud Ltd, I have the
          opportunity to turn my passion into my profession. There`s nothing
          better than working in a field where I not only solve problems but
          also have fun doing what I love every day.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
