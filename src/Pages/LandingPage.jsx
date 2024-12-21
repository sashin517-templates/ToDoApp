import React from "react";
import NaviBar from "../Components/NaviBar";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <NaviBar />
      <h1 className="text-red-500 font-bold">Landing Page</h1>
      <Link to="/profile">
        <button>Go to Profile</button>
      </Link>
    </div>
  );
}

export default LandingPage;
