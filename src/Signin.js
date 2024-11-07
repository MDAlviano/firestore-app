import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("User Logged In");
      navigate("/additem");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col p-4 space-y-4 mt-6">
      <h1 className="text-xl font-bold">Sign In</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-1/2 p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-1/2 p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button onClick={handleLogin} className="w-1/6 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
        Sign In
      </button>
    </div>
  );
};

export default Signin;
