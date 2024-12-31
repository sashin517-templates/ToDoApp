import React, { useState } from 'react';

const RepeatSelectionButton = ({ repeatOption, onRepeatChange }) => {
    const [isRepeatModalOpen, setIsRepeatModalOpen] = useState(false);

    const handleRepeatOptionSelect = (option) => {
        onRepeatChange(option);
        setIsRepeatModalOpen(false); // Close the modal when an option is selected
    };

    return (
        <div>
            {/* Repeat button */}
            <div className="flex gap-1.5 items-center self-stretch">
                <button
                    type="button"
                    className="bg-ltf flex gap-1.5 items-center self-stretch px-4 py-2 my-auto bg-violet-100 rounded-2xl min-h-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
                    onClick={() => setIsRepeatModalOpen(true)} // Open the modal when clicked
                >
                    <img
                        loading="lazy"
                        src="/Repeat-icon.svg"
                        alt="Repeat Icon"
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto">{repeatOption}</div>
                </button>
            </div>

            {/* Repeat Modal */}
            {isRepeatModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <div className="relative bg-white rounded-lg p-6 shadow-lg max-w-[300px] w-full">
                        <button
                            className="absolute top-2 right-4 text-3xl font-bold bg-red-500 text-red pt-2 px-1 rounded-full hover:bg-red-700"
                            onClick={() => setIsRepeatModalOpen(false)} // Close modal when clicked
                        >
                            &times;
                        </button>
                        <h2 className="text-lg font-bold mb-4">Set Repeat</h2>
                        <div className="flex flex-col gap-4">
                            {/* Repeat options */}
                            {['Daily', 'Weekly', 'Monthly'].map((option) => (
                                <div
                                    key={option}
                                    className={`px-4 py-2 bg-violet-100 rounded-lg text-center cursor-pointer hover:bg-ltf ${repeatOption === option ? "bg-ltf font-bold" : ""}`}
                                    onClick={() => handleRepeatOptionSelect(option)} // Select repeat option
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RepeatSelectionButton;
