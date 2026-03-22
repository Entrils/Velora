import SectionIntro from "../components/SectionIntro";
import ServiceIcon from "../components/ServiceIcon";
import { services } from "../assets/siteContent";
import useReveal from "../hooks/useReveal";
import styles from "./ServicesSection.module.css";

function ServicesSection() {
  const sectionRef = useReveal();

  return (
    <section className={styles.section} id="services" ref={sectionRef}>
      <div className="container">
        <SectionIntro
          eyebrow="Услуги"
          title="Берем на себя не только идею, но и весь путь до готового интерьера."
          description="Работа идет последовательно: сначала планировка и концепция, потом рабочая часть, стройка, подбор материалов и финальная комплектация."
        />
        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.id} className={styles.card} data-reveal>
              <ServiceIcon type={service.id} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;