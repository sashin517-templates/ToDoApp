import React, { useState } from 'react';

const ReminderSelectionButton = ({ reminderOption, onReminderChange, reminderOptions }) => {
    const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
    const [isSoundEnabled, setIsSoundEnabled] = useState(false);

    const handleReminderClick = () => {
        setIsReminderModalOpen(!isReminderModalOpen);
    };

    const handleOptionSelect = (option) => {
        onReminderChange(option);
        setIsReminderModalOpen(false);
    };

    const toggleSound = () => {
        setIsSoundEnabled(!isSoundEnabled);
    };

    return (

        <div className="flex gap-1.5 items-center self-stretch">
            {/* Reminder Button */}
            <button
                type="button"
                className="bg-ltf flex gap-1.5 items-center self-stretch px-4 py-2 my-auto bg-violet-100 rounded-2xl min-h-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
                onClick={handleReminderClick}
            >
                <img
                    loading="lazy"
                    src="/Reminder-icon.svg"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <div className="self-stretch my-auto">
                    {reminderOption === "None" ? "Reminder" : `${reminderOption}${isSoundEnabled ? " with Sound" : ""}`}
                </div>
            </button>

            {/* Reminder Modal */}
            {isReminderModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <div className="relative bg-white rounded-lg p-6 shadow-lg max-w-[300px] w-full">
                        <button
                            className="absolute top-2 right-4 text-3xl font-bold bg-red-500 text-red pt-2 px-1 rounded-full hover:bg-red-700"
                            onClick={() => setIsReminderModalOpen(false)}
                        >
                            &times;
                        </button>
                        <h2 className="text-lg font-bold mb-4">Set Reminder</h2>
                        <div className="flex flex-col gap-4">
                            {reminderOptions.map((option, index) => (
                                <div
                                    key={index}
                                    className={`px-4 py-2 bg-violet-100 rounded-lg text-center cursor-pointer hover:bg-ltf ${reminderOption === option ? "bg-ltf font-bold" : ""}`}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <input
                                type="checkbox"
                                id="soundOption"
                                checked={isSoundEnabled}
                                onChange={toggleSound}
                            />
                            <label htmlFor="soundOption" className="text-sm">
                                Play Sound
                            </label>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReminderSelectionButton;
