import React from 'react'
import Sidebar from '../components/admin/Sidebar';
import Header from '../components/admin/Header';


const LayoutAdmin = ({ children }) => {
    return (
      <div>
        <Sidebar /> 
        <div className="admin-content">
          <Header />  
          {children} {/* Le contenu spécifique à chaque page d'administration */}
        </div>
      </div>
    );
  };
  
  export default LayoutAdmin;
  