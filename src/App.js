import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cours from "./pages/Cours";
import Temoignage from "./pages/Temoignage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className=" ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Cours />} />
          <Route path="/testimoni" element={<Temoignage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
