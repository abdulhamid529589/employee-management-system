import React from "react";

const TaskNumbers = () => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="rounded-2xl py-6 px-8 bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold mb-2">0</h2>
        <h3 className="text-lg font-medium opacity-90">New Task</h3>
      </div>

      <div className="rounded-2xl py-6 px-8 bg-gradient-to-br from-yellow-500 to-yellow-700 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold mb-2">1</h2>
        <h3 className="text-lg font-medium opacity-90">In Progress</h3>
      </div>

      <div className="rounded-2xl py-6 px-8 bg-gradient-to-br from-green-500 to-green-700 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold mb-2">3</h2>
        <h3 className="text-lg font-medium opacity-90">Completed</h3>
      </div>

      <div className="rounded-2xl py-6 px-8 bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold mb-2">4</h2>
        <h3 className="text-lg font-medium opacity-90">Overdue</h3>
      </div>
    </div>
  );
};

export default TaskNumbers;
