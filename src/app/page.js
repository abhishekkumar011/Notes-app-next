import Notes from "./components/Notes";

export default function Home() {
  return (
    <div className="px-20 py-10">
      {/* Navbar */}
      <div className="bg-white px-10 py-8 rounded-full shadow-lg flex justify-between">
        <h2 className="text-white bg-blue-600 w-fit px-4 py-2 rounded-full cursor-pointer">
          All Notes
        </h2>
        <h2 className="text-gray-700 text-2xl font-bold">Notes App📒</h2>
        <button className="text-white bg-blue-600 w-fit px-4 py-2 rounded-full cursor-pointer">
          Add Note
        </button>
      </div>
    </div>
  );
}
