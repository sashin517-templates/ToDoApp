import React from "react";
import { NavLink } from "react-router-dom";
import HouseIcon from "/House.svg";
import HouseIconFill from "/HouseFill.svg";
import CalendarIcon from "/Calendar.svg";
import CalendarIconFill from "/CalendarFill.svg";
import TaskIcon from "/Task.svg";
import TaskIconFill from "/TaskFill.svg";
import UserIcon from "/User.svg";
import UserIconFill from "/UserFill.svg";
import LightIcon from "/sun.svg";
import DarkIcon from "/moon.svg";
import { useTheme } from "../Components/ThemeContext";

export default function FloatingNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-center items-center gap-5 bg-transparent w-full">
      <div className="flex relative w-3/4 top-6 list-none justify-evenly items-center    bg-primary2 max-md:w-[400px] max-sm:w-[300px] h-[60px] rounded-full">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "active-nav-item" : "inactive-nav-item"
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-2">
              <img src={isActive ? HouseIconFill : HouseIcon} alt="Home Icon" />
              <h1 className="text-white font-highlighted">Home</h1>
            </div>
          )}
        </NavLink>
        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            isActive ? "active-nav-item" : "inactive-nav-item"
          }
        >
          {({ isActive }) => (
            <div className="flex gap-2 items-center">
              <img
                src={isActive ? CalendarIconFill : CalendarIcon}
                alt="Calendar Icon"
              />
              <h1 className="text-white font-highlighted">Calendar</h1>
            </div>
          )}
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            isActive ? "active-nav-item" : "inactive-nav-item"
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-2">
              <img src={isActive ? TaskIconFill : TaskIcon} alt="Task Icon" />
              <h1 className="text-white font-highlighted">Tasks</h1>
            </div>
          )}
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "active-nav-item" : "inactive-nav-item"
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-2">
              <img src={isActive ? UserIconFill : UserIcon} alt="User Icon" />
              <h1 className="text-white font-highlighted">Profile</h1>
            </div>
          )}
        </NavLink>
      </div>
      <div className="relative flex gap-5 top-6 w-auto h-auto max-md:hidden">
        <a
          href="/"
          className="flex items-center justify-center  h-[60px] w-[60px] bg-red rounded-full"
        >
          <img className="w-5" src="/CombinedShape.svg" alt="" />
        </a>
        <button
          className={
            "flex justify-center items-center bg-primary1 h[60px] w-[60px] rounded-full"
          }
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
