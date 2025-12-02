"use client";
import styles from "./hero.module.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { AiOutlineDownload } from "react-icons/ai";
const TypeComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "Hello",
        1000,
        "I'm Amin Chogueur",
        1000,
        "A front-end web developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
function Hero() {
  return (
    <div className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={styles.content}
      >
        <h2 className={"gradientText"}>
          <TypeComponent />
        </h2>
        <p>
          Front-End Developer experienced in building responsive, SEO-friendly
          web applications using React, Next.js, Vue, and TypeScript. Currently
          working with Made4Cloud LTD on production systems including
          e-commerce, dashboards, authentication modules, and content management
          platforms. Strong focus on clean UI, API integration, performance
          optimization, and maintainable code.
        </p>
        <a
          href="/AminChogueur-Resume.pdf"
          download="Amin_Chogueur_Resume.pdf"
          className={styles.downloadBtn}
        >
          <p>Download CV</p>

          <span>
            <AiOutlineDownload style={{ fontSize: "22px" }} />
          </span>
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={styles.imageContainer}
      >
        <Image src={"/amin1.jpeg"} width={250} height={250} alt={"amin1"} />
      </motion.div>
    </div>
  );
}

export default Hero;
