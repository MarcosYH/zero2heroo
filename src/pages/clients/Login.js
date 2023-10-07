import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth.service";
import Cookies from "js-cookie";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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

        // Si la connexion réussit, stockez le jeton dans les cookies
        if (response.token) {
          // Utilisez la fonction setCookie() pour stocker le jeton
          Cookies.set("token", response.token, { expires: 1 }); // "expires" est en jours, donc 1 jour = 24 heures
          navigate("/student");
        } else {
          setError("Email ou mot de passe incorrect.");
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Une erreur s'est produite lors de la connexion.");
        setLoading(false);
      }
    } else {
      setError("Veuillez entrer votre email et votre mot de passe.");
    }
  };
 

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   if (email && password) {
  //     setLoading(true);
  //     setError("");

  //     try {
  //       const response = await loginUser({
  //         email,
  //         password,
  //       });

  //       // Si la connexion réussit, redirigez l'utilisateur vers la route protégée /student
  //       if (response.token) {
  //         localStorage.setItem("token", response.token);
  //         const token = localStorage.getItem('token');
  //         console.log(token);
  //         navigate("/student");
  //       } else {
  //         setError("Email ou mot de passe incorrect.");
  //       }

  //       setLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //       setError("Une erreur s'est produite lors de la connexion.");
  //       setLoading(false);
  //     }
  //   } else {
  //     setError("Veuillez entrer votre email et votre mot de passe.");
  //   }
  // };

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
                    Veuillez saisir votre nom d'utilisateur ou votre adresse
                    email et votre mot de passe
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
                        />
                      </div>
                      <div className="form_item">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          placeholder="**********"
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
                      {/* <button type="submit" className="btn btn_dark mb-5">
                        <span>
                          <small>Se connecter</small>
                          <small>Se connecter</small>
                        </span>
                      </button> */}
                      <p className="mb-0 text-center">
                        vous n'avez pas de compte ?{" "}
                        <Link to="/register">S'inscrire ici</Link>
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
