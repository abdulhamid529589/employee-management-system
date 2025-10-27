import React from "react";

const CreateTask = () => {
  return (
    <div>
      {/* Admin Form Section */}
      <div className="mt-10 max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-400">
          Create New Task
        </h2>

        <form className="space-y-6">
          {/* Task Title */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-300">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-300">
              Description
            </label>
            <textarea
              rows="5"
              placeholder="Write task details here..."
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-300">
              Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-300">
              Assign To
            </label>
            <input
              type="text"
              placeholder="Employee name"
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-300">
              Category
            </label>
            <input
              type="text"
              placeholder="Design, Development, etc."
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 transition-all rounded-xl font-semibold shadow-lg"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
