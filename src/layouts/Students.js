import React from "react";
import Sidebar from "../components/students/Sidebar";
import Header from "../components/students/Header";

const Students = ({ children }) => {
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

export default Students;
