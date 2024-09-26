import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Employee from "./page/Employee";
import Home from "./page/Home";
import EmployeeList from "./page/EmployeeList";
import EditEmployee from "./page/EditEmployee";
import EditEmployeePage from "./page/EditEmployeePage";

function MainApp() {
  const location = useLocation();
  
  return (
    <>
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employeelist" element={<EmployeeList />} />
        <Route path="/editemployee" element={<EditEmployee />} />
        <Route path="/editemployeepage" element={<EditEmployeePage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

export default App;
