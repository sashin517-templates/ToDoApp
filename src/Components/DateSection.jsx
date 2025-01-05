import React, { useState, useEffect } from "react";
import DateIcon from "/Calendar.svg"; // Renamed the import to avoid conflict

function DateSection() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    };

    updateDate(); // Set the initial date
  }, []); // Dependency array ensures this runs once when the component mounts

  return (
    <div
      id="date"
      className="flex flex-col justify-evenly items-center font-montserrat text-2xl font-medium w-96 h-64 rounded-xl dark:font-semibold bg-custom-gradient-2 text-white"
    >
      <img
        src={DateIcon}
        alt="date-icon"
        className="fill-transparent text-white h-24"
      />
      <div>{date}</div>
    </div>
  );
}

export default DateSection;
