import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelectionButton = ({ label, selectedDate, onDateSelect }) => {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    return (
        <div className="relative pt-4">
            <button
                type="button"
                className="bg-ltf flex gap-5 px-5 py-3.5 pt-4 w-full bg-violet-100 rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.05)] cursor-pointer"
                onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
            >
                <img
                    loading="lazy"
                    src="/Calendar-icon.svg"
                    alt={`${label} Icon`}
                    className="object-contain shrink-0 w-6 aspect-square"
                />
                <div className="text-left flex-auto my-auto w-[299px]">
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
