"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./myJourney.module.css";
function MyJourney() {
  // Use two different refs for the image and text
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} id="About">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        } // Change animation based on isInView
        transition={{ duration: 1 }}
        className={styles.journeyContainer}
      >
        <h2 className={"gradientText"}>My Journy</h2>
        <p className="text-left border-l-4 px-3 mb-6 border-orange-500  p-2">
          Before discovering programming, I pursued a Master’s degree in
          Hydraulic Engineering. That experience strengthened my analytical
          mindset and problem-solving skills — qualities that later guided me
          naturally into the world of coding.
        </p>
        <p className="text-left border-l-4 px-3 mb-6 border-orange-500 p-2 ">
          In 2023, I began learning C++ to understand the fundamentals of
          programming and logic. I quickly became fascinated by the creative
          side of development and decided to focus on web technologies. Through
          self-learning, I mastered HTML, CSS, JavaScript, React, and Next.js,
          building projects that allowed me to apply what I learned in
          real-world scenarios.
        </p>
        <p className="text-left border-l-4 px-3 mb-6 border-orange-500 p-2 ">
          As a freelancer for Made4Cloud Ltd, I contributed to building modern,
          SEO-optimized websites using Next.js, gaining valuable experience in
          professional web development. While my main focus is on the front end,
          I’m also passionate about expanding my knowledge of the backend. I’ve
          learned the basics of Node.js, Express.js, and MongoDB, and I enjoy
          exploring how both sides of development come together to create
          full-stack applications that solve real-world problems.
        </p>
        <p className="text-left border-l-4 px-3 mb-6 border-orange-500 p-2 ">
          I’m currently learning Vue.js to broaden my understanding of front-end
          ecosystems. Looking ahead, I plan to dive into DevOps, starting with
          Docker and Kubernetes, to enhance my skills and understanding of
          deployment and scalability. My ultimate goal is to become a full-stack
          web developer capable of building complete, efficient, and impactful
          digital solutions from end to end.
        </p>
      </motion.div>
    </div>
  );
}

export default MyJourney;
