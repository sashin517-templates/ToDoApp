import React from "react";

function TaskAddButton() {
  return (
    <div className=" fixed right-10 top-[90dvh] drop-shadow-xl">
      <a href="/task-add">
        <img className="h-16" src="/Add1.svg" alt="ADD Button" />
      </a>
    </div>
  );
}

export default TaskAddButton;
