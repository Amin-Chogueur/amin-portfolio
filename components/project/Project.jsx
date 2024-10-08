"use client";
import Component from "../commenComponents/Component";
import styles from "./project.module.css";
import { data } from "@/projuctData";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Corrected spelling of 'isInView'

  return (
    <div ref={ref} className={styles.project} id="Projects">
      <h2 className={"gradientText"}>My Projects</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        } // Change animation based on isInView
        transition={{ duration: 1 }}
      >
        <Component data={data[0]} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        } // Change animation based on isInView
        transition={{ duration: 1 }}
      >
        <Component data={data[1]} />{" "}
        {/* Change to data[1] to show a different project */}
      </motion.div>
    </div>
  );
}

export default Project;
