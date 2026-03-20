import styles from "./StudioHeader.module.css";

const navigation = [
  { label: "О студии", href: "#about" },
  { label: "Проекты", href: "#projects" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Услуги", href: "#services" },
  { label: "Контакты", href: "#contact" }
];

function StudioHeader({ theme, onToggleTheme }) {
  return (
    <header className={styles.header}>
      <a href="#top" className={styles.brand}>
        <span>VELORA</span>
        <small>Интерьерная студия</small>
      </a>
      <nav className={styles.nav} aria-label="Основная навигация">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.themeToggle}
          onClick={onToggleTheme}
          aria-label={
            theme === "dark"
              ? "Включить светлую тему"
              : "Включить тёмную тему"
          }
        >
          <span>{theme === "dark" ? "Светлая" : "Тёмная"}</span>
          <small>тема</small>
        </button>
        <a href="#contact" className={styles.cta}>
          Обсудить задачу
        </a>
      </div>
    </header>
  );
}

export default StudioHeader;