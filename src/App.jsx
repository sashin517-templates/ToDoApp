import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProfilePage from "./Pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />{" "}
        {/* LandingPage will display here */}
        <Route path="/profile" element={<ProfilePage />} />{" "}
        {/* ProfilePage will display here */}
      </Routes>
    </Router>
  );
}

export default App;
