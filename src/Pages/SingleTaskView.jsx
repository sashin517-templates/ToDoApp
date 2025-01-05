import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SingleTaskView() {
  const navigate = useNavigate();

  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [isRepeatOpen, setIsRepeatOpen] = useState(false);
  const [reminderStartDate, setReminderStartDate] = useState("");
  const [reminderEndDate, setReminderEndDate] = useState("");
  const [reminderStartTime, setReminderStartTime] = useState("");
  const [reminderEndTime, setReminderEndTime] = useState("");
  const [selectedRepeatDays, setSelectedRepeatDays] = useState([]);

  const handleSave = () => {
    alert("Task saved to the calendar!");
  };

  const handleDelete = () => {
    alert("Task deleted!");
  };

  const handleRepeatDayChange = (day) => {
    setSelectedRepeatDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.background,
      }}
    >
      {/* Navbar */}
      <div
        style={{
          backgroundColor: isDarkMode ? "#2D1E5D" : "#4B0082",
          color: theme.textPrimary,
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            cursor: "pointer",
            margin: 0,
            color: "white", // Ensure the title color is always white
          }}
          onClick={() => navigate("/")}
        >
          Task Viewer
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? (
            <span style={{ fontSize: "1.5rem" }}>☀️</span>
          ) : (
            <span style={{ fontSize: "1.5rem" }}>🌙</span>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          padding: "2rem 1rem",
        }}
      >
        <div
          style={{
            maxWidth: "500px",
            width: "100%",
            backgroundColor: theme.card,
            borderRadius: "15px",
            padding: "1.5rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "1rem",
              color: theme.textPrimary,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "1.5rem",
                color: theme.iconColor,
                marginRight: "0.5rem",
              }}
            >
              🛒
            </span>
            Buy a Gift for Friend
          </h2>
          <p
            style={{
              fontSize: "0.875rem",
              color: theme.textSecondary,
              marginBottom: "1rem",
            }}
          >
            Buy the gift for my best friend Deemantha. His 23rd Birthday party
            at their own house. I need to go to the party at 6.00 p.m.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {/* Set Icon Button with dynamic dark purple change in dark mode */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.75rem 1rem",
                borderRadius: "10px",
                backgroundColor: isDarkMode ? theme.darkPurple : theme.buttonBg,
                color: theme.buttonText,
                fontSize: "0.9rem",
                fontWeight: "500",
                transition: "background-color 0.3s",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "1.2rem", marginRight: "0.75rem" }}>
                🎈
              </span>{" "}
              Set Icon
            </button>

            {/* Private Button stays unaffected by dark mode */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.75rem 1rem",
                borderRadius: "10px",
                backgroundColor: "#EDE6FF",
                color: "#0056B3",
                fontSize: "0.9rem",
                fontWeight: "500",
                transition: "background-color 0.3s",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "1.2rem", marginRight: "0.75rem" }}>
                🔒
              </span>{" "}
              Private
            </button>

            {/* Date Button stays unaffected by dark mode */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.75rem 1rem",
                borderRadius: "10px",
                backgroundColor: "#EDE6FF",
                color: "#0056B3",
                fontSize: "0.9rem",
                fontWeight: "500",
                transition: "background-color 0.3s",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "1.2rem", marginRight: "0.75rem" }}>
                📅
              </span>{" "}
              15th Oct 2024
            </button>

            {/* Priority Button stays unaffected by dark mode */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.75rem 1rem",
                borderRadius: "10px",
                backgroundColor: "#EDE6FF",
                color: "#0056B3",
                fontSize: "0.9rem",
                fontWeight: "500",
                transition: "background-color 0.3s",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "1.2rem", marginRight: "0.75rem" }}>
                ⚠️
              </span>{" "}
              High Priority
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1.5rem",
            }}
          >
            {/* Reminder and Repeat Buttons */}
            <button
              onClick={() => setIsReminderOpen(!isReminderOpen)}
              style={{
                flex: "1",
                marginRight: "0.75rem",
                padding: "0.75rem",
                textAlign: "center",
                borderRadius: "30px",
                backgroundColor: "#D4E2FF",
                color: "#0056B3",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}>
                🔔
              </span>{" "}
              Reminder
            </button>
            <button
              onClick={() => setIsRepeatOpen(!isRepeatOpen)}
              style={{
                flex: "1",
                marginLeft: "0.75rem",
                padding: "0.75rem",
                textAlign: "center",
                borderRadius: "30px",
                backgroundColor: "#D4E2FF",
                color: "#0056B3",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}>
                🔁
              </span>{" "}
              Repeat
            </button>
          </div>

          {/* Reminder and Repeat Buttons with Icons */}
        </div>

        {/* Reminder Modal */}
        {isReminderOpen && (
          <div style={{ marginTop: "1rem" }}>
            <input
              type="date"
              value={reminderStartDate}
              onChange={(e) => setReminderStartDate(e.target.value)}
              style={{
                marginBottom: "0.5rem",
                padding: "0.5rem",
                borderRadius: "10px",
                width: "100%",
              }}
            />
            <input
              type="time"
              value={reminderStartTime}
              onChange={(e) => setReminderStartTime(e.target.value)}
              style={{
                marginBottom: "0.5rem",
                padding: "0.5rem",
                borderRadius: "10px",
                width: "100%",
              }}
            />
            <input
              type="date"
              value={reminderEndDate}
              onChange={(e) => setReminderEndDate(e.target.value)}
              style={{
                marginBottom: "0.5rem",
                padding: "0.5rem",
                borderRadius: "10px",
                width: "100%",
              }}
            />
            <input
              type="time"
              value={reminderEndTime}
              onChange={(e) => setReminderEndTime(e.target.value)}
              style={{
                marginBottom: "0.5rem",
                padding: "0.5rem",
                borderRadius: "10px",
                width: "100%",
              }}
            />
          </div>
        )}

        {/* Repeat Modal */}
        {isRepeatOpen && (
          <div style={{ marginTop: "1rem" }}>
            <p>Select Repeat Days:</p>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <button
                  key={day}
                  onClick={() => handleRepeatDayChange(day)}
                  style={{
                    margin: "0.25rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    backgroundColor: selectedRepeatDays.includes(day)
                      ? "#4B0082"
                      : "#D4E2FF",
                    color: selectedRepeatDays.includes(day)
                      ? "#FFFFFF"
                      : "#0056B3",
                    cursor: "pointer",
                  }}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5rem",
          }}
        >
          <button
            onClick={handleDelete}
            style={{
              flex: "1",
              marginRight: "0.75rem",
              padding: "0.75rem",
              textAlign: "center",
              borderRadius: "10px",
              backgroundColor: "#F52E31",
              color: "black", // Change this line to any color you want
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
          <button
            onClick={handleSave}
            style={{
              flex: "1",
              marginLeft: "0.75rem",
              padding: "0.75rem",
              textAlign: "center",
              borderRadius: "10px",
              backgroundColor: "#EDE6FF",
              color: "#0056B3",
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
          >
            Save
          </button>
        </div>
        <div
          style={{
            backgroundColor: "#4B0082",
            borderRadius: "30px",
            position: "fixed",
            bottom: 0,
            width: "100%",
            maxWidth: "400px",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "9px",
            borderTopRightRadius: "9px",
            borderBottomRightRadius: "9px",
            borderBottomLeftRadius: "9px",
            transition: "background-color 0.3s",
            display: "flex", // Use flexbox for alignment
            justifyContent: "space-around", // Add spacing between icons
            alignItems: "center",
            padding: "10px 0", // Add padding to the top and bottom
          }}
        >
          <button
            style={{ background: "none", border: "none", fontSize: "1.3rem" }}
            onClick={() => navigate("/")} // Navigate to Home
          >
            🏠
          </button>
          <button
            style={{ background: "none", border: "none", fontSize: "1.3rem" }}
            onClick={() => navigate("/calendar")} // Navigate to Calendar
          >
            📅
          </button>
          <button
            style={{ background: "none", border: "none", fontSize: "1.3rem" }}
            onClick={() => navigate("/add-task")} // Navigate to Add Task (Example path)
          >
            ➕
          </button>
          <button
            style={{ background: "none", border: "none", fontSize: "1.3rem" }}
            onClick={() => navigate("/profile")} // Navigate to Profile
          >
            🧑
          </button>
          <button
            style={{ background: "none", border: "none", fontSize: "1.3rem" }}
            onClick={() => navigate("/SingleTaskView")} // Navigate to Dashboard
          >
            🎁
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleTaskView;
