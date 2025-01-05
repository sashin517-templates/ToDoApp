import React, { useState } from "react";
import MonthlyTaskProgress from "../Components/MonthlyTaskProgress.jsx";
import DateSection from "../Components/DateSection.jsx";
import TimeSection from "../Components/TimeSection.jsx";
import MonthlyEventProgress from "../Components/MonthlyEventProgress.jsx";
import FavTaskCard from "../Components/FavTaskCard.jsx";
import FavEventCard from "../Components/FavEventCard.jsx";

function LandingPage() {
  return (
    <div className="flex items-center justify-center h-dvh">
      <div className="flex flex-wrap justify-evenly gap-y-5 px-36">
        <MonthlyTaskProgress />
        <MonthlyEventProgress />
        <DateSection />
        <TimeSection />
        <FavTaskCard />
        <FavEventCard />
      </div>
    </div>
  );
}

export default LandingPage;
