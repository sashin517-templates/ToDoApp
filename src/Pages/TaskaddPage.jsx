import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import TitleDescriptionInput from '../Components/TitleDescriptionInput';
import IconSelectionInput from '../Components/IconSelectionInput';
import CategorySelectionButton from '../Components/CategorySelectionButton';
import DateSelectionButton from '../Components/DateSelectionButton';
import PrioritySelectionButton from '../Components/PrioritySelectionButton';
import ReminderSelectionButton from '../Components/ReminderSelectionButton';
import RepeatSelectionButton from '../Components/RepeatSelectionButton';
import FooterNavBar from '../Components/FooterNavBar';
import { saveTask } from '../Utils/firestore';

function TaskaddPage() {
  // State variables for task title and description
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("/Icon-icon.svg"); // Default icon
  const [selectedCategory, setSelectedCategory] = useState("Set Category"); // Default category
  const [categories, setCategories] = useState(["Personal", "Studying", "Work", "Birthday"]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [reminderOption, setReminderOption] = useState("None");
  const [repeatOption, setRepeatOption] = useState('Repeat');

  // List of available icons for selection
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

  const reminderOptions = ["None", "5 minutes", "10 minutes", "Before start", "At start", "After start"];

  // Handle form submission
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

      // Clear the form after submission
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
    <div className="bg-[#f8f7fd] flex justify-center items-center">
      <div className="justify-center w-[90%] max-w-[400px] bg-white rounded-[16px] p-5 shadow-lg">

        <form
          onSubmit={handleSubmit}
          className="flex flex-col px-2 pt-5 mx-auto w-full bg-white max-w-[480px]"
        >
          {/* Header section with page title */}
          <div className="text-center items-center max-w-full text-xl font-bold text-black w-[250px] pl-20">
            <div className="self-stretch">Add Task</div>
          </div>

          {/* Input fields for Task description */}
          <div className="flex flex-col self-center mt-12 w-full text-base text-black max-w-[382px]">
            <div className="flex flex-col w-full">

              <TitleDescriptionInput
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
              />

            </div>

            {/* Additional task settings */}
            <div className="flex flex-col justify-center mt-4 w-full font-medium">

              {/* Icon selection button */}
              <IconSelectionInput
                selectedIcon={selectedIcon}
                setSelectedIcon={setSelectedIcon}
                icons={icons}
              />

              {/* Category selection button */}
              <CategorySelectionButton
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
                categories={categories}
                onAddCategory={handleAddCategory}
              />

              {/* Start Date Selection */}
              <DateSelectionButton
                label="Start Date"
                selectedDate={startDate}
                onDateSelect={setStartDate}
              />

              {/* End Date Selection */}
              <DateSelectionButton
                label="End Date"
                selectedDate={endDate}
                onDateSelect={setEndDate}
              />

              {/* Priority Selection */}
              <PrioritySelectionButton
                label="Set Priority"
                selectedPriority={selectedPriority}
                onPrioritySelect={setSelectedPriority}
                priorities={priorities}
              />

              {/* Reminder and repeat buttons */}
              <div className="flex gap-5 items-center self-start mt-4 whitespace-nowrap">
                {/* Reminder Selection */}
                <ReminderSelectionButton
                  reminderOption={reminderOption}
                  onReminderChange={setReminderOption}
                  reminderOptions={reminderOptions}
                />

                <div>
                  {/* Repeat Selection */}
                  <RepeatSelectionButton
                    repeatOption={repeatOption}
                    onRepeatChange={setRepeatOption}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Save button */}
          <button
            type="submit"
            className="flex flex-col self-center mt-12 max-w-full text-base font-medium text-violet-100 whitespace-nowrap w-[100px]">
            <div className="bg-primary2 flex overflow-hidden flex-col justify-center px-2.5 py-3 w-full bg-violet-700 rounded-3xl max-w-[100px]">
              <div className="flex gap-2.5 items-center">
                <img
                  loading="lazy"
                  src="Save-icon.svg"
                  alt=""
                  className="ml-1.5 object-contain shrink-0 self-stretch my-auto aspect-square w-[15px]"
                />
                <div className="text-white self-stretch my-auto">Save</div>
              </div>
            </div>
          </button>

          {/* Footer navigation bar */}
          <FooterNavBar />
        </form>
      </div >
    </div >
  );
}

export default TaskaddPage;
