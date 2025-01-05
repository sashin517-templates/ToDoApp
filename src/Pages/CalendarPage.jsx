import React, { useState } from "react";

function CalendarPage() {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Create Short Note for HMI",
      time: "09:00 - 09:30",
      date: "2024-11-30",
      completed: true,
    },
    {
      id: 2,
      text: "Complete JS course 🎓",
      time: "TBD",
      date: "2024-11-30",
      completed: false,
    },
    {
      id: 3,
      text: "Complete the Module Assignment",
      time: "TBD",
      date: "2024-12-03",
      completed: false,
    },
    {
      id: 4,
      text: "Study Flutter",
      time: "12:00 - 15:30",
      date: "2024-12-05",
      completed: false,
    },
    {
      id: 5,
      text: "Make a short note for CS",
      time: "17:00 - 18:00",
      date: "2024-12-06",
      completed: false,
    },
    {
      id: 6,
      text: "Make a short note for Math",
      time: "09:00 - 11:00",
      date: "2024-11-30",
      completed: false,
    },
    {
      id: 7,
      text: "Google Meeting For Group Work",
      time: "09:00 - 10:00",
      date: "2024-12-20",
      completed: false,
    },
    {
      id: 8,
      text: "Complete the Project 3rd Semester",
      time: "TBD",
      date: "2024-12-30",
      completed: false,
    },
    {
      id: 9,
      text: "4th Year Annual GM",
      time: "09:00 - 12:30",
      date: "2025-01-10",
      completed: false,
    },
    {
      id: 10,
      text: "7th Sem Final Exam",
      time: "TBD",
      date: "2025-01-23",
      completed: false,
    },
  ]);

  const filteredTasks = tasks.filter((task) => {
    const today = new Date();
    const taskDate = new Date(task.date); // Convert date string to Date object

    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    if (filter === "upcoming") return !task.completed && taskDate > today;
    return true;
  });

  return (
    <div className="flex flex-col h-dvh w-full justify-start items-center gap-10">
      <div className="flex flex-col items-center gap-5 pt-20">
        <h1 className="text-black dark:text-white text-3xl font-highlighted">
          Calendar
        </h1>
        <p className="text-black dark:text-white text-lg ">
          See your scheduled events and tasks from your calendar.
        </p>
        <div className="flex items-center justify-around w-[600px] h-12 bg-ltf dark:bg-glass_dark rounded-full">
          {["all", "upcoming", "pending", "completed"].map((category) => (
            <button
              key={category}
              className={
                filter === category
                  ? "bg-primary2 h-3/4 px-7 rounded-full text-white font-semibold"
                  : "text-black dark:text-white font-semibold"
              }
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-5 w-full rounded-3xl px-20">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="gap-3 items-center flex justify-between text-xl bg-ltf2 dark:bg-glass_dark py-4 px-8 rounded-lg"
            >
              <div className="flex flex-col items-center text-black dark:text-white">
                <span className="text-3xl font-highlighted">
                  {new Date(task.date).toLocaleDateString("en-US", {
                    day: "numeric",
                  })}
                </span>
                <span className="text-lg font-highlighted">
                  {new Date(task.date).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-highlighted text-lg  text-black dark:text-white">
                  {task.text}
                </span>
                <span className="font-semibold text-sm text-black dark:text-white">
                  {task.time}
                </span>
              </div>
              <button className="text-black dark:text-white text-lg">
                Edit
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-black dark:text-white ">
            No tasks found.
          </p>
        )}
      </div>
    </div>
  );
}

export default CalendarPage;
