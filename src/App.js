import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes";
import Backtotop from "./components/client/Backtotop";
import Loading from "./components/general/Loading";
 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Charge les données de manière asynchrone
    loadDataAsync()
      .then(() => {
        // Masque le loading une fois les données chargées
        setLoading(false);
      })
      .catch(error => {
        // Gère les erreurs de chargement ici
        console.error("Erreur lors du chargement des données : ", error);
        // Masque le loading même en cas d'erreur
        setLoading(false);
      });
  }, []);

  const loadDataAsync = () => {
    return new Promise((resolve, reject) => {
      // Simulation d'un chargement asynchrone (peut être remplacé par votre logique de chargement réelle)
      setTimeout(() => {
        // Charger les données ici
        // Si les données sont chargées avec succès, résoudre la promesse
        resolve();
        // Si une erreur se produit pendant le chargement, rejeter la promesse
        // reject(new Error("Erreur de chargement de données"));
      }, 2000); // par exemple, attendre 2 secondes pour simuler le chargement de vos données
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
