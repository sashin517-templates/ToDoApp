import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProfilePage from "./Pages/Profile";

function App() {
  // State to manage dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={isDarkMode ? "dark" : ""}>
        {/* Thin top bar with app name and dark mode switch */}
        <div className="fixed top-0 left-0 w-full bg-gray-800 text-white p-2 flex justify-between items-center z-10">
          <h1 className="text-lg font-bold">App Name</h1>
          <button
            onClick={toggleDarkMode}
            className="bg-purple-600 text-white py-1 px-4 rounded-lg shadow-md"
          >
            Switch to {isDarkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        {/* Main content section below the top bar */}
        <div className="pt-12">
          {" "}
          {/* Reduced padding for a thinner bar */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/profile"
              element={<ProfilePage isDarkMode={isDarkMode} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
