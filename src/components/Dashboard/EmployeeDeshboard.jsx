import React from "react";
import Header from "../others/Header";
import TaskNumbers from "../others/TaskNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDeshboard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header />
      <TaskNumbers />
      <TaskList />
    </div>
  );
};

export default EmployeeDeshboard;
