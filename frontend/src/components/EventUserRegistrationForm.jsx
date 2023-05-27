import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../App.css";
import styles from "../style";
import { HTTP } from "../constants";
import Button from "./Button";
import { Toast } from "./Toast";

export const EventUserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    setShowToast(true);
    // POST request i "http://localhost:5000........"
    axios
      .post(HTTP + "/new_participant", formData)
      .then((response) => {
        setTimeout(() => {
          setShowToast(false);
          navigate("/participants_list");
        }, 3000);
        //
      })
      .catch((err) => console.log(err));
  };

  const onHandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const hideToast = () => {
    setShowToast(false);
  };

  const backToParticipantsList = () => {
    navigate("/participants_list");
  };

  return (
    <div className={`${styles.flexCenter} theme-gradient py-20`}>
      <div className="bg-form-gradient w-1/2 p-6 border rounded shadow-lg">
        <h1 className={`${styles.heading2} text-3xl mb-4`}>Register NEW participant</h1>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={onHandleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="surnamename"
              name="surname"
              placeholder="Surname"
              onChange={onHandleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              onChange={onHandleChange}
              placeholder="Email"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="phone"
              name="phone"
              onChange={onHandleChange}
              placeholder="Phone"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="columns-2">
            <Button text="Register" onClick={onHandleSubmit} />
            <div></div>
            <Button text="Back to List" onClick={backToParticipantsList} />
          </div>
        </form>

        <Toast
          text="User registration successfull!"
          show={showToast}
          hide={hideToast}
        />
      </div>
    </div>
  );
};
