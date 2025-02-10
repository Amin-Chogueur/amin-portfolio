"use client";
import Image from "next/image";
import styles from "./skills.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Detects if the section is in view

  const skills = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    // "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  ];

  return (
    <div ref={ref} className={styles.skillscontainer} id="Skills">
      <h2 className={"gradientText"}>My Skills </h2>
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate only if section is in view
            transition={{ duration: 0.5, delay: index * 0.2 }} // Delay for staggered effect
          >
            <Image
              src={skill}
              alt={`Skill Logo ${index + 1}`}
              width={100}
              height={100}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
