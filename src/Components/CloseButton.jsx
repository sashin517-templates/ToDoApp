import React from "react";

const CloseButton = ({ onClose }) => {
  return (
    <button
      className="absolute top-2 right-4 text-3xl font-bold bg-red-500 text-red pt-2 px-1 rounded-full hover:bg-red-700"
      onClick={onClose}
    >
      &times;
    </button>
  );
};

export default CloseButton;
