import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cours from "./pages/Cours";
import Parcours from "./pages/Parcours";
import Contact from "./pages/Contact";
import Temoignage from "./pages/Temoignage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Cours />} />
      <Route path="/path" element={<Parcours />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimoni" element={<Temoignage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesConfig;
