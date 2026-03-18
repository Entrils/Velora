import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";

const THEME_KEY = "velora-theme";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem(THEME_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return "dark";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <HomePage
      theme={theme}
      onToggleTheme={() =>
        setTheme((currentTheme) =>
          currentTheme === "dark" ? "light" : "dark"
        )
      }
    />
  );
}

export default App;