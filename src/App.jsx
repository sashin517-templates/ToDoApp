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
        {/* Add a button for switching dark mode */}
        <div className="fixed top-5 right-5 z-10">
          <button
            onClick={toggleDarkMode}
            className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md"
          >
            Switch to {isDarkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/profile"
            element={<ProfilePage isDarkMode={isDarkMode} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
