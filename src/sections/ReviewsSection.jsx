import SectionIntro from "../components/SectionIntro";
import { testimonials } from "../assets/siteContent";
import useReveal from "../hooks/useReveal";
import styles from "./ReviewsSection.module.css";

function ReviewsSection() {
  const sectionRef = useReveal({ selector: "[data-reveal], [data-card]" });

  return (
    <section className={styles.section} id="reviews" ref={sectionRef}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <SectionIntro
              eyebrow="Отзывы"
              title="Нас рекомендуют за понятный процесс и интерьер, который удобно реализовать."
              description="Мы сохранили отзывы в визуальном формате: так блок выглядит живее и ближе к реальному клиентскому опыту, а не как формальные текстовые цитаты."
            />

            <div className={styles.summaryCard} data-reveal>
              <span>Почему нам доверяют</span>
              <strong>Спокойный процесс, честная комплектация и предсказуемый результат.</strong>
              <p>
                Для клиентов важна не только красивая картинка, но и то, как проект проходит через стройку,
                бюджет и реальную повседневную жизнь.
              </p>
            </div>
          </div>

          <div className={styles.grid}>
            {testimonials.map((item, index) => (
              <article
                key={item.id}
                className={`${styles.card} ${index === 0 ? styles.featured : ""}`}
                data-card
              >
                <div className={styles.cardTop}>
                  <span className={styles.badge}>Отзыв клиента</span>
                  <strong>{item.author}</strong>
                </div>
                <div className={styles.imageFrame}>
                  <img src={item.image} alt={`Отзыв: ${item.author}`} loading="lazy" />
                </div>
                <div className={styles.meta}>
                  <span>{item.project}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;