import { useEffect, useState } from "react";
import { Theme } from "../constant/theme.enum";

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    localStorage.getItem("theme") as Theme
  );
  const switchTheme = () => {
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
  };

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(theme === Theme.Light ? Theme.Dark : Theme.Light);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, switchTheme };
}
