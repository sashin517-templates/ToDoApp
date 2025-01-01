import React from "react";
import LoginCard from "../Components/LoginCard";

function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-[100dvh] dark:bg-dtb bg-login-bg-light dark:bg-login-bg-dark bg-cover">
      <LoginCard />
    </div>
  );
}

export default LandingPage;
