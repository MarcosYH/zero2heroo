import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ role, children }) => {
  const token = Cookies.get("TOKEN");

  if (!token) {
    return <Navigate to="/login" />;
  }
  const decodedToken = jwt_decode(token);
  const userRole = decodedToken.userRole;

  if (window.location.pathname.includes("/student") && userRole !== "student") {
    return <Navigate to="/unauthorized" />;
  }

  if (window.location.pathname.includes("/teacher") && userRole !== "teacher") {
    return <Navigate to="/unauthorized" />;
  }

  if (window.location.pathname.includes("/admin") && userRole !== "admin") {
    return <Navigate to="/unauthorized" />;
  }

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
