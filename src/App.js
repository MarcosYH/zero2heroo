import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes";
import Backtotop from "./components/client/Backtotop";
 

function App() {
  return (
    <div className=" ">
      <Router>
        <Backtotop />
        <RoutesConfig />
      </Router>
    </div>
  );
}

export default App;
