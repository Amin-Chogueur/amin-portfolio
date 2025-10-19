import Image from "next/image";
import styles from "./projectDetails.module.css";
import { myProjects } from "@/projuctData";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

function ProjectDetails({ params }) {
  const projectName = params.slug.replace(/-/g, " ");
  const project = myProjects.find((item) => item.title === projectName);
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h1 className={"gradientText"}>{project?.title}</h1>
        <Link href={"/#Projects"} className={"gradientText"}>
          &larr; All Projects
        </Link>
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
              
              <Image key={i} src={tech} width={40} height={40} alt={"tech"} />
            ))}
          </div>
          <h2 className="gradientText">Features:</h2>
          <ul>
            {project.features.map((feture, i) => (
              <li key={i}>{feture}</li>
            ))}
          </ul>
          <div className={styles.links}>
            {project.linkToWeb && (
              <p>
                <span>
                  {" "}
                  <FaGlobe className={styles.icon} />
                  Live Production Site (Client Version):
                </span>

                <Link href={project?.linkToWeb?.link} target={"_blank"}>
                  {project?.linkToWeb?.lable}
                </Link>
              </p>
            )}
            {project.linkToVercel && (
              <p>
                <span>
                  {" "}
                  <SiVercel className={styles.icon} />
                  Demo Version (My Vercel Account):{" "}
                </span>

                <Link href={project.linkToVercel.link} target={"_blank"}>
                  {project.linkToVercel.lable}
                </Link>
              </p>
            )}

            {project.demoInfo && (
              <div className={styles.demoInfo}>
                <h4>🧪 How to Test the App</h4>

                <div className={styles.demoBlock}>
                  <strong>Admin Login</strong>
                  <p>
                    Email: <code>{project.demoInfo.admin.email}</code>
                  </p>
                  <p>
                    Password: <code>{project.demoInfo.admin.password}</code>
                  </p>
                </div>

                <div className={styles.demoBlock}>
                  <strong>User Testing</strong>
                  <p>{project.demoInfo.userNote}</p>
                </div>

                <p className={styles.warning}>{project.demoInfo.warning}</p>
              </div>
            )}

            {project.linkToCode && (
              <Link
                href={project.linkToCode}
                target={"_blank"}
                className={styles.github}
              >
                <FaGithub />
              </Link>
            )}
          </div>
          {project?.note && (
            <p className={styles.note}>Note: {project?.note}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
