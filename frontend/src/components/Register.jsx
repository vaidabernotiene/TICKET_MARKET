import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css";
import Button from "./Button";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // POST request i "http://localhost:5000........"
    axios.post("http://localhost:5000/register", formData)
      .then((response) => {
        navigate('/login');
      })
      .catch((err) => console.log(err));
  }

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-blue-gradient flex justify-center items-center h-screen container">
      <div className="w-1/2 p-6 border rounded shadow-lg ">
        <h1 className="text-3xl mb-4">Register</h1>
        <form >
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleOnChange}
              placeholder="Name"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="surname"
              name="surname"
              onChange={handleOnChange}
              placeholder="Surname"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleOnChange}
              placeholder="Email"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleOnChange}
              placeholder="Password"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <Button text='Register' onClick={onHandleSubmit}>
          </Button>
        </form>
      </div>
    </div>
  );
};
