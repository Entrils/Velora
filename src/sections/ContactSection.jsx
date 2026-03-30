import { useState } from "react";
import SectionIntro from "../components/SectionIntro";
import YandexMap from "../components/YandexMap";
import useReveal from "../hooks/useReveal";
import styles from "./ContactSection.module.css";

const MAP_ADDRESS = "Москва, Пречистенская набережная, 17";
const MAP_LINK = "https://yandex.ru/maps/?text=" + encodeURIComponent(MAP_ADDRESS);

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
          <div className={styles.infoColumn}>
            <SectionIntro
              eyebrow="Контакты"
              title="Расскажите о квартире, и мы предложим следующий шаг по проекту."
              description="Если у вас уже есть адрес, площадь, примерные сроки и несколько ориентиров по стилю, этого достаточно для первого разговора."
            />

            <div className={styles.contactGrid} data-reveal>
              <article>
                <span>Телефон</span>
                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
              </article>
              <article>
                <span>Почта</span>
                <a href="mailto:hello@velora.studio">hello@velora.studio</a>
              </article>
              <article>
                <span>Адрес</span>
                <p>{MAP_ADDRESS}</p>
              </article>
            </div>

            <div className={styles.orangeCard} data-reveal>
              <span>Для старта достаточно</span>
              <strong>Плана квартиры, площади, сроков и пары референсов по настроению.</strong>
              <p>Чем раньше мы видим вводные, тем точнее можем подсказать формат работы и состав проекта.</p>
            </div>
          </div>

          <div className={styles.formColumn} data-reveal>
            <div className={styles.mapCard}>
              <div className={styles.mapMeta}>
                <div>
                  <span>Студия VELORA</span>
                  <strong>{MAP_ADDRESS}</strong>
                </div>
                <a href={MAP_LINK} target="_blank" rel="noreferrer">
                  Открыть маршрут
                </a>
              </div>
              <div className={styles.mapViewport}>
                <YandexMap />
              </div>
            </div>

            <form className={styles.formCard} onSubmit={handleSubmit}>
              <div className={styles.formHeader}>
                <span>Заявка на проект</span>
                <strong>Заполните короткую форму, и мы свяжемся с вами.</strong>
              </div>
              <div className={styles.formGrid}>
                <label>
                  <span>Имя</span>
                  <input type="text" name="name" placeholder="Как к вам обращаться" required />
                </label>
                <label>
                  <span>Контакт</span>
                  <input type="text" name="contact" placeholder="Телефон или почта" required />
                </label>
                <label>
                  <span>Площадь</span>
                  <input type="text" name="area" placeholder="Например, 160 м²" />
                </label>
                <label>
                  <span>Тип объекта</span>
                  <input type="text" name="type" placeholder="Квартира, дом, пентхаус" />
                </label>
              </div>
              <label>
                <span>Комментарий</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Опишите задачу в свободной форме: сроки, пожелания, формат сопровождения."
                />
              </label>
              <div className={styles.formFooter}>
                <button type="submit">Отправить заявку</button>
                {submitted ? (
                  <p className={styles.success}>Спасибо. Мы получили запрос и свяжемся с вами в ближайшее время.</p>
                ) : (
                  <p className={styles.helperText}>Обычно отвечаем в течение рабочего дня.</p>
                )}
              </div>
            </form>
          </div>
        </div>

        <footer className={styles.footer} data-reveal>
          <span>VELORA</span>
          <p>Дизайн квартир, пентхаусов и частных домов с продуманной архитектурой интерьера.</p>
        </footer>
      </div>
    </section>
  );
}

export default ContactSection;