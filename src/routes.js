import { Routes, Route, Outlet } from "react-router-dom";
import LayoutClient from "./layouts/Clients";
import Home from "./pages/clients/Home";
import Cours from "./pages/clients/Cours";
import Parcours from "./pages/clients/Parcours";
import Contact from "./pages/clients/Contact";
import Temoignage from "./pages/clients/Temoignage";
import Login from "./pages/clients/Login";
import Register from "./pages/clients/Register";
import Error from "./pages/clients/Error";
import Dashboard from "./pages/admin/admin_Dashboard";
import LayoutAdmin from "./layouts/Admin";
import User from "./pages/admin/User";
import AdminParcours from "./pages/admin/Admin_Parcours";

const MainContent = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const RoutesConfig = () => {
  return (
    <Routes>
      {/* Routes clients */}
      <Route
        path="/"
        element={
          <LayoutClient>
            <MainContent />
          </LayoutClient>
        }
      >
        <Route index element={<Home />} />
        <Route path="/course" element={<Cours />} />
        <Route path="/path" element={<Parcours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimoni" element={<Temoignage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<Error />} />

      {/* Routes admins */}
      <Route
        path="/admin"
        element={
          <LayoutAdmin>
            <MainContent />
          </LayoutAdmin>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="/admin/user" element={<User />} />
        <Route path="/admin/learnpath" element={<AdminParcours />} />
        {/* Ajoutez d'autres routes spécifiques à l'administration ici */}
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
