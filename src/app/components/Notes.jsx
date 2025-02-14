import React from "react";

const Notes = () => {
  return (
    <div className="bg-yellow-200 min-h-[250px] rounded-md shadow-md p-5 flex flex-col justify-between">
      <p className="text-gray-800">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
        accusamus molestiae eius, nesciunt fugiat facere dolorum, impedit
        asperiores corporis animi aut ea. Harum excepturi et ex dolore a vitae
        sequi!
      </p>
      <div className="text-right">
        <button className="text-lg bg-gray-200 p-1 rounded-lg">🗑️</button>
      </div>
    </div>
  );
};

export default Notes;
