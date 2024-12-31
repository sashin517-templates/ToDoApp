import React, { useState } from 'react';
import CloseButton from './CloseButton';

const CategorySelectionButton = ({ selectedCategory, onCategorySelect, categories, onAddCategory }) => {
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [newCategory, setNewCategory] = useState('');

    const handleAddCategory = () => {
        if (newCategory.trim()) {
            onAddCategory(newCategory);
            setNewCategory('');
            setIsCategoryModalOpen(false);
        }
    };

    return (
        <div>
            {/* Category selection button */}
            <div
                className="bg-ltf flex gap-5 items-center pr-1.5 pl-5 mt-4 w-full bg-violet-100 rounded-2xl min-h-[50px] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] cursor-pointer"
                onClick={() => setIsCategoryModalOpen(true)}
            >
                <img
                    loading="lazy"
                    src="/Category-icon.svg"
                    alt="Category Icon"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <div className="self-stretch my-auto">{selectedCategory}</div>
            </div>

            {/* Category selection modal */}
            {isCategoryModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <div className="relative bg-white rounded-lg p-6 shadow-lg max-w-[300px] w-full">
                        <CloseButton onClose={() => setIsCategoryModalOpen(false)} />

                        <h2 className="text-lg font-bold mb-4">Select a Category</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 bg-violet-100 rounded-lg text-center cursor-pointer hover:bg-ltf"
                                    onClick={() => {
                                        onCategorySelect(category);
                                        setIsCategoryModalOpen(false);
                                    }}
                                >
                                    {category}
                                </div>
                            ))}
                        </div>

                        <div className="mt-6">
                            <input
                                type="text"
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                                placeholder="Add New Category"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-violet-500"
                            />

                            <div className="flex items-center justify-center">
                                <button
                                    type="button"
                                    className="border-2 mt-4 px-3 py-2 bg-violet-700 text-black rounded-lg w-auto hover:bg-primary2 hover:text-white"
                                    onClick={handleAddCategory}
                                >
                                    Add Category
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategorySelectionButton;
