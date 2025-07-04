import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./signup.css";
import image from "./sign.jpg";
import { Link } from "react-router-dom";
import Axios from "axios";

function Signup() {
  const navigate = useNavigate(); // Initialize navigate

  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("http://localhost:3001/api/users")
      .then((response) => {
        setUsers(response?.data);
      })
      .catch((error) => {
        console.log("axios error :", error);
      });
  };

  const addUser = (data) => {
    setSubmitted(true);
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    Axios.post("http://localhost:3001/api/addUser", payload)
      .then((response) => {
        getUsers();
        setSubmitted(false);
        setFormData({ name: "", email: "", password: "" });

        navigate("/body");
      })
      .catch((error) => {
        console.log("axios error :", error);
        setSubmitted(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
  };

  return (
    <div className="background">
      <div className="signup_wrapper">
        <div className="signup_container">
          <div className="form_section">
            <h2>Sign Up</h2>
            <p className="sub_text">
              Don't have an account? <Link to="/login">Login</Link>
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input_field"
                value={formData.name}
                onChange={handleChange}
                required
              />
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

              <div className="action_row">
                <button
                  type="submit"
                  className="signup_btn"
                  disabled={submitted}
                >
                  {submitted ? "Submitting..." : "Sign Up"}
                </button>
              </div>
            </form>

            <div className="or_divider">
              <span>or sign up with</span>
            </div>

            <div className="social_buttons">
              <button className="google_btn">Google</button>
              <button className="facebook_btn">Facebook</button>
            </div>
          </div>

          <div className="image_section">
            <img src={image} alt="Signup Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
