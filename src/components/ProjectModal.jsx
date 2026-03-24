import { useEffect } from "react";
import styles from "./ProjectModal.module.css";

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) {
      document.body.classList.remove("modalOpen");
      return undefined;
    }

    document.body.classList.add("modalOpen");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modalOpen");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  return (
    <div className={styles.backdrop} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Закрыть описание проекта"
        >
          Закрыть
        </button>
        <img
          src={project.image}
          alt={project.title}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.content}>
          <p className={styles.kicker}>{project.location}</p>
          <h3 id="project-modal-title">{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.meta}>
            <div>
              <span>Формат</span>
              <strong>{project.format}</strong>
            </div>
            <div>
              <span>Площадь</span>
              <strong>{project.area}</strong>
            </div>
            <div>
              <span>Срок</span>
              <strong>{project.timeline}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
