import React, { useState } from "react";
import TaskAddButton from "../Components/TaskAddButton";

function TasksViewPage() {
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
      text: "Complete the Module Assigment",
      date: "Sat, 3 Dec",
      completed: false,
    },
    {
      id: 4,
      category: "work",
      text: "Study the Flutter",
      date: "Sat, 5 Dec",
      completed: false,
    },
    {
      id: 5,
      category: "work",
      text: "Make a short note for CS",
      date: "Sat, 6 Dec",
      completed: false,
    },
    {
      id: 6,
      category: "work",
      text: "Make a short note for Math",
      date: "Sat, 30 Nov",
      completed: false,
    },
    {
      id: 7,
      category: "work",
      text: "Google Meeting For Group Work",
      date: "Sat, 20 Dec",
      completed: false,
    },
    {
      id: 8,
      category: "work",
      text: "Complete the Project 3rd Semester",
      date: "Sat, 30 Dec",
      completed: false,
    },
    {
      id: 9,
      category: "work",
      text: "4th Year Anual GM",
      date: "Sat, 10 Jan",
      completed: false,
    },
    {
      id: 10,
      category: "work",
      text: "7th Sem Final Exam",
      date: "Sat, 23 Jan",
      completed: false,
    },
  ]);
  const [events, setEvents] = useState([
    {
      id: 1,
      category: "study",
      text: "Study HMI Lecture 📚",
      date: "Today, 20 Nov",
      completed: false,
    },
    {
      id: 2,
      category: "work",
      text: "Team Meeting",
      date: "Fri, 21 Nov",
      completed: false,
    },
    {
      id: 3,
      category: "home",
      text: "Grocery Shopping",
      date: "Sat, 22 Nov",
      completed: false,
    },
    {
      id: 4,
      category: "study",
      text: "Anual Home Party",
      date: "Sun, 23 Nov",
      completed: false,
    },
    {
      id: 5,
      category: "work",
      text: "Next Project Meeting",
      date: "Tue, 25 Nov",
      completed: false,
    },
    {
      id: 6,
      category: "home",
      text: "Grocery Shopping 🛒",
      date: "Sat, 10 Dec",
      completed: false,
    },
    {
      id: 7,
      category: "study",
      text: "Personal Event",
      date: "Sun, 15 Dec",
      completed: false,
    },
    {
      id: 8,
      category: "work",
      text: "Next Meetup Function",
      date: "Sun, 20 Dec",
      completed: false,
    },
    {
      id: 9,
      category: "home",
      text: "Function Setup",
      date: "Mon, 23 Dec",
      completed: false,
    },
    {
      id: 10,
      category: "home",
      text: "Grocery Shopping 🛒",
      date: "Wen, 25 Dec",
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
    <div className="flex flex-col items-center w-dvw">
      <div className="bg-ltb dark:bg-dtb relative top-20 flex justify-start max-sm:justify-start max-sm:relative max-sm:top-14  gap-20 items-center w-dvw h-auto max-[1280px]:flex-col">
        <div className="flex relative flex-col justify-evenly gap-10 w-dvw h-full items-center ">
          <div className="flex justify-evenly w-dvw py-10 bg-ltf2 dark:bg-glass_dark">
            <div className="flex max-lg:flex-row items-center justify-evenly bg-gradient-to-r from-P1 to-P2 shadow-lg dark:shadow-lg text-white font-semibold text-xl w-96 h-32 rounded-3xl">
              <div className="w-20 h-20 max-lg:w-[75px] max-lg:h-[75px] max-sm:w-[60px] max-sm:h-[60px] rounded-full bg-transparent border-4 border-white flex items-center justify-center">
                <span>{taskProgress}%</span>
              </div>
              <span className="text-xl font-highlighted max-lg:text-xl max-sm:text-sm">
                Monthly Task Progress
              </span>
            </div>
            <div className="flex max-lg:flex-row items-center justify-evenly bg-gradient-to-r from-O1 to-O2 shadow-lg text-white font-semibold text-xl w-96 h-32 rounded-3xl">
              <div className="w-20 h-20 max-lg:w-[75px] max-lg:h-[75px] max-sm:w-[60px] max-sm:h-[60px] rounded-full bg-transparent border-4 border-white flex items-center justify-center">
                <span>{eventProgress}%</span>
              </div>
              <span className="text-xl text-white font-highlighted max-lg:text-xl max-sm:text-sm">
                Monthly Event Progress
              </span>
            </div>
            <div className="flex max-lg:flex-row items-center justify-evenly bg-gradient-to-r from-P3 to-P4 shadow-lg text-black font-semibold text-xl w-96 h-32 rounded-3xl">
              <img className="w-14" src="/Fav.svg" alt="" />
              <span className="text-3xl text-white font-highlighted max-lg:text-xl max-sm:text-sm">
                Favorite Tasks
              </span>
            </div>
          </div>
          <div className="flex h-full w-full gap-10 px-20">
            <div className="flex flex-col justify-center gap-5 w-[50dvw] rounded-3xl">
              <h3 className="text-primary2 font-highlighted text-2xl">Tasks</h3>
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between text-xl bg-ltf2 dark:bg-glass_dark py-2 px-8 rounded-lg"
                >
                  <input
                    className="h-4 w-4 outline-2 outline-primary2"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />{" "}
                  <span className="font-semibold text-xl text-black dark:text-white">
                    {task.text}
                  </span>
                  <span className=" text-black max-sm:text-xs dark:text-white">
                    {task.date}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center gap-5 w-[50dvw] rounded-3xl">
              <h3 className="text-primary1 font-highlighted text-2xl max-sm:text-lg">
                Events
              </h3>
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between text-xl bg-ltf2 dark:bg-glass_dark py-2 px-8 rounded-lg"
                >
                  <input
                    className="h-4 w-4 outline-2 outline-primary2"
                    type="checkbox"
                    checked={event.completed}
                    onChange={() => toggleEventCompletion(event.id)}
                  />{" "}
                  <span className="font-semibold text-xl text-black dark:text-white">
                    {event.text}
                  </span>
                  <span className=" text-black max-sm:text-xs dark:text-white">
                    {event.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <TaskAddButton />
        </div>
      </div>
    </div>
  );
}

export default TasksViewPage;
