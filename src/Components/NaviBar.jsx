import React from "react";
import { useTheme } from "../Components/ThemeContext";
import LightIcon from "/sun.svg";
import DarkIcon from "/moon.svg";

const NaviBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="flex justify-between px-10 items-center h-[6dvh] w-dvw dark:bg-glass_dark bg-glass_light text-black dark:text-white">
        <div>
          <img className="h-4 w-16" src="/Vector.png" alt="Logo" />
        </div>

        <div className="flex justify-center items-center w-auto gap-5">
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
          <a href="/profile" className="flex items-center p-1 rounded-full">
            <img className="" src="/UserCircleLight.svg" alt="" />
          </a>
          <a
            href="/login"
            className="flex items-center gap-2 px-3 py-2 bg-transparent hover:bg-red text-white rounded-2xl text-sm"
          >
            <img src="/CombinedShape.svg" alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default NaviBar;
