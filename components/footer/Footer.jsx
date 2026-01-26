import styles from "./footer.module.css";
import Link from "next/link";
import { FaLinkedin, FaGithubSquare, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const phoneNumber = "213671265377"; // Phone number without the "+" and spaces

  return (
    <footer className={styles.footer}>
      <h2 className="gradientText">
        <Link href={"/"}>{`{AMIN.DEV}`}</Link>
      </h2>
      <p>
        Copyright © {new Date().getFullYear()}{" "}
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
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
