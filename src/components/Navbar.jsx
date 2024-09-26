import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Navbar.css"; 

const Navbar = () => {
  const handleLogout = () => {
    toast.success("Logged out successfully!");
  };

  return (
    <header id="header">
      <nav className="navbar">
        <div className="navbar1">
          <ul className="link">
            <li>
              <a href="/home" className="link-name">
                Home
              </a>
            </li>
            <li>
              <a href="/employeelist" className="link-name">
                Employee List
              </a>
            </li>
          </ul>

          <div>
            <a href="/" onClick={handleLogout}>
              <button className="buttonName">Logout</button>
            </a>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </header>
  );
};

export default Navbar;
