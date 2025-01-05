import React from "react";

function TitleDescriptionInput({
  title,
  setTitle,
  description,
  setDescription,
}) {
  return (
    <div className="flex flex-col self-center w-full text-base">
      <div className="flex flex-col gap-5 w-full">
        <div className="bg-ltf px-4 py-4 w-full rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add Title"
            className="w-full bg-transparent outline-none"
            required
          />
        </div>
        <div className="bg-ltf px-4 py-4 w-full rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add Description"
            className="w-full bg-transparent outline-none resize-none"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default TitleDescriptionInput;
