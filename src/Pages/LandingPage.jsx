import React, { useState } from "react";
import NaviBar from "../Components/NaviBar";
import FloatingNav from "../Components/FloatingNav";

function LandingPage() {
  const [mode, setMode] = useState("light");
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      category: "work",
      text: "Make a short note",
      date: "Sat, 30 Nov",
      completed: false,
    },
    {
      id: 2,
      category: "study",
      text: "Complete JS course 🎓",
      date: "Sat, 30 Nov",
      completed: false,
    },
    {
      id: 3,
      category: "work",
      text: "Make a short note 🍎",
      date: "Sat, 30 Nov",
      completed: false,
    },
  ]);
  const [events, setEvents] = useState([
    {
      id: 1,
      category: "study",
      text: "Study HMI Lecture 📚",
      date: "Today",
      completed: false,
    },
    {
      id: 2,
      category: "work",
      text: "Team Meeting 🎯",
      date: "Friday",
      completed: false,
    },
    {
      id: 3,
      category: "home",
      text: "Grocery Shopping 🛒",
      date: "Saturday",
      completed: false,
    },
  ]);

  const taskProgress = Math.round(
    (tasks.filter((task) => task.completed).length / tasks.length) * 100
  );
  const eventProgress = Math.round(
    (events.filter((event) => event.completed).length / events.length) * 100
  );

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleEventCompletion = (id) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, completed: !event.completed } : event
      )
    );
  };

  const filteredTasks = tasks.filter(
    (task) => filter === "all" || task.category === filter
  );
  const filteredEvents = events.filter(
    (event) => filter === "all" || event.category === filter
  );

  return (
    <div className="flex flex-col items-center">
      <div className="bg-ltb dark:bg-dtb relative top-20 flex justify-start max-sm:justify-start max-sm:relative max-sm:top-14  gap-20 items-center w-dvw h-auto max-[1280px]:flex-col">
        {/* <div className="flex items-center justify-around w-[600px] h-12 bg-ltf dark:bg-dtf rounded-full">
          {["all", "work", "home", "study"].map((category) => (
            <button
              key={category}
              className={
                filter === category
                  ? "bg-primary2 h-3/4 px-7 rounded-full text-white font-semibold"
                  : "text-black font-semibold"
              }
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div> */}
        <div className="flex justify-evenly max-lg:gap-14 w-full items-center max-[1024px]:flex-col">
          <div className="flex flex-col gap-20 h-full max-lg:gap-5">
            <div className="flex flex-col max-lg:flex-row items-center justify-evenly bg-gradient-to-r from-P1 to-P2 shadow-lg dark:shadow-lg text-white font-semibold text-xl w-[600px] h-[300px] max-xl:w-[500px] max-sm:w-[300px] max-lg:h-[150px] max-sm:h-[100px] rounded-3xl">
              <div className="w-[150px] h-[150px] max-lg:w-[75px] max-lg:h-[75px] max-sm:w-[60px] max-sm:h-[60px] rounded-full bg-transparent border-4 border-white flex items-center justify-center">
                <span>{taskProgress}%</span>
              </div>
              <span className="text-2xl max-lg:text-xl max-sm:text-sm">
                Monthly Task Progress
              </span>
            </div>
            <div className="flex flex-col items-start gap-5 max-sm:gap-3 w-full max-sm:w-[300px] h-auto">
              <h3 className="text-primary2 font-semibold text-2xl max-sm:text-lg">
                Tasks
              </h3>
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex gap-3 items-center justify-evenly text-xl bg-glass_light dark:bg-glass_dark py-2 px-8 rounded-lg"
                >
                  <input
                    className="h-4 w-4 outline-2 outline-primary2"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />{" "}
                  <span className="font-semibold text-xl max-sm:text-xs text-black dark:text-white">
                    {task.text}
                  </span>
                  <span className="text-black max-sm:text-xs dark:text-white">
                    {task.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-20 h-full max-lg:gap-5">
            <div className="flex flex-col max-lg:flex-row items-center justify-evenly bg-gradient-to-r from-O1 to-O2 shadow-lg text-black font-semibold text-xl w-[600px] h-[300px] max-lg:h-[150px] max-[1280px]:w-[500px] max-sm:w-[300px] max-sm:h-[100px] rounded-3xl">
              <div className="w-[150px] h-[150px] max-lg:w-[75px] max-lg:h-[75px] max-sm:w-[60px] max-sm:h-[60px] rounded-full bg-transparent border-4 border-black flex items-center justify-center">
                <span>{eventProgress}%</span>
              </div>
              <span className="text-2xl max-lg:text-xl max-sm:text-sm">
                Monthly Event Progress
              </span>
            </div>
            <div className="flex flex-col items-start gap-5 max-sm:gap-3 w-full max-sm:w-[300px] h-auto">
              <h3 className="text-primary1 font-semibold text-2xl ">Events</h3>
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex gap-3 items-center justify-evenly text-xl bg-glass_light dark:bg-glass_dark py-2 px-8 rounded-lg"
                >
                  <input
                    className="h-4 w-4 outline-2 outline-primary2"
                    type="checkbox"
                    checked={event.completed}
                    onChange={() => toggleEventCompletion(event.id)}
                  />{" "}
                  <span className="font-semibold text-xl max-sm:text-xs text-black dark:text-white">
                    {event.text}
                  </span>
                  <span className="text-black max-sm:text-xs dark:text-white">
                    {event.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
