import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

const ColorThemeBtn: FC<{ className?: string }> = (props) => {
  const [isLightTheme, setTheme] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("isLightTheme");
    if (theme) {
      onThemeChanged(JSON.parse(theme));
      return;
    }
    const doesPreferDarkTheme = window.matchMedia("(prefers-color-scheme : dark)");
    if (doesPreferDarkTheme.matches) onThemeChanged(false);
    else onThemeChanged(true);
  }, []);
  const heightAndWidth = 25;
  const onThemeChanged = (theme: boolean) => {
    console.log(theme);

    localStorage.setItem("isLightTheme", theme.toString());
    theme ? document.body.classList.remove("dark") : document.body.classList.add("dark");
    setTheme(theme);
  };
  return (
    <button {...props} onClick={() => onThemeChanged(!isLightTheme)}>
      {isLightTheme ? (
        <Image src="/sunny.png" alt="sun" height={heightAndWidth} width={heightAndWidth} />
      ) : (
        <Image src="/half-moon.png" alt="moon" height={heightAndWidth} width={heightAndWidth} />
      )}
    </button>
  );
};

export default ColorThemeBtn;
