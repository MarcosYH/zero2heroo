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
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
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
          setIsLoggedIn(true);
          setUserRole(userRole);
          setIsActivated(true);
          console.log(isLoggedIn, userRole, isActivated);
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
            setError("Erreur inattendue lors de connexion");
          }
        } else {
          setError("Erreur veuiller verifier votre connexion");
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
                      <div className="form_item position-relative">
                        <input
                          type={passwordVisible ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          placeholder="**********"
                          disabled={loading}
                        />
                        <label
                          className="position-absolute end-0 translate-middle-y me-2 togglePasswordVisibility"
                          onClick={togglePasswordVisibility}
                        >
                          {passwordVisible ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className=" w-2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className=""
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          )}
                        </label>
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
                          <div className="forget_password text-end text-danger ">
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
                        <Link to="/register" className=" text-primary">
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
