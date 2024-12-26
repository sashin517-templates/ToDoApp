import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";
import ProfilePage from "./Pages/profile.jsx";

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
        <div
          className={`fixed top-0 left-0 w-full p-2 flex justify-between items-center z-10
            ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-purple-600"
            }`}
        >
          <h1 className="text-lg font-bold">
            <img src="Vector.png" alt="App Name" className="w-32 h-auto" />
          </h1>
          <button
            onClick={toggleDarkMode}
            className="bg-transparent text-purple-600 py-1 px-4 rounded-lg shadow-md flex items-center"
          >
            <img
              src={
                isDarkMode
                  ? "./assets/icons/sun-icon.png"
                  : "./assets/icons/moon-icon.png"
              }
              alt="Toggle Dark Mode"
              className="w-6 h-6 mr-2"
            />
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
