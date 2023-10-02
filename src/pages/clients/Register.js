import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <div className="page_wrapper">
        <main className="page_content">
        
          <section className="register_section section_space_lg">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col col-lg-5">
                  <h1 className="register_heading text-center">
                    Créer un compte
                  </h1>
                  <p className="register_heading_description text-center">
                    Vous avez déjà un compte ?{" "}
                    <Link to="login.html">Connexion</Link>
                  </p>
                  <form action="#">
                    <div className="register_form signup_login_form">
                      <div className="form_item">
                        <input type="text" name="nom" placeholder="Nom" />
                      </div>
                      <div className="form_item">
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                      <div className="form_item">
                        <input
                          type="password"
                          name="createpassword"
                          placeholder="Créer un mot de passe"
                        />
                      </div>
                      <div className="form_item">
                        <input
                          type="password"
                          name="confirmpassword"
                          placeholder="Confirmer le mot de passe"
                        />
                      </div>
                      <button type="submit" className="btn btn_dark mb-5">
                        <span>
                          <small>S'inscrire</small>
                          <small>S'inscrire</small>
                        </span>
                      </button>
                      <p className="text-center">Ou se connecter avec</p>
                      <ul className="social_links unordered_list_center">
                        <li>
                          <Link to="https://www.google.com/">
                            <i className="fab fa-google" />
                          </Link>
                        </li>
                      </ul>
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
