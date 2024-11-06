"use client";
import { signIn } from "@/app/actions";
import React, { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");
  console.log(error);

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await signIn({ m });
    } catch (error) {
      setError(err.message);
    }
  }
  return (
    <>
      <div className="text-red-600">{error}</div>
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
