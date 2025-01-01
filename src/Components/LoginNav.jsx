import React from "react";
import { useTheme } from "../Components/ThemeContext";
import LightIcon from "/sun.svg";
import DarkIcon from "/moon.svg";

export default function LoginNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-end items-center h-[6dvh] w-dvw dark:bg-glass_dark bg-glass_light text-black dark:text-white">
      <div className="flex relative right-20 gap-5">
        <button
          className={"flex justify-between items-center"}
          onClick={toggleTheme}
        >
          <img
            className="w-7"
            src={theme === "light" ? DarkIcon : LightIcon}
            alt="icon"
          />
        </button>
      </div>
    </div>
  );
}
