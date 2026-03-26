import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionIntro from "../components/SectionIntro";
import { testimonials } from "../assets/siteContent";
import useReveal from "../hooks/useReveal";
import styles from "./ReviewsSection.module.css";

gsap.registerPlugin(ScrollTrigger);

function ReviewsSection() {
  const sectionRef = useReveal({ selector: "[data-reveal], [data-card]" });
  const railRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-card]").forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 40 + index * 10 },
          {
            y: -20 + index * 12,
            ease: "none",
            scrollTrigger: {
              trigger: railRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  const scrollRail = (direction) => {
    railRef.current?.scrollBy({
      left: direction * 360,
      behavior: "smooth"
    });
  };

  return (
    <section className={styles.section} id="reviews" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <SectionIntro
            eyebrow="Отзывы"
            title="Самое важное начинается уже после переезда."
            description="Нам пишут не сразу после красивой презентации, а когда в квартире уже пожили: стало удобно, спокойно и ничего не пришлось переделывать."
          />
          <div className={styles.controls} data-reveal>
            <button
              type="button"
              className={styles.control}
              onClick={() => scrollRail(-1)}
              aria-label="Прокрутить отзывы влево"
            >
              ‹
            </button>
            <button
              type="button"
              className={styles.control}
              onClick={() => scrollRail(1)}
              aria-label="Прокрутить отзывы вправо"
            >
              ›
            </button>
          </div>
        </div>
        <div className={styles.rail} ref={railRef}>
          {testimonials.map((item) => (
            <article key={item.id} className={styles.card} data-card>
              <img src={item.image} alt={`Отзыв: ${item.author}`} loading="lazy" />
              <div className={styles.meta}>
                <strong>{item.author}</strong>
                <span>{item.project}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;