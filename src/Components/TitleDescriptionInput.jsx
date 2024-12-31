import React from 'react';

function TitleDescriptionInput({ title, setTitle, description, setDescription }) {
  return (
    <div className="flex flex-col self-center mt-12 w-full text-base text-black max-w-[382px]">
      <div className="flex flex-col w-full">

        {/* Title input */}
        <div className="bg-ltf px-3.5 py-4 w-full bg-violet-100 rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
          <label className="bg-primary2 sr-only">Add Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
            placeholder="Add Title"
            className="w-full bg-transparent outline-none"
            aria-label="Add Title"
            required
          />
        </div>

        {/* Description input */}
        <div
          className="bg-ltf px-3.5 pt-4 pb-24 mt-4 w-full bg-violet-100 rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
          <label className="sr-only">Add Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}
            placeholder="Add Description"
            className="w-full bg-transparent outline-none resize-none"
            aria-label="Add Description"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default TitleDescriptionInput;