import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthenticationContext } from "./AuthenticationContext";
import { HTTP } from "../constants";
import Button from "./Button";
import styles from "../style";
import "../App.css";

export const Login = () => {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .post(HTTP + "/login", formData)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          setIsSignedIn(true);
          navigate("/participants_list");
          console.log("Successfully Logged in!");
        } else {
          setError(response.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`${styles.flexCenter} theme-gradient py-20`}>
      <div className="bg-form-gradient w-1/2 p-6 border rounded shadow-lg">
        <h1 className={`${styles.heading2} text-3xl mb-4`}>Login</h1>
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleOnChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleOnChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <Button text="Login" onClick={handleOnSubmit} />
        </form>
        {error && <div>{error}</div>}
        <p className={styles.paragraph}>
          Need an Account? Click{" "}
          <Link to="/register" className="hover:underline">
            HERE
          </Link>
        </p>
      </div>
    </div>
  );
};
