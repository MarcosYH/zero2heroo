import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
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
                  <form action="#">
                    <div className="register_form signup_login_form">
                      <div className="form_item">
                        <input
                          type="email"
                          name="email"
                          placeholder="Nom d'utilisateur ou Email"
                        />
                      </div>
                      <div className="form_item">
                        <input
                          type="password"
                          name="password"
                          placeholder="**********"
                        />
                      </div>
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
                      <button type="submit" className="btn btn_dark mb-5">
                        <span>
                          <small>Se connecter</small>
                          <small>Se connecter</small>
                        </span>
                      </button>
                      <p className="mb-0 text-center">
                        vous n'avez pas de compte ?{" "}
                        <Link to="signup.html">S'inscrire ici</Link>
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
