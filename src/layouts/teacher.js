import React from "react";
import Sidebar from "../components/teacher/Sidebar";
import Header from "../components/teacher/Header";

const LayoutTeacher = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className="admin-content">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default LayoutTeacher;
