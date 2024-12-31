import React from 'react';

const SaveButton = ({ onClick }) => {
  return (
    <button
      type="submit"
      className="flex flex-col self-center mt-12 max-w-full text-base font-medium text-violet-100 whitespace-nowrap w-[100px]"
      onClick={onClick}
    >
      <div className="bg-primary2 flex overflow-hidden flex-col justify-center px-2.5 py-3 w-full bg-violet-700 rounded-3xl max-w-[100px]">
        <div className="flex gap-2.5 items-center">
          <img
            loading="lazy"
            src="Save-icon.svg"
            alt="Save Icon"
            className="ml-1.5 object-contain shrink-0 self-stretch my-auto aspect-square w-[15px]"
          />
          <div className="text-white self-stretch my-auto">Save</div>
        </div>
      </div>
    </button>
  );
};

export default SaveButton;
