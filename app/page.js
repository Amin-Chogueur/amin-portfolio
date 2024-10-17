import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Project from "@/components/project/Project";
import Skills from "@/components/skills/Skills";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
