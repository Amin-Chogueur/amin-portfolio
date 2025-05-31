import Image from "next/image";
import styles from "./projectDetails.module.css";
import { myProjects } from "@/projuctData";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";

function ProjectDetails({ params }) {
  const projectName = params.slug.replace(/-/g, " ");
  const project = myProjects.find((item) => item.title === projectName);
  return (
    <div className={styles.details}>
      <h1 className={"gradientText"}>{project?.title}</h1>
      <div className={styles.imagesContainer}>
        <Image
          src={project?.image}
          width={700}
          height={500}
          alt={project?.title}
        />
        {project.imagesDetails && (
          <div className={styles.images}>
            {project.imagesDetails?.map((image, i) => (
              <Image
                key={i}
                src={image}
                width={150}
                height={150}
                alt={`${project.title}${i}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h2 className="gradientText">Technology:</h2>
        <div className={styles.technologies}>
          {project.technologies.map((tech, i) => (
            <Image key={i} src={tech} width={60} height={60} alt={"tech"} />
          ))}
        </div>
        <h2 className="gradientText">Description:</h2>
        <ul>
          {project.features.map((feture, i) => (
            <li key={i}>{feture}</li>
          ))}
        </ul>
        <div className={styles.links}>
          {project.linkToWeb.map((link, i) => (
            <Link key={i} href={link} target={"_blank"}>
              <FaGlobe />
            </Link>
          ))}
          {project.linkToCode && (
            <Link href={project.linkToCode} target={"_blank"}>
              <FaGithub />
            </Link>
          )}
        </div>
        {project?.note && <p className={styles.note}>Note: {project?.note}</p>}
      </div>
    </div>
  );
}

export default ProjectDetails;
