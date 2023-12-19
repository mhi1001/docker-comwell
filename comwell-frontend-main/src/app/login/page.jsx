"use client";

import Script from "next/script";
import React, { useState, useEffect } from "react";

import { Navbar } from "@/app/components/navbar/navbar";
import { BackgroundImage } from "@/app/components/backgroundimg";
import { NavbarPrimary } from "../components/navbar/navbarprimary";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  function sendform(event) {
    event.preventDefault();

    const credentials = { username: username, password: password }

    // Validation checks
    if (!username || !password) {
      setError("Username and password cannot be empty.");
      return; // Stop further processing
    }

    // Send the form data to the server
    fetch("http://127.0.0.1:2000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        if (response != null && response !== "") {
          login(response);
        } else {
          setError("Invalid username or password.");
        }
      })
      .catch((error) => {
        setError("Invalid username or password.");
        console.error("Login Error:", error.message);
      });
  }
  function login(response) {
    if (response != null && response != "") {
      let newuser = response;
      sessionStorage.user = JSON.stringify(newuser);

      //Redirect to root
      window.location.href = "/";
    }
  }

  return (
    <main className="flex relative min-w-screen flex-col items-center">
      <BackgroundImage />
      <Navbar />

      <div className="flex w-full h-full justify-center items-center align-middle mt-[100px]">
        <div className="flex bg-gray-100 rounded-2xl p-[20px] shadow-lg flex-col">
          <div className="text-slate-900 font-bold text-center text-[18px]">
            <span>Please fill in your credentials</span>
          </div>
          <form
            onSubmit={sendform}
            className="flex flex-col items-center justify-center mt-[20px] gap-y-[10px]"
          >
            <input
              value={username}
              onChange={handleUsername}
              className="shadow-lg rounded-xl px-[10px] py-[5px]"
              type="text"
              placeholder="Username"
            ></input>
            <input
              value={password}
              onChange={handlePassword}
              className="shadow-lg rounded-xl px-[10px] py-[5px]"
              type="password"
              placeholder="Password"
            ></input>
            <button
              className="mt-[20px] text-white shadow-lg rounded-lg bg-slate-800 w-fit py-2 px-[20px]"
              type="submit"
            >
              Login
            </button>
          </form>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          <div className="mt-[10px] w-[60%] place-self-end text-[12px]">
            ...or, if you don't have an account yet&nbsp;
            <a className="whitespace-nowrap underline" href="/signup">
              sign up
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
