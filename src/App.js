import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/Posts" element={<Posts />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;