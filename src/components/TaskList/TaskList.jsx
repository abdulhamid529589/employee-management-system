import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[40%] p-5 w-full mt-10 flex items-center justify-start gap-6 flex-nowrap overflow-x-auto px-4 
                 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 bg-gradient-to-br from-gray-900 to-gray-800"
    >
      {/* Task Card */}
      <div className="flex-shrink-0 h-full w-[300px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-2">UI Design Update</h2>
        <p className="text-sm text-gray-300 mb-4">
          Redesign the dashboard layout and fix alignment.
        </p>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>Due: Oct 25</span>
          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
            In Progress
          </span>
        </div>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-2">Bug Fixes</h2>
        <p className="text-sm text-gray-300 mb-4">
          Resolve input validation errors in forms.
        </p>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>Due: Oct 26</span>
          <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
            Pending
          </span>
        </div>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-2">API Integration</h2>
        <p className="text-sm text-gray-300 mb-4">
          Connect React frontend with backend routes.
        </p>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>Due: Oct 27</span>
          <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
            Completed
          </span>
        </div>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-2">API Integration</h2>
        <p className="text-sm text-gray-300 mb-4">
          Connect React frontend with backend routes.
        </p>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>Due: Oct 27</span>
          <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
            Completed
          </span>
        </div>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-2">Client Review</h2>
        <p className="text-sm text-gray-300 mb-4">
          Prepare project summary for client meeting.
        </p>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>Due: Oct 28</span>
          <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full">
            Overdue
          </span>
        </div>
      </div>

      {/* Add as many as needed... */}
    </div>
  );
};

export default TaskList;
