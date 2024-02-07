import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes";
import Backtotop from "./components/client/Backtotop";
import Loading from "./components/general/LoadingZero2hero";
 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDataAsync()
      .then(() => {
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des données : ", error);
        setLoading(false);
      });
  }, []);

  const loadDataAsync = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };


  return (
    <div className=" ">
      <Router>
      {loading && <Loading/>}
      {!loading && (
          <>
            <Backtotop />
            <RoutesConfig />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
