import React, { useState } from "react";

function MonthlyTaskProgress() {
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
  const taskProgress = Math.round(
    (tasks.filter((task) => task.completed).length / tasks.length) * 100
  );
  return (
    <div className="flex flex-col items-center justify-evenly bg-gradient-to-r from-P1 to-P2 shadow-lg dark:shadow-lg text-white font-semibold text-xl w-96 h-64 rounded-xl">
      <div className="w-32 h-32 rounded-full bg-transparent border-4 border-white flex items-center justify-center">
        <span>{taskProgress}%</span>
      </div>
      <span className="text-xl font-montserrat font-semibold max-lg:text-xl max-sm:text-sm">
        Monthly Task Progress
      </span>
    </div>
  );
}

export default MonthlyTaskProgress;
