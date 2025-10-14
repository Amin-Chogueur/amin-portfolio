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
          I’m a front-end web developer specializing in React and Next.js. I
          build fast, responsive, and user-friendly web applications that solve
          real-world problems.
        </p>
        <p>
          I’m passionate about writing clean, maintainable code and creating
          seamless user experiences. My work combines attention to detail with a
          focus on performance and accessibility.
        </p>
        <p>
          I’m now seeking an opportunity to join a collaborative team where I
          can keep learning, contribute to impactful projects, and grow both
          technically and creatively.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
