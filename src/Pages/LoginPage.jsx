import React from "react";
import LoginCard from "../Components/LoginCard";
import LoginNav from "../Components/LoginNav";
import Footer from "../Components/Footer";

function LandingPage() {
  return (
    <div className="flex flex-col justify-between items-center h-[100dvh] dark:bg-dtb bg-login-bg-light dark:bg-login-bg-dark bg-cover">
      <LoginNav />
      <LoginCard />
      <Footer />
    </div>
  );
}

export default LandingPage;
