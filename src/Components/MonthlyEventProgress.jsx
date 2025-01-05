import React, { useState } from "react";

function MonthlyEventProgress() {
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

  const eventProgress = Math.round(
    (events.filter((event) => event.completed).length / events.length) * 100
  );
  return (
    <div className="flex flex-col items-center justify-evenly bg-gradient-to-r from-O1 to-O2 shadow-lg text-white font-semibold text-xl w-96 h-64 rounded-xl">
      <div className="w-32 h-32 rounded-full bg-transparent border-4 border-white flex items-center justify-center">
        <span>{eventProgress}%</span>
      </div>
      <span className="text-xl text-white font-highlighted max-lg:text-xl max-sm:text-sm">
        Monthly Event Progress
      </span>
    </div>
  );
}

export default MonthlyEventProgress;
