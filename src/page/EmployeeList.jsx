import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EmployeeList.css";
import EditEmployeeForm from "./EditEmployee";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Hukum",
      email: "hcgupta@cstech.in",
      mobile: "954010044",
      designation: "HR",
      gender: "Male",
      course: "MCA",
      createDate: "13-Feb-21",
    },
    {
      id: 2,
      name: "Manish",
      email: "manish@cstech.in",
      mobile: "954010033",
      designation: "Sales",
      gender: "Male",
      course: "BCA",
      createDate: "12-Feb-21",
    },
  ]);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [editEmployee, setEditEmployee] = useState(null);

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const handleCreateEmployee = () => {
    toast.success("Employee Created Successfully!");
  };

  

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
    toast.success("Employee Deleted Successfully!");
  };

  const handleEditEmployee = (employee) => {
    setEditEmployee(employee);
  };

  const handleSaveEmployee = () => {
    setEmployees(
      employees.map((emp) => (emp.id === editEmployee.id ? editEmployee : emp))
    );
    setEditEmployee(null);
    toast.success("Employee Updated Successfully!");
  };

  return (
    <div className="employeeName">
      <div className="employee-container">
        <section className="employee-actions">
          <div className="total-count">Total Count: {employees.length}</div>
          <div className="create-employee">
            <a href="/employee">
              <button className="button-create" onClick={handleCreateEmployee}>
                Create Employee
              </button>
            </a>
          </div>
          <div className="search-section">
            <input
              type="text"
              placeholder="Enter Search Keyword"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button className="button-Search">Search Filter</button>
          </div>
        </section>

        <section className="employee-grid">
          <table>
            <thead>
              <tr>
                <th>Unique Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Designation</th>
                <th>Gender</th>
                <th>Course</th>
                <th>Create Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>Image Placeholder</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.mobile}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.course}</td>
                    <td>{employee.createDate}</td>
                    <td>
                      <button className="button-edit" onClick={() => handleEditEmployee(employee)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteEmployee(employee.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10">No employees found</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        {editEmployee && (
          <EditEmployeeForm
            editEmployee={editEmployee}
            setEditEmployee={setEditEmployee}
            handleSaveEmployee={handleSaveEmployee}
          />
        )}

        <ToastContainer />
      </div>
    </div>
  );
};

export default EmployeeList;
