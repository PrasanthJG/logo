import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Employee.css";

const Employee = ({ setEmployees }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    imgUpload: null,
    course: [],
  });

  const registeredEmails = ["user1@example.com", "user2@example.com"];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      let updatedCourses = [...formData.course];
      if (checked) {
        updatedCourses.push(value);
      } else {
        updatedCourses = updatedCourses.filter((course) => course !== value);
      }
      setFormData({ ...formData, course: updatedCourses });
    } else if (type === "file") {
      setFormData({ ...formData, imgUpload: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    let isValid = true;

    toast.dismiss();

    if (formData.name === "") {
      toast.error("Name is required.");
      isValid = false;
    }

    if (formData.email === "") {
      toast.error("Email is required.");
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      toast.error("Invalid email format.");
      isValid = false;
    } else if (registeredEmails.includes(formData.email)) {
      toast.error("This email is already registered.");
      isValid = false;
    }

    if (formData.mobile === "") {
      toast.error("Mobile number is required.");
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      toast.error("Mobile number must be numeric and 10 digits.");
      isValid = false;
    }

    if (formData.designation === "") {
      toast.error("Please select a designation.");
      isValid = false;
    }

    if (formData.gender === "") {
      toast.error("Please select a gender.");
      isValid = false;
    }

    if (formData.course.length === 0) {
      toast.error("Please select at least one course.");
      isValid = false;
    }

    if (!formData.imgUpload) {
      toast.error("Image upload is required.");
      isValid = false;
    } else if (!/\.(jpg|jpeg|png)$/i.test(formData.imgUpload.name)) {
      toast.error("Only JPG and PNG formats are allowed.");
      isValid = false;
    }

    return isValid;
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setEmployees((prev) => [...prev, formData]);

      toast.success("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        designation: "",
        gender: "",
        imgUpload: null,
        course: [],
      });
    }
  };

  return (
    <div className="employee">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="imgUpload">Img Upload (jpg/png):</label>
          <input
            type="file"
            name="imgUpload"
            accept="image/png, image/jpeg"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="mobile">Mobile No:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="designation">Designation:</label>
          <select
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        <div>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="M"
            checked={formData.gender === "M"}
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="F"
            checked={formData.gender === "F"}
            onChange={handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="G"
            checked={formData.gender === "G"}
            onChange={handleChange}
          />
          Other
        </div>

        <div>
          <label>Course:</label>
          <input
            type="checkbox"
            name="course"
            value="MCA"
            checked={formData.course.includes("MCA")}
            onChange={handleChange}
          />
          MCA
          <input
            type="checkbox"
            name="course"
            value="BCA"
            checked={formData.course.includes("BCA")}
            onChange={handleChange}
          />
          BCA
          <input
            type="checkbox"
            name="course"
            value="BSC"
            checked={formData.course.includes("BSC")}
            onChange={handleChange}
          />
          BSC
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Employee;
