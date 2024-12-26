import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Pages/MainLayout"; // Adjust path as necessary
import Home from "./Pages/LandingPage";
import Calendar from "./Pages/Calendar";
import Profile from "./Pages/Profile";
import AddTask from "./Pages/AddTask";
import SingleTaskView from "./Pages/SingleTaskView";

function App() {
  return (
    <Router>
      <Routes>
        {/* MainLayout is used for all routes except the one where we hide the navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* SingleTaskView does not use MainLayout, so navbar will be hidden */}
        <Route path="/SingleTaskView" element={<SingleTaskView />} />
      </Routes>
    </Router>
  );
}

export default App;
