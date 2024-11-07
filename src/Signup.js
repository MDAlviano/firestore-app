import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User Registered");
      navigate("/signin");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col p-4 space-y-4">
      <h1 className="text-xl font-bold">Sign Up</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-1/2 p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-1/2 p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button onClick={handleSignup} className="w-1/6 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
