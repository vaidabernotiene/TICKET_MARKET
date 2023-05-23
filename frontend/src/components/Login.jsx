import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "../App.css";

export const Login = () => {
  return (
    <div className="bg-blue-gradient flex justify-center items-center h-screen container">
      <div className="w-1/2 p-6 border rounded shadow-lg">
        <h1 className="text-3xl mb-4">Login</h1>
        <form>
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
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <Button text='Login'/>
        </form>
        <p className="pt-5">Need an Account? Click <Link to="/register">HERE</Link></p>
      </div>
    </div>
  );
};
