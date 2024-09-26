import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditEmployee from "./EditEmployee"; 

const EditEmployeePage = ({ employees, setEmployees }) => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const employeeToEdit = employees.find((emp) => emp.id === parseInt(id));

  const handleSaveEmployee = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    navigate("/"); 
  };

  return (
    <div>
      {employeeToEdit ? (
        <EditEmployee
          editEmployee={employeeToEdit}
          setEditEmployee={handleSaveEmployee}
          handleSaveEmployee={handleSaveEmployee}
        />
      ) : (
        <p>Employee not found.</p>
      )}
    </div>
  );
};

export default EditEmployeePage;
