"use client";

import { useState } from "react";
import Notes from "./components/Notes";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [noteMsg, setNoteMsg] = useState("");

  //Add Notes
  const addNote = () => {
    if (noteMsg.trim()) {
      // Generate a unique ID for each note
      const newNote = { id: uuidv4(), text: noteMsg };
      setNotes([...notes, newNote]);
      setNoteMsg("");
    }
  };

  //Clear input field when click on cancel if text is exists
  const clearField = () => {
    if (noteMsg.trim()) {
      setIsOpen(false);
      setNoteMsg("");
    }
  };

  //Delete Note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="px-20 py-10">
      {/* Navbar */}
      <div className="bg-white px-10 py-8 rounded-full shadow-lg flex justify-between">
        <h2 className="text-white bg-blue-600 w-fit px-4 py-2 rounded-full cursor-pointer">
          All Notes
        </h2>
        <h2 className="text-gray-700 text-2xl font-bold">Notes App📒</h2>
        <button
          className="text-white bg-blue-600 w-fit px-4 py-2 rounded-full"
          onClick={() => setIsOpen(true)}
        >
          Add Note
        </button>
      </div>

      {/* Input Field */}
      <div
        className={`w-full px-10 mt-10 flex gap-4 overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-in-out ${
          isOpen
            ? "max-h-[100px] opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
        }`}
      >
        <input
          type="text"
          className="w-full rounded-lg shadow-md px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
          placeholder="Type Your Notes...."
          value={noteMsg}
          onChange={(e) => setNoteMsg(e.target.value)}
        />
        <button
          className="text-white bg-green-600 w-fit px-4 py-2 rounded-full hover:bg-green-700"
          onClick={addNote}
        >
          Save
        </button>
        <button
          className="text-white bg-red-600 w-fit px-4 py-2 rounded-full hover:bg-red-700"
          onClick={clearField}
        >
          Cancel
        </button>
      </div>

      <div className="mt-10 px-10 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-10">
        {notes.map((note) => (
          <Notes
            key={note.id}
            id={note.id}
            text={note.text}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}
