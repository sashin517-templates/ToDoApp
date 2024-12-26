import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";
import ProfilePage from "./Pages/profile.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={isDarkMode ? "dark" : ""}>
        <div className={`flex flex-col h-full justify-between items-center ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-purple-600"}`}>
          <button className="flex" onClick={toggleDarkMode}>
            <img className="w-6 h-6 mr-2" src={isDarkMode ? "./assets/icons/sun-icon.png" : "./assets/icons/moon-icon.png"} alt="Toggle Dark Mode" />
            <h1>{isDarkMode ? "Light" : "Dark"} Mode</h1>
          </button>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/profile" element={<ProfilePage isDarkMode={isDarkMode} />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
