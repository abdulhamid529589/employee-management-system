import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDeshboard from "./components/Dashboard/EmployeeDeshboard";
import AdminDeshboard from "./components/Dashboard/AdminDeshboard";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <EmployeeDeshboard /> */}
      <AdminDeshboard />
    </>
  );
}

export default App;
