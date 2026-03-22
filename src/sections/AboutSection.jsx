import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionIntro from "../components/SectionIntro";
import { stats } from "../assets/siteContent";
import useReveal from "../hooks/useReveal";
import styles from "./AboutSection.module.css";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useReveal();
  const valueRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      valueRefs.current.forEach((element, index) => {
        if (!element) {
          return;
        }

        const counter = { value: 0 };
        gsap.to(counter, {
          value: stats[index].value,
          duration: 1.8,
          ease: "power2.out",
          snap: { value: 1 },
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true
          },
          onUpdate: () => {
            element.textContent = `${counter.value}${stats[index].suffix}`;
          }
        });
      });

      gsap.fromTo(
        `.${styles.line}`,
        { scaleX: 0, opacity: 0.4 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.3,
          ease: "power2.out",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section className={styles.section} id="about" ref={sectionRef}>
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.content}>
            <SectionIntro
              eyebrow="О студии"
              title="Не украшаем квартиру. Собираем её как архитектуру."
              description="Для нас интерьер начинается не с декора, а с маршрутов, света, высоты, масштаба и того, как человек будет жить в этом пространстве каждый день."
            />
            <div className={styles.story} data-reveal>
              <div className={styles.line} />
              <p>
                VELORA ведет проекты спокойно и подробно. Мы много работаем с
                планировкой, заранее продумываем хранение, сценарии света и
                сочетание материалов, чтобы на стройке было меньше случайностей,
                а в готовом интерьере — больше тишины и точности.
              </p>
            </div>
          </div>
          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <article key={stat.label} className={styles.statCard} data-reveal>
                <strong
                  ref={(element) => {
                    valueRefs.current[index] = element;
                  }}
                >
                  0
                </strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;