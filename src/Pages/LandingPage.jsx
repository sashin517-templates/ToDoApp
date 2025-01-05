import React, { useState } from "react";
import DateSection from '../Components/DateSection';
import TimeSection from '../Components/TimeSection';

function LandingPage() {
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

  return (
    <div className="flex items-center justify-center h-dvh">
      <div className="flex flex-wrap justify-evenly gap-y-5 mt-20 px-36">
        <div className="flex items-center justify-evenly bg-gradient-to-r from-P1 to-P2 shadow-lg dark:shadow-lg text-white font-semibold text-xl w-96 h-64 rounded-xl">
          <div className="w-20 h-20 rounded-full bg-transparent border-4 border-white flex items-center justify-center">
            <span>{taskProgress}%</span>
          </div>
          <span className="text-xl font-highlighted max-lg:text-xl max-sm:text-sm">
            Monthly Task Progress
          </span>
        </div>
        <div className="flex  items-center justify-evenly bg-gradient-to-r from-O1 to-O2 shadow-lg text-white font-semibold text-xl w-96 h-64 rounded-xl">
          <div className="w-20 h-20 rounded-full bg-transparent border-4 border-white flex items-center justify-center">
            <span>{eventProgress}%</span>
          </div>
          <span className="text-xl text-white font-highlighted max-lg:text-xl max-sm:text-sm">
            Monthly Event Progress
          </span>
        </div>
        <div className="flex items-center justify-evenly bg-gradient-to-r from-P3 to-P4 shadow-lg text-black font-semibold text-xl w-96 h-32 max-sm:h-[100px] rounded-xl">
          <img className="w-14" src="/Fav.svg" alt="" />
          <span className="text-rounded-xl text-white font-highlighted max-lg:text-xl max-sm:text-sm">
            Favorite Tasks
          </span>
        </div>
        <DateSection/>
        <TimeSection/>
        <div className="flex items-center justify-evenly bg-gradient-to-r from-P3 to-P4 shadow-lg text-black font-semibold text-xl w-96 h-32 max-sm:h-[100px] rounded-xl">
          <img className="w-14" src="/Fav.svg" alt="" />
          <span className="text-rounded-xl text-white font-highlighted max-lg:text-xl max-sm:text-sm">
            Favorite Tasks
          </span>
        </div>
        <div className="flex items-center justify-evenly bg-gradient-to-r from-P3 to-P4 shadow-lg text-black font-semibold text-xl w-96 h-32 max-sm:h-[100px] rounded-xl">
          <img className="w-14" src="/Fav.svg" alt="" />
          <span className="text-rounded-xl text-white font-highlighted max-lg:text-xl max-sm:text-sm">
            Favorite Tasks
          </span>
        </div>
        <div className="flex items-center justify-evenly bg-gradient-to-r from-P3 to-P4 shadow-lg text-black font-semibold text-xl w-96 h-32 max-sm:h-[100px] rounded-xl">
          <img className="w-14" src="/Fav.svg" alt="" />
          <span className="text-rounded-xl text-white font-highlighted max-lg:text-xl max-sm:text-sm">
            Favorite Tasks
          </span>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
