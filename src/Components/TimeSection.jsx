import React, { useState, useEffect } from "react";
import Clock from "/time-svgrepo-com.svg";

function TimeSection() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div
      id="date-time"
      className="flex flex-col justify-evenly items-center font-montserrat text-2xl font-medium w-96 h-64 rounded-xl dark:font-semibold bg-custom-gradient text-white"
    >
      <img src={Clock} alt="cloud-icon" className="fill-dtb text-white h-24" />
      <div>{time}</div>
    </div>
  );
}

export default TimeSection;
