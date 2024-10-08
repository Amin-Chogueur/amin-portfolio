import Image from "next/image";
import styles from "./component.module.css";
import Link from "next/link";
function Component({ data }) {
  return (
    <div
      className={
        data.direction === "left" ? styles.leftContainer : styles.rightContainer
      }
    >
      <div className={styles.imageContainer}>
        <div className={styles.imgWrapper}>
          <Image src={data.image} width={450} height={550} alt={"image"} />
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={"gradientText"}>{data.title}</h3>
        <p>{data.description}</p>
        <Link href={`/project/${data.title.replace(/\s+/g, "-")}`}>
          {data.button} &rarr;
        </Link>
      </div>
    </div>
  );
}

export default Component;
