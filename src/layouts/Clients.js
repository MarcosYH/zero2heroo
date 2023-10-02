import React from 'react'
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';

const Clients = ({ children }) => {
  return (
    <div>
      <Navbar/>  
      {children} 
      <Footer/> 
    </div>
  );
};

export default Clients;

