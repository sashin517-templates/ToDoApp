import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import TitleDescriptionInput from "../Components/TitleDescriptionInput";
import IconSelectionInput from "../Components/IconSelectionInput";
import CategorySelectionButton from "../Components/CategorySelectionButton";
import DateSelectionButton from "../Components/DateSelectionButton";
import PrioritySelectionButton from "../Components/PrioritySelectionButton";
import ReminderSelectionButton from "../Components/ReminderSelectionButton";
import RepeatSelectionButton from "../Components/RepeatSelectionButton";
// import { saveTask } from "../Utilities/Firbase.jsx";

function TaskaddPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("/Icon-icon.svg");
  const [selectedCategory, setSelectedCategory] = useState("Set Category");
  const [categories, setCategories] = useState([
    "Personal",
    "Studying",
    "Work",
    "Birthday",
  ]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [reminderOption, setReminderOption] = useState("None");
  const [repeatOption, setRepeatOption] = useState("Repeat");

  const icons = [
    "/Icon-icon.svg",
    "/Category-icon.svg",
    "/Calendar-icon.svg",
    "/Priority-icon.svg",
    "/Reminder-icon.svg",
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  const priorities = [
    { level: "Low", color: "green" },
    { level: "Medium", color: "yellow" },
    { level: "High", color: "orange" },
    { level: "Critical", color: "red" },
  ];

  const reminderOptions = [
    "None",
    "5 minutes",
    "10 minutes",
    "Before start",
    "At start",
    "After start",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior (e.g., page reload)

    if (!title || !description) {
      alert("Title and description are required!");
      return;
    }

    const taskData = {
      title,
      description,
      icon: selectedIcon,
      category: selectedCategory,
      startDate: startDate ? startDate.toISOString() : null,
      endDate: endDate ? endDate.toISOString() : null,
      priority: selectedPriority,
      reminder: reminderOption,
      repeat: repeatOption,
      createdAt: new Date().toISOString(),
    };

    try {
      await saveTask(taskData);
      alert("Task saved successfully!");

      setTitle("");
      setDescription("");
      setSelectedIcon("/Icon-icon.svg");
      setSelectedCategory("Set Category");
      setStartDate(null);
      setEndDate(null);
      setSelectedPriority(null);
      setReminderOption("None");
      setRepeatOption("Repeat");
    } catch (error) {
      console.error("Error saving task:", error);
      alert("Failed to save task. Please try again.");
    }
  };

  return (
    <div className="bg-ltb flex flex-col justify-center h-dvh w-2/3">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full bg-white p-10"
      >
        <TitleDescriptionInput
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
        <div className="flex gap-5 w-full text-base text-black ">
          <IconSelectionInput
            selectedIcon={selectedIcon}
            setSelectedIcon={setSelectedIcon}
            icons={icons}
          />
          <CategorySelectionButton
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            categories={categories}
            onAddCategory={handleAddCategory}
          />
          <PrioritySelectionButton
            label="Set Priority"
            selectedPriority={selectedPriority}
            onPrioritySelect={setSelectedPriority}
            priorities={priorities}
          />

          <DateSelectionButton
            label="Start Date"
            selectedDate={startDate}
            onDateSelect={setStartDate}
          />
          <DateSelectionButton
            label="End Date"
            selectedDate={endDate}
            onDateSelect={setEndDate}
          />

          <ReminderSelectionButton
            reminderOption={reminderOption}
            onReminderChange={setReminderOption}
            reminderOptions={reminderOptions}
          />
          <RepeatSelectionButton
            repeatOption={repeatOption}
            onRepeatChange={setRepeatOption}
          />
        </div>
        <div className="flex gap-5 justify-center">
          <button type="submit" className="bg-primary2 px-5 py-3 rounded-2xl">
            <div className="text-white font-highlighted text-xl">Save</div>
          </button>
          <a href="/home" className="bg-red px-5 py-3 rounded-2xl">
            <div className="text-white font-highlighted text-xl">Cencel</div>
          </a>
        </div>
      </form>
    </div>
  );
}

export default TaskaddPage;
