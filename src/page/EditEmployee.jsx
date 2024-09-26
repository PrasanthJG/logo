import React from "react";

const EditEmployee = ({
  editEmployee,
  setEditEmployee,
  handleSaveEmployee,
}) => {
  return (
    <section className="edit-employee">
      <h3>Edit Employee</h3>
      <form>
        <input
          type="text"
          value={editEmployee.name}
          onChange={(e) =>
            setEditEmployee({ ...editEmployee, name: e.target.value })
          }
          placeholder="Name"
        />
        <input
          type="email"
          value={editEmployee.email}
          onChange={(e) =>
            setEditEmployee({ ...editEmployee, email: e.target.value })
          }
          placeholder="Email"
        />
        <input
          type="text"
          value={editEmployee.mobile}
          onChange={(e) =>
            setEditEmployee({ ...editEmployee, mobile: e.target.value })
          }
          placeholder="Mobile No"
        />
        <input
          type="text"
          value={editEmployee.designation}
          onChange={(e) =>
            setEditEmployee({
              ...editEmployee,
              designation: e.target.value,
            })
          }
          placeholder="Designation"
        />
        <input
          type="text"
          value={editEmployee.gender}
          onChange={(e) =>
            setEditEmployee({
              ...editEmployee,
              gender: e.target.value,
            })
          }
          placeholder="Gender"
        />
        <input
          type="text"
          value={editEmployee.course}
          onChange={(e) =>
            setEditEmployee({
              ...editEmployee,
              course: e.target.value,
            })
          }
          placeholder="Course"
        />
        <button type="button" onClick={handleSaveEmployee}>
          Save
        </button>
      </form>
    </section>
  );
};

export default EditEmployee;
