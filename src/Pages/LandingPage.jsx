import React, { useState } from "react";

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
    <>
      <div className="bg-ltb dark:bg-dtb flex flex-col justify-center gap-20 items-center w-dvw h-[90dvh]">
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
        <div className="flex justify-evenly w-full items-center">
          <div className="flex flex-col gap-20 h-full">
            <div className="flex flex-col items-center justify-evenly bg-primary2 text-white font-semibold text-xl w-96 h-60 rounded-lg">
              <span>Monthly Task Progress</span>
              <div className="w-28 h-28 rounded-full bg-transparent border-4 border-white flex items-center justify-center">
                <span>{taskProgress}%</span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 w-full h-auto">
              <h3 className="text-primary2 font-semibold text-2xl">Tasks</h3>
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex gap-3 items-center justify-evenly text-xl bg-ltf py-2 px-8 rounded-lg"
                >
                  <input
                    className="h-4 w-4 outline-2 outline-primary2"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />{" "}
                  <span className="font-semibold text-xl">{task.text}</span>
                  <span>{task.date}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-20 h-full">
            <div className="flex flex-col items-center justify-evenly bg-primary1 text-black font-semibold text-xl w-96 h-60 rounded-lg">
              <span>Monthly Event Progress</span>
              <div className="w-28 h-28 rounded-full bg-transparent border-4 border-black flex items-center justify-center">
                <span>{eventProgress}%</span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 w-full h-auto">
              <h3 className="text-primary1 font-semibold text-2xl">Events</h3>
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex gap-3 items-center justify-evenly text-xl bg-ltf py-2 px-8 rounded-lg"
                >
                  <input
                    className="h-4 w-4 outline-2 outline-primary2"
                    type="checkbox"
                    checked={event.completed}
                    onChange={() => toggleEventCompletion(event.id)}
                  />{" "}
                  <span className="font-semibold text-xl">{event.text}</span>
                  <span>{event.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
