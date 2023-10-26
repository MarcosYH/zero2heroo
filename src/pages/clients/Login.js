import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth.service";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [isActivated, setIsActivated] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email && password) {
      setLoading(true);
      setError("");

      try {
        const response = await loginUser({
          email,
          password,
        });
        const { isActivated, token } = response;

        if (isActivated) {
          Cookies.set("TOKEN", token, { expires: 1 });
          const decodedToken = jwt_decode(token);
          const { userRole } = decodedToken;
          // Mettre à jour l'état pour indiquer que l'utilisateur est connecté et son rôle
          setIsLoggedIn(true);
          setUserRole(userRole);
          setIsActivated(true);
          console.log(isLoggedIn, userRole, isActivated)
        } else {
          console.log("Votre inscription n'est pas encore validée.");
          setIsLoggedIn(false);
          setIsActivated(false);
          setError("Erreur lors de la connexion. Inscription invalidée.");
        }
      } catch (error) {
        console.error("Erreur lors de la connexion :", error);
  
        if (error.response) {
          const { status } = error.response;
  
          if (status === 404) {
            setError("Email non trouvé");
          } else if (status === 403) {
            setError("Accès non autorisé. Veuillez réessayer.");
          } else if (status === 400) {
            setError("Mots de passe incorrecte.");
          } else if (status === 500) {
            setError("Erreur de serveur interne");
          } else {
            setError("Erreur inattendue lors de la connexion");
          }
        } else {
          setError("Erreur inattendue lors de la connexion");
        }
        setIsLoggedIn(false);
        setIsActivated(false);
      } finally {
        setLoading(false);
      }
    } else {
      setError("Veuillez entrer votre email et votre mot de passe.");
    }
  };

  useEffect(() => {
    if (isLoggedIn && isActivated) {
      if (userRole === "student") {
        navigate("/student");
      } else if (userRole === "admin") {
        navigate("/admin");
      } else if (userRole === "teacher") {
        navigate("/teacher");
      } else {
        console.log("Rôle non reconnu.");
        navigate("/login");
      }
    } else if (isLoggedIn && !isActivated) {
      console.log("Votre compte n'est pas activé.");
      // Redirection vers la page d'activation du compte si nécessaire
      navigate("/register");
    }
  }, [isLoggedIn, isActivated, userRole, navigate]);

  return (
    <div>
      <div className="page_wrapper">
        <main className="page_content">
          <section className="section_space_lg">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col col-lg-6">
                  <h1 className="register_heading text-center">Connexion</h1>
                  <p className="register_heading_description text-center">
                    Veuillez saisir votre adresse email et votre mot de passe
                  </p>
                  <form onSubmit={handleLogin}>
                    <div className="register_form signup_login_form">
                      <div className="form_item">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          required
                          disabled={loading}
                        />
                      </div>
                      <div className="form_item">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          placeholder="**********"
                          disabled={loading}
                        />
                      </div>
                      {error && <div className="text-danger">{error}</div>}
                      <div className="remenber_forget row mb-3 align-items-center justify-content-between">
                        <div className="col col-6">
                          <div className="checkbox_item mb-0">
                            <input id="checkbox_remenber" type="checkbox" />
                            <label htmlFor="checkbox_remenber">
                              Souvenez-vous de moi
                            </label>
                          </div>
                        </div>
                        <div className="col col-6">
                          <div className="forget_password text-end">
                            <Link to="#!">Mot de passe oublier ?</Link>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn_dark mb-5 py-3 text-center d-flex justify-center items-center"
                      >
                        <div className=" mr-2 fw-bold">Se connecter</div>
                        {loading && (
                          <div
                            className="spinner-border  text-light"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        )}
                      </button>
                      <p className="mb-0 text-center">
                        vous n'avez pas de compte ?{" "}
                        <Link to="/register" className=" text-danger">
                          S'inscrire ici
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
