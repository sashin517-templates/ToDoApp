import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Define routes where the nav bar should not appear
  const hideNavRoutes = ["/SingleTaskView"];
  const shouldHideNav = hideNavRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Render Child Routes */}
      <div className={`flex-grow ${shouldHideNav ? "" : "pb-16"}`}>
        <Outlet />
      </div>

      {/* Mobile Navigation Bar */}
      {!shouldHideNav && (
        <div
          className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-3 flex justify-around items-center md:hidden"
          style={{
            height: "70px",
            borderTop: "1px solid #e0e0e0",
            zIndex: 10,
          }}
        >
          {/* Mobile Navigation Buttons */}
          <button className="flex flex-col items-center" onClick={() => navigate("/")}>
            <span className="text-xl">🏠</span>
            <span className="text-xs md:text-sm">Home</span>
          </button>
          <button className="flex flex-col items-center" onClick={() => navigate("/calendar")}>
            <span className="text-xl">📅</span>
            <span className="text-xs md:text-sm">Calendar</span>
          </button>
          <button className="flex flex-col items-center" onClick={() => navigate("/add-task")}>
            <span className="text-xl">➕</span>
            <span className="text-xs md:text-sm">Add</span>
          </button>
          <button className="flex flex-col items-center" onClick={() => navigate("/profile")}>
            <span className="text-xl">🧑</span>
            <span className="text-xs md:text-sm">Profile</span>
          </button>
          <button className="flex flex-col items-center" onClick={() => navigate("/SingleTaskView")}>
            <span className="text-xl">🎁</span>
            <span className="text-xs md:text-sm">Tasks</span>
          </button>
        </div>
      )}

      {/* Desktop Navigation Bar */}
      <div className="hidden md:flex fixed bottom-0 left-0 w-full bg-white shadow-lg p-3 justify-around items-center" style={{ height: "70px", borderTop: "1px solid #e0e0e0", zIndex: 10 }}>
        {/* Desktop Navigation Buttons */}
        <button className="flex flex-col items-center" onClick={() => navigate("/")}>
          <span className="text-xl">🏠</span>
          <span className="text-xs md:text-sm">Home</span>
        </button>
        <button className="flex flex-col items-center" onClick={() => navigate("/calendar")}>
          <span className="text-xl">📅</span>
          <span className="text-xs md:text-sm">Calendar</span>
        </button>
        <button className="flex flex-col items-center" onClick={() => navigate("/add-task")}>
          <span className="text-xl">➕</span>
          <span className="text-xs md:text-sm">Add</span>
        </button>
        <button className="flex flex-col items-center" onClick={() => navigate("/profile")}>
          <span className="text-xl">🧑</span>
          <span className="text-xs md:text-sm">Profile</span>
        </button>
        <button className="flex flex-col items-center" onClick={() => navigate("/SingleTaskView")}>
          <span className="text-xl">🎁</span>
          <span className="text-xs md:text-sm">Tasks</span>
        </button>
      </div>
    </div>
  );
}

export default MainLayout;
