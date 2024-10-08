import Image from "next/image";
import styles from "./projectDetails.module.css";
import { data } from "@/projuctData";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
function ProjectDetails({ params }) {
  const projectName = params.slug.replace(/-/g, " ");
  const project = data.find((item) => item.title === projectName);
  console.log(project);
  return (
    <div className={styles.details}>
      <h1 className={"gradientText"}>{project.title}</h1>
      <div className={styles.imagesContainer}>
        <Image
          src={project.image}
          width={700}
          height={500}
          alt={project.title}
        />
        <div className={styles.images}>
          {project.imagesDetails.map((image, i) => (
            <Image
              key={i}
              src={image}
              width={150}
              height={150}
              alt={`image detail ${i}`}
            />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <h2 className="gradientText">Technology:</h2>
        <div className={styles.technologies}>
          {project.technologies.map((tech, i) => (
            <Image key={i} src={tech} width={60} height={60} alt={"tech"} />
          ))}
        </div>
        <h2 className="gradientText">Description:</h2>
        <p>{project.details}</p>
        <div className={styles.links}>
          {project.linkToWeb.map((link, i) => (
            <Link key={i} href={link} target={"_blank"}>
              <IoEyeSharp />
            </Link>
          ))}
          <Link href={project.linkToCode} target={"_blank"}>
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
