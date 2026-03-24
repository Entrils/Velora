import { projects } from "../assets/siteContent";
import SectionIntro from "../components/SectionIntro";
import useReveal from "../hooks/useReveal";
import styles from "./ProjectsSection.module.css";

function ProjectsSection({ onSelectProject }) {
  const sectionRef = useReveal();

  return (
    <section className={styles.section} id="projects" ref={sectionRef}>
      <div className="container">
        <SectionIntro
          eyebrow="Проекты"
          title="Каждый интерьер начинается с планировки, а запоминается настроением."
          description="Мы показываем не набор приемов, а готовые пространства: с разным светом, ритмом и масштабом, но с одной общей чертой — в них действительно удобно жить."
        />
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={`${styles.card} ${index === 0 || index === 3 ? styles.large : ""} cursorTarget`}
              onClick={() => onSelectProject(project.id)}
              data-reveal
            >
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <p>{project.location}</p>
                <div>
                  <h3>{project.title}</h3>
                  <span>
                    {project.area} • {project.format}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;