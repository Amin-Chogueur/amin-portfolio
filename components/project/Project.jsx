"use client";
import Component from "../commenComponents/Component";
import styles from "./project.module.css";
import { myProjects } from "@/projuctData";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Corrected spelling of 'isInView'
  const [tech, setTech] = useState("next");
  const [activeFilter, setActiveFilter] = useState("next");
  const filteredProject = myProjects.filter((project) =>
    project.tech === tech ? project : null
  );
  return (
    <div ref={ref} className={styles.project} id="Projects">
      <h2 className={"gradientText"}>My Projects</h2>
      <div className={styles.filter}>
        <button
          onClick={() => {
            setTech("next"), setActiveFilter("next");
          }}
          className={activeFilter === "next" && styles.active}
        >
          Next Js
        </button>

        <button
          className={activeFilter === "react" && styles.active}
          onClick={() => {
            setTech("react"), setActiveFilter("react");
          }}
        >
          React
        </button>
        <button
          className={activeFilter === "mern" && styles.active}
          onClick={() => {
            setTech("mern"), setActiveFilter("mern");
          }}
        >
          MERN
        </button>
      </div>
      {filteredProject.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          } // Change animation based on isInView
          transition={{ duration: 1 }}
        >
          <Component data={project} />
        </motion.div>
      ))}
    </div>
  );
}

export default Project;
