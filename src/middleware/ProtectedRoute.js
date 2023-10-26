import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ role, children }) => {
  const token = Cookies.get("TOKEN");

  if (!token) {
    return <Navigate to="/login" />;
  }
  // Décoder le token pour obtenir le rôle de l'utilisateur
  const decodedToken = jwt_decode(token);
  const userRole = decodedToken.userRole;

  // Empêchez l'accès à la route étudiant pour tous les utilisateurs qui n'ont pas le rôle "student"
  if (window.location.pathname.includes("/student") && userRole !== "student") {
    return <Navigate to="/unauthorized" />; // Redirigez vers une page d'accès non autorisé
  }

  // Empêchez l'accès à la route enseignant pour tous les utilisateurs qui n'ont pas le rôle "teacher"
  if (window.location.pathname.includes("/teacher") && userRole !== "teacher") {
    return <Navigate to="/unauthorized" />;
  }
  // Empêchez l'accès à la route admin pour tous les utilisateurs qui n'ont pas le rôle "admin"
  if (window.location.pathname.includes("/admin") && userRole !== "admin") {
    return <Navigate to="/unauthorized" />;
  }

  // Vérifier le rôle et rediriger en conséquence
  if (role === "student") {
    return children;
  } else if (role === "admin") {
    return children;
  } else if (role === "teacher") {
    return children;
  } else {
    console.log("Rôle non reconnu.");
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
