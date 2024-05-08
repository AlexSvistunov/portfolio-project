import { useState } from "react";
import "./ThemeSwitcher.scss";

const ThemeSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  // localStorage

  return (
    <div
      className={`switch ${
        currentLanguage === "ru" ? "language--ru" : "language--eng"
      }`}
      onClick={(e) => {
        if (currentLanguage === "ru") {
          setCurrentLanguage("en");
        } else {
          setCurrentLanguage("ru");
        }
      }}
    >
      <span>EN</span>
      <span>RU</span>
    </div>
  );
};

export default ThemeSwitcher;
