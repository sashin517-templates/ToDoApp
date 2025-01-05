import React, { useState } from "react";

const PrioritySelectionButton = ({
  label,
  selectedPriority,
  onPrioritySelect,
  priorities,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePriorityClick = (priority) => {
    onPrioritySelect(priority);
    setIsPopupOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="bg-ltf flex gap-5 items-center px-5 py-5 w-full bg-violet-100 rounded-2xl min-h-[50px] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] cursor-pointer"
        onClick={() => setIsPopupOpen(!isPopupOpen)}
      >
        <img
          src="/Priority-icon.svg"
          alt="Priority Icon"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="self-stretch my-auto">
          {selectedPriority ? (
            <span className="flex items-center gap-2">
              <span
                className={`inline-block w-3 h-3 rounded-full bg-${selectedPriority.color}`}
              ></span>
              {selectedPriority.level}
            </span>
          ) : (
            label
          )}
        </div>
      </button>

      {isPopupOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg z-20 w-full">
          <div className="flex flex-col p-4 gap-2">
            {priorities.map((priority, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-gray-100`}
                onClick={() => handlePriorityClick(priority)}
              >
                <span
                  className={`inline-block w-3 h-3 rounded-full bg-${priority.color}`}
                ></span>
                <span>{priority.level}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PrioritySelectionButton;
