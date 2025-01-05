import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelectionButton = ({ label, selectedDate, onDateSelect }) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="bg-ltf flex gap-5 px-5 py-5 w-full rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.05)] cursor-pointer"
        onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
      >
        <img
          loading="lazy"
          src="/Calendar-icon.svg"
          alt={`${label} Icon`}
          className="object-contain shrink-0 aspect-square"
        />
        <div className="text-left flex-auto">
          {selectedDate ? selectedDate.toLocaleDateString() : label}
        </div>
      </button>

      {isDatePickerOpen && (
        <div className="absolute top-full mt-2 z-20">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              onDateSelect(date);
              setIsDatePickerOpen(false);
            }}
            inline
            calendarClassName="hidden-datepicker"
          />
        </div>
      )}
    </div>
  );
};

export default DateSelectionButton;
