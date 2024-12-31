import React from 'react';

const FooterNavBar = () => {
  return (
    <nav className="bg-primary2 flex overflow-hidden flex-col justify-center px-12 py-2.5 mt-8 w-full bg-violet-700 shadow-sm rounded-[30px]">
      <div className="flex gap-10 justify-between items-center w-full">
        {/* Navigation buttons */}
        <div className="flex gap-10 items-center self-stretch my-auto">
          <button type="button">
            <img
              loading="lazy"
              src="/Home-icon.svg"
              alt="Home"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </button>
          <button type="button">
            <img
              loading="lazy"
              src="/Calendar-Naviicon.svg"
              alt="Calendar"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </button>
        </div>
        <button type="button">
          <img
            loading="lazy"
            src="/Addtask-icon.svg"
            alt="Add Task"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          />
        </button>
        <div className="flex gap-10 items-center self-stretch my-auto">
          <button type="button">
            <img
              loading="lazy"
              src="/Event-icon.svg"
              alt="Event"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </button>
          <button type="button">
            <img
              loading="lazy"
              src="/Profile-icon.svg"
              alt="Profile"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default FooterNavBar;
