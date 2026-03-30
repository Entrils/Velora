import { useState } from "react";
import SectionIntro from "../components/SectionIntro";
import useReveal from "../hooks/useReveal";
import styles from "./ContactSection.module.css";

function ContactSection() {
  const sectionRef = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section className={styles.section} id="contact" ref={sectionRef}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <SectionIntro
              eyebrow="Контакты"
              title="Лучше обсудить квартиру до начала стройки."
              description="Если у вас уже есть объект, сроки и примерный запрос, напишите нам. На первом разговоре обычно становится понятно, с чего именно стоит начать."
            />
            <div className={styles.contacts} data-reveal>
              <article>
                <span>Телефон</span>
                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
              </article>
              <article>
                <span>Почта</span>
                <a href="mailto:hello@velora.studio">hello@velora.studio</a>
              </article>
              <article>
                <span>Студия</span>
                <p>Москва, Пречистенская набережная, 17</p>
              </article>
            </div>
          </div>
          <div className={styles.formWrap} data-reveal>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label>
                <span>Как к вам обращаться</span>
                <input type="text" name="name" placeholder="Имя" required />
              </label>
              <label>
                <span>Телефон или почта</span>
                <input
                  type="text"
                  name="contact"
                  placeholder="Удобный способ связи"
                  required
                />
              </label>
              <label>
                <span>Площадь объекта</span>
                <input type="text" name="area" placeholder="Например, 160 м²" />
              </label>
              <label>
                <span>Коротко о задаче</span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Квартира или дом, сроки, пожелания по стилю и бюджету"
                />
              </label>
              <button type="submit">Отправить запрос</button>
              {submitted ? (
                <p className={styles.success}>
                  Спасибо, запрос получен. Мы свяжемся с вами в ближайшее рабочее время.
                </p>
              ) : null}
            </form>
            <div className={styles.mapCard}>
              <div className={styles.mapGrid} />
              <div className={styles.mapMarker}>
                <span />
                <strong>Студия VELORA</strong>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.footer} data-reveal>
          <span>VELORA</span>
          <p>Интерьерная студия для квартир, пентхаусов и частных домов.</p>
        </footer>
      </div>
    </section>
  );
}

export default ContactSection;