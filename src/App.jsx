import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./Components/ThemeContext.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import Profile from "./Pages/Profile.jsx";
import NaviBar from "./Components/NaviBar.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute("class", theme);
  }, [theme]);

  return (
    <Router>
      <NaviBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
