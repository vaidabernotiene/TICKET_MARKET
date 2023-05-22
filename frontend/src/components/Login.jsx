import React from "react";
import Button from "./Button";
import "../App.css";

export const Login = () => {
  return (
    <div className="bg-blue-gradient flex justify-center items-center h-screen">
      <div className="w-1/2 p-6 border rounded shadow-lg container">
        <h1 className="text-3xl mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
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
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <Button styles={`mt-10`} text='Login'></Button>
        </form>
        <p>Need an Account? Click <a href="#">HERE</a></p>
      </div>
    </div>
  );
};
