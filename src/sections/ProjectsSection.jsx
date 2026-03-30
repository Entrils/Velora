import { projects } from "../assets/siteContent";
import SectionIntro from "../components/SectionIntro";
import useReveal from "../hooks/useReveal";
import styles from "./ProjectsSection.module.css";

function ProjectsSection({ onSelectProject }) {
  const sectionRef = useReveal();

  return (
    <section className={styles.section} id="projects" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <SectionIntro
            eyebrow="Проекты"
            title="Показываем реальные сценарии будущего интерьера, а не просто красивые картинки."
            description="Каждый кейс — это квартира со своей планировкой, атмосферой и набором решений, которые потом действительно реализуются в жизни."
          />
          <a href="#contact" className={styles.headerCta}>
            Получить консультацию
          </a>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={`${styles.card} ${index === 0 ? styles.featured : ""} cursorTarget`}
              onClick={() => onSelectProject(project.id)}
              data-reveal
            >
              <img src={project.image} alt={project.title} className={styles.image} loading="lazy" />
              <div className={styles.content}>
                <span className={styles.location}>{project.location}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.specs}>
                  <span>{project.area}</span>
                  <span>{project.format}</span>
                </div>
                <strong className={styles.openLabel}>Подробнее о проекте</strong>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;