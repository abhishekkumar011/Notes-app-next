import React from "react";

const Notes = ({ text, id, deleteNote }) => {
  return (
    <div className="bg-yellow-200 min-h-[250px] rounded-md shadow-md p-5 flex flex-col justify-between">
      <p className="text-gray-800">{text}</p>
      <div className="text-right">
        <button
          className="text-lg bg-gray-100 border-2 border-gray-400 p-1 rounded-lg"
          onClick={() => deleteNote(id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default Notes;
