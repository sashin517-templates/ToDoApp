import React from "react";
import { NavLink } from "react-router-dom";

export default function FloatingNav() {
  return (
    <div className="relative top-10 list-none flex justify-center items-center">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-primary2 flex items-center h-full w-auto text-white font-semibold text-xl px-10"
            : "flex items-center bg-transparent hover:dark:bg-primary2 hover:bg-white h-full w-auto text-xl font-medium px-10"
        }
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-primary2 flex items-center h-full w-auto text-white font-semibold text-xl px-10"
            : "flex items-center bg-transparent hover:dark:bg-primary2 hover:bg-white h-full w-auto text-xl font-medium px-10"
        }
        to="/tasks"
      >
        Tasks
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-primary2 flex items-center h-full w-auto text-white font-semibold text-xl px-10"
            : "flex items-center bg-transparent hover:dark:bg-primary2 hover:bg-white h-full w-auto text-xl font-medium px-10"
        }
        to="/events"
      >
        Events
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-primary2 flex items-center h-full w-auto text-white font-semibold text-xl px-10"
            : "flex items-center bg-transparent hover:dark:bg-primary2 hover:bg-white h-full w-auto text-xl font-medium px-10"
        }
        to="/profile"
      >
        Profile
      </NavLink>
    </div>
  );
}
