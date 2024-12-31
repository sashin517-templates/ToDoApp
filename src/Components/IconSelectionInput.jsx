import React, { useState } from 'react';
import CloseButton from './CloseButton';

function IconSelectionInput({ selectedIcon, setSelectedIcon, icons }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Icon selection button */}
            <div
                className="bg-ltf flex gap-5 items-center pr-1.5 pl-5 w-full bg-violet-100 rounded-2xl min-h-[50px] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] cursor-pointer"
                onClick={() => setIsModalOpen(true)}
            >
                <img
                    loading="lazy"
                    src={selectedIcon}
                    alt="Selected Icon"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <div className="self-stretch my-auto">Set Icon</div>
            </div>

            {/* Icon selection modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <div className="relative bg-white rounded-lg p-6 shadow-lg max-w-[300px] w-full">
                        <CloseButton onClose={() => setIsModalOpen(false)} />
                        <h2 className="text-lg font-bold mb-10">Select an Icon</h2>
                        <div className="grid grid-cols-3 gap-4">
                            {icons.map((icon, index) => (
                                <img
                                    key={index}
                                    src={icon}
                                    alt={`Icon ${index}`}
                                    className="w-10 h-10 cursor-pointer hover:opacity-80"
                                    onClick={() => {
                                        setSelectedIcon(icon);
                                        setIsModalOpen(false);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default IconSelectionInput;
