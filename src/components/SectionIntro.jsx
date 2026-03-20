import styles from "./SectionIntro.module.css";

function SectionIntro({ eyebrow, title, description, align = "left" }) {
  return (
    <div
      className={`${styles.intro} ${align === "center" ? styles.center : ""}`}
      data-reveal
    >
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default SectionIntro;
