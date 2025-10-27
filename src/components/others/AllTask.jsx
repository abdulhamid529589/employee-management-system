import React from "react";

const AllTask = () => {
  return (
    <div className="mt-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 text-white">
      <h2 className="text-2xl font-bold mb-6 text-red-400 text-center sm:text-left">
        All Tasks
      </h2>

      {/* ✅ Scrollable box container */}
      <div className="max-h-[400px] overflow-y-auto rounded-xl border border-white/10">
        <table className="w-full border-collapse min-w-[600px]">
          <thead className="sticky top-0 bg-black backdrop-blur-md z-10">
            <tr className="text-gray-300 text-sm uppercase tracking-wider">
              <th className="py-3 px-4 text-left rounded-l-lg">Task Title</th>
              <th className="py-3 px-4 text-left">Assigned To</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-center rounded-r-lg">Status</th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}
            <tr className="hover:bg-white/10 transition-all border-b border-white/10">
              <td className="py-4 px-4 font-medium">UI Design Update</td>
              <td className="py-4 px-4 text-gray-300">Abdul Hamid</td>
              <td className="py-4 px-4 text-gray-300">Design</td>
              <td className="py-4 px-4 text-gray-300">Oct 25, 2025</td>
              <td className="py-4 px-4 text-center">
                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-semibold">
                  In Progress
                </span>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-white/10 transition-all border-b border-white/10">
              <td className="py-4 px-4 font-medium">API Integration</td>
              <td className="py-4 px-4 text-gray-300">John Doe</td>
              <td className="py-4 px-4 text-gray-300">Development</td>
              <td className="py-4 px-4 text-gray-300">Oct 28, 2025</td>
              <td className="py-4 px-4 text-center">
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
                  Completed
                </span>
              </td>
            </tr>

            {/* More Rows */}
            {[...Array(6)].map((_, i) => (
              <tr
                key={i}
                className="hover:bg-white/10 transition-all border-b border-white/10"
              >
                <td className="py-4 px-4 font-medium">Client Review</td>
                <td className="py-4 px-4 text-gray-300">Sara Khan</td>
                <td className="py-4 px-4 text-gray-300">Management</td>
                <td className="py-4 px-4 text-gray-300">Oct 29, 2025</td>
                <td className="py-4 px-4 text-center">
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-semibold">
                    Overdue
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;
