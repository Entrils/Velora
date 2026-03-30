import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { projects } from "../assets/siteContent";
import styles from "./HeroSection.module.css";

const featuredProject = projects[0];

function HeroSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .fromTo(
          `.${styles.eyebrow}`,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 }
        )
        .fromTo(
          `.${styles.title} span`,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.08 },
          "-=0.25"
        )
        .fromTo(
          `.${styles.lead}, .${styles.actions}, .${styles.badges} li, .${styles.visual}`,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
          "-=0.35"
        );

      gsap.to(`.${styles.visualCard}`, {
        y: -5,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} id="top" ref={sectionRef}>
      <div className={styles.background}>
        <div className={styles.orbPrimary} />
        <div className={styles.orbSecondary} />
      </div>
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Дизайн-проект квартиры под ключ</p>
          <h1 className={styles.title}>
            <span>Создаём интерьеры,</span>
            <span>в которых красиво</span>
            <span>и удобно жить.</span>
          </h1>
          <p className={styles.lead}>
            VELORA помогает пройти путь от первой идеи до готовой квартиры.
            Мы продумываем планировку, материалы, свет и комплектацию,
            чтобы интерьер был не только эффектным, но и удобным каждый день.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryButton}>
              Рассчитать стоимость
            </a>
            <a href="#projects" className={styles.secondaryButton}>
              Посмотреть проекты
            </a>
          </div>
          <ul className={styles.badges}>
            <li>
              <strong>от 55 дней</strong>
              <span>на разработку проекта</span>
            </li>
            <li>
              <strong>148 интерьеров</strong>
              <span>квартиры, дома, пентхаусы</span>
            </li>
            <li>
              <strong>с полным сопровождением</strong>
              <span>от планировки до комплектации</span>
            </li>
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualCard}>
            <img src={featuredProject.image} alt={featuredProject.title} className={styles.image} />
            <div className={styles.orangeCard}>
              <span>Проект месяца</span>
              <strong>{featuredProject.title}</strong>
              <p>{featuredProject.location}</p>
            </div>
          </div>
          <div className={styles.visualFooter}>
            <div className={styles.metaCard}>
              <span>Площадь</span>
              <strong>{featuredProject.area}</strong>
            </div>
            <div className={styles.metaCard}>
              <span>Формат</span>
              <strong>{featuredProject.format}</strong>
            </div>
            <div className={styles.metaCard}>
              <span>Подход</span>
              <strong>Планировка, свет, материалы</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;