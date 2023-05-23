import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
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

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="bg-blue-gradient flex justify-center items-center h-screen container">
      <div className="w-1/2 p-6 border rounded shadow-lg ">
        <h1 className="text-3xl mb-4">Register</h1>
        <form onSubmit={onHandleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleOnChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              onChange={handleOnChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleOnChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleOnChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <Button styles={`mt-10`} text='Register'>
          </Button>
        </form>
      </div>
    </div>
  );
};
