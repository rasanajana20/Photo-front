import React, { useEffect, useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import login from "./login.png";
import Axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getUsers = () => {
    Axios.get("http://localhost:3001/api/users")
      .then((response) => {
        setUsers(response?.data);
      })
      .catch((error) => {
        console.log("Axios error:", error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (foundUser) {
      navigate("/body"); 
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="background">
      <div className="signup_wrapper">
        <div className="signup_container">
          <div className="form_section">
            <h2>Login</h2>
            <p className="sub_text">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input_field"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input_field"
                value={formData.password}
                onChange={handleChange}
                required
              />

              {error && <p className="error_text">{error}</p>}

              <div className="action_row">
                <button type="submit" className="signup_btn">
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="image_section">
            <img src={login} alt="Login Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
