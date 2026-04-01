import { useEffect, useRef, useState } from "react";
import styles from "./YandexMap.module.css";

const MAP_ADDRESS = "Москва, Пречистенская набережная, 17";
const MAP_LINK = "https://yandex.ru/maps/?text=" + encodeURIComponent(MAP_ADDRESS);
const MAP_IFRAME_SRC =
  "https://yandex.ru/map-widget/v1/?ll=37.597458%2C55.739177&mode=search&text=" +
  encodeURIComponent(MAP_ADDRESS) +
  "&z=16";

function YandexMap() {
  const rootRef = useRef(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    const element = rootRef.current;

    if (!element || shouldLoadMap) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [shouldLoadMap]);

  return (
    <div className={styles.root} ref={rootRef}>
      {shouldLoadMap ? (
        <iframe
          className={styles.frame}
          src={MAP_IFRAME_SRC}
          title="Карта студии VELORA в Яндекс Картах"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div className={styles.placeholder}>
          <span>Карта загружается при прокрутке до секции контактов</span>
          <a href={MAP_LINK} target="_blank" rel="noreferrer">
            Открыть в Яндекс Картах
          </a>
        </div>
      )}
      <div className={styles.caption}>
        <span>Офис студии</span>
        <a href={MAP_LINK} target="_blank" rel="noreferrer">
          Открыть в Яндекс Картах
        </a>
      </div>
    </div>
  );
}

export default YandexMap;