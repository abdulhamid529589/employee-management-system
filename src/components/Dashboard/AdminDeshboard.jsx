import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6">
      {/* Header */}
      <Header />
      {/* Create Task */}
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
