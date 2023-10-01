import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes";
import Backtotop from "./components/Backtotop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" ">
      <Router>
        <Backtotop />
        <Navbar />
        <RoutesConfig />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
