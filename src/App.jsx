import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./Components/ThemeContext.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import Profile from "./Pages/ProfilePage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import FloatingNav from "./Components/FloatingNav.jsx";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute("class", theme);
  }, [theme]);

  return (
    <div className="flex flex-col items-center bg-ltb dark:bg-dtb h-dvh">
      <Router>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Main App Routes with FloatingNav */}
          <Route
            path="/home"
            element={
              <>
                <FloatingNav />
                <LandingPage />
              </>
            }
          />
          <Route
            path="/calendar"
            element={
              <>
                <FloatingNav />
                <LandingPage />
              </>
            }
          />
          <Route
            path="tasks"
            element={
              <>
                <FloatingNav /> <LandingPage />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <FloatingNav />
                <Profile />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
