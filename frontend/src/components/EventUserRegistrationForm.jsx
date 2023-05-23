import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Button from "./Button";

export const EventUserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // POST request i "http://localhost:5000........"
    axios
      .post("http://localhost:5000/register", formData)
      .then((response) => {
        navigate("/participants_list");
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const backToParticipantsList = () =>{
    navigate("/participants_list");
  }

  return (
    <div className="bg-blue-gradient flex justify-center items-center h-screen container">
      <div className="w-1/2 p-6 border rounded shadow-lg ml-8 ">
        <h1 className="text-3xl mb-4">Register New Event Participant</h1>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="surnamename"
              name="surname"
              placeholder="Surname"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="columns-2">
            <Button text="Register" />
            <div></div>
            <Button text="Back to List" onClick={backToParticipantsList}/>
          </div>
        </form>
      </div>
    </div>
  );
};
