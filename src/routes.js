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
import AddLearnPath from "./pages/admin/AddLearnPath";
import AdminProfil from "./pages/admin/AdminProfil";
import AdminLabs from "./pages/admin/AdminLabs";
import LayoutTeacher from "./layouts/teacher";
import LayoutStudent from "./layouts/Students";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import TeacherLab from "./pages/teacher/TeacherLab";
import TeacherAddlabs from "./pages/teacher/TeacherAddlabs";
import StudentDashboard from "./pages/students/StudentDashboard";
import TeacherParcours from "./pages/teacher/Teacher_Parcours";
import TeacherAddsection from "./pages/teacher/TeacherAddsection";
import TeacherLabDetail from "./pages/teacher/TeacherLabDetail";
import ParcoursEmpty from "./components/general/ParcoursEmpty";
import AdminAddLabs from "./pages/admin/AdminAddLabs";
import AdminLabDetail from "./pages/admin/AdminLabDetail";

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
        <Route path="/admin/addlearnpath" element={<AddLearnPath />} />
        <Route path="/admin/profil" element={<AdminProfil />} />
        <Route path="/admin/labs" element={<AdminLabs />} />
        <Route path="/admin/learnpathEmpty" element={<ParcoursEmpty />} />
        <Route path="/admin/addlabs" element={<AdminAddLabs />} />
        <Route path="/admin/labdetail" element={<AdminLabDetail />} />
      </Route>

      {/* Routes enseignant */}
      <Route
        path="/teacher"
        element={
          <LayoutTeacher>
            <MainContent />
          </LayoutTeacher>
        }
      >
        <Route index element={<TeacherDashboard />} />
        <Route path="/teacher/labs" element={<TeacherLab />} />
        <Route path="/teacher/addlabs" element={<TeacherAddlabs />} />
        <Route path="/teacher/learnpath" element={<TeacherParcours />} />
        <Route path="/teacher/addsection" element={<TeacherAddsection />} />
        <Route path="/teacher/labdetail" element={<TeacherLabDetail />} />
        <Route path="/teacher/learnpathEmpty" element={<ParcoursEmpty />} />
      </Route>

      {/* Routes etudiants */}
      <Route
        path="/student"
        element={
          <LayoutStudent>
            <MainContent />
          </LayoutStudent>
        }
      >
        <Route index element={<StudentDashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
