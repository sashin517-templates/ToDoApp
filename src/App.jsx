import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleTaskView from "./Pages/SingleTaskView.jsx";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/SingleTaskView" element={<SingleTaskView />} />
      </Routes>
    </Router>
  );
}

export default App;
