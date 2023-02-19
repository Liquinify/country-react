import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitch = (): JSX.Element => {
  const { theme, setTheme } = useContext<any>(ThemeContext);

  return (
    <div className="theme">
      {theme === "dark" ? (
        <button
          className="theme__button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <HiSun className="theme__image sun" size={20} />
          <span className="theme__span sun">Light Mode</span>
        </button>
      ) : (
        <button
          className="theme__button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <HiMoon className="theme__image" size={20} />
          <span className="theme__span">Dark Mode</span>
        </button>
      )}
    </div>
  );
};

export default ThemeSwitch;
