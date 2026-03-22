import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./HeroSection.module.css";

function HeroSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .fromTo(
          `.${styles.eyebrow}`,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 }
        )
        .fromTo(
          `.${styles.title} span`,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1, stagger: 0.08 },
          "-=0.35"
        )
        .fromTo(
          `.${styles.lead}, .${styles.actions}, .${styles.metrics} article, .${styles.frame}`,
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 },
          "-=0.55"
        );

      gsap.to(`.${styles.orbPrimary}`, {
        y: -26,
        x: 18,
        duration: 6.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(`.${styles.orbSecondary}`, {
        y: 24,
        x: -24,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(`.${styles.floatingCard}`, {
        y: -18,
        duration: 4.8,
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
        <div className={styles.grid} />
      </div>
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Интерьеры для квартир и частных резиденций</p>
          <h1 className={styles.title}>
            <span>Делаем интерьер,</span>
            <span>в котором легко жить</span>
            <span>и приятно возвращаться.</span>
          </h1>
          <p className={styles.lead}>
            VELORA проектирует частные интерьеры без лишнего шума: с ясной
            планировкой, спокойным светом и материалами, которые хорошо живут во
            времени.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryButton}>
              Смотреть проекты
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Оставить заявку
            </a>
          </div>
          <div className={styles.metrics}>
            <article>
              <strong>148</strong>
              <span>реализованных интерьеров</span>
            </article>
            <article>
              <strong>12 лет</strong>
              <span>частной практики и авторского сопровождения</span>
            </article>
            <article>
              <strong>Полный цикл</strong>
              <span>от планировки до подбора мебели и света</span>
            </article>
          </div>
        </div>
        <div className={styles.frame}>
          <div className={styles.frameInner}>
            <div className={styles.mainScene}>
              <div className={styles.scenePanel} />
              <div className={styles.sceneBlockLarge} />
              <div className={styles.sceneBlockMedium} />
              <div className={styles.sceneBlockSmall} />
            </div>
            <div className={styles.floatingCard}>
              <span>Палитра проекта</span>
              <strong>Теплый камень / дуб / матовая латунь</strong>
              <p>
                Так обычно рождается настроение интерьера: сначала логика
                пространства, потом свет, фактура и точные акценты.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;