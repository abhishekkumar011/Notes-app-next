"use client";

import { useState } from "react";
import Notes from "./components/Notes";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

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
        />
        <button className="text-white bg-green-600 w-fit px-4 py-2 rounded-full hover:bg-green-700">
          Save
        </button>
        <button
          className="text-white bg-red-600 w-fit px-4 py-2 rounded-full hover:bg-red-700"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
      </div>

      <div className="mt-10 px-10 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-10">
        <Notes />
        <Notes />
        <Notes />
      </div>
    </div>
  );
}
