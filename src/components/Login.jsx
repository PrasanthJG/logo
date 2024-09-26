import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const users = [
    {
      id: 1,
      gmail: "user1@example.com",
      password: "password123",
    },
    {
      id: 2,
      gmail: "user2@example.com",
      password: "password456",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find((u) => u.gmail === email);

    if (user) {
      if (user.password === password) {
        toast.success("Login successful!");
        navigate("/home"); 
      } else {
        setError("Invalid password");
        toast.error("Invalid password");
      }
    } else {
      setError("Invalid email");
      toast.error("Invalid email");
    }
  };

  return (
    <div className="Login">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h3>Log In</h3>

          <div className="input-field">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Enter Your email</label>
          </div>

          <div className="input-field">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Enter Your password</label>
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="forget">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              <p>Remember me</p>
            </label>
            <a href="/password">Forgot password?</a>
          </div>

          <button type="submit">Log In</button>

          <div className="register">
            <p>
              Don't have an account? <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;
