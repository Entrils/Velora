import styles from "./YandexMap.module.css";

const MAP_ADDRESS = "Москва, Пречистенская набережная, 17";
const MAP_LINK = "https://yandex.ru/maps/?text=" + encodeURIComponent(MAP_ADDRESS);
const MAP_IFRAME_SRC =
  "https://yandex.ru/map-widget/v1/?ll=37.597458%2C55.739177&mode=search&text=" +
  encodeURIComponent(MAP_ADDRESS) +
  "&z=16";

function YandexMap() {
  return (
    <div className={styles.root}>
      <iframe
        className={styles.frame}
        src={MAP_IFRAME_SRC}
        title="Карта студии VELORA в Яндекс Картах"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
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