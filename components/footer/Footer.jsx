import styles from "./footer.module.css";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className="gradientText">
        <Link href={"/"}>{`{AMIN.DEV}`}</Link>
      </h2>
      <p>
        Copyright © 2024{" "}
        <Link className={`gradientText`} href={"/"}>
          Amin Chogueur
        </Link>
        . All rights reserved.
      </p>
      <div className={styles.socialAcount}>
        <Link
          href={"https://www.linkedin.com/in/amin-chogueur-a84769206/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link href={"https://github.com/Amin-Chogueur"} target="_blank">
          <FaGithubSquare />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
