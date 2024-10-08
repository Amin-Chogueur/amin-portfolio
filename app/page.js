import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Project from "@/components/project/Project";
import Skills from "@/components/skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
