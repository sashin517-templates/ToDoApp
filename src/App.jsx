import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./Components/ThemeContext.jsx";

import LoginPage from "./Pages/LoginPage.jsx";
import Profile from "./Pages/Profile.jsx";
import NaviBar from "./Components/NaviBar.jsx";
import Footer from "./Components/Footer.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute("class", theme);
  }, [theme]);

  return (
    <Router>
      <NaviBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
