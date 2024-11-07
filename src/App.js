import React, { useState } from "react";
import { auth } from "./firebase";
import { db } from "./firebase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import AddItem from "./AddItem";
import Header from "./Header";

const App = () => {
  return (
    <>
    <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
