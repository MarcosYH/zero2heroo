import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/auth.service.js";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [register, setRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");

  // function isEmailValid for Regular expression to validate e-mail
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // function handlesubmit for register
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && tel && email && password && cpassword) {
      setError(""); // Reset error if all fields are filled in
      setEmailError("");

      if (!isEmailValid(email)) {
        // Invalid e-mail address, display error
        setEmailError("Veuillez entrer une adresse e-mail valide");
        return;
      }

      if (password.length < 8) {
        // Password too short, display error
        setPasswordError("Le mot de passe doit contenir au moins 8 caractères");
        return;
      }

      setLoading(true);

      try {
        const response = await registerUser({
          name,
          email,
          password,
          cpassword,
          tel,
        });

        setRegister(true);
        setLoading(false);
        window.location.href = "/checkemail";
        console.log(response);
        setName("");
        setCpassword("");
        setTel("");
        setEmail("");
        setPassword("");
        setError("");
        setError2("");
        setPasswordError("");
      } catch (error) {
        console.error(error);

        if (error.response && error.response.status === 404) {
          setError2("Veuillez entrer un nom ou un email valide");
        } else {
          setError2(
            "Une erreur s'est produite. Veuillez revoir vos informations. Email déjà utilisé !"
          );
        }

        setLoading(false);
      }
    } else {
      setError("Veuillez remplir tous les champs");
    }
  };

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
                    <Link to="/login">Connexion</Link>
                  </p>
                  <form action="#">
                    <div className="register_form signup_login_form">
                      <div className="form_item">
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Nom & Prénom"
                          required
                          disabled={loading}
                        />
                      </div>
                      <div className="form_item">
                        <input
                          id="telephone"
                          type="number"
                          name="telephone"
                          value={tel}
                          onChange={(e) => setTel(e.target.value)}
                          placeholder="Entrer votre numero de télephone"
                          required
                          disabled={loading}
                        />
                      </div>
                      
                      <div className="form_item">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          required
                          disabled={loading}
                        />
                        {emailError && (
                          <p className="text-danger text-center">
                            {emailError}
                          </p>
                        )}
                      </div>
                      <div className="form_item">
                        <input
                          id="passwordregister"
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Créer un mot de passe"
                          required
                          disabled={loading}
                        />
                        {passwordError && (
                          <p className="text-danger text-center">
                            {passwordError}
                          </p>
                        )}
                      </div>
                      <div className="form_item">
                        <input
                          id="confirmpasswordregister"
                          type="password"
                          name="confirmepassword"
                          value={cpassword}
                          onChange={(e) => setCpassword(e.target.value)}
                          placeholder="Confirmer votre mot de passe"
                          required
                          disabled={loading}
                        />
                        {passwordError && (
                          <p className="text-danger text-center">
                            {passwordError}
                          </p>
                        )}
                      </div>
              
                      {error && (
                        <p className="text-danger text-center">{error}</p>
                      )}
                      {error2 && (
                        <p className="text-danger text-center">{error2}</p>
                      )}

                      <button
                        type="submit"
                        className="btn btn_dark mb-5 py-3 text-center d-flex justify-center items-center"
                        onClick={(e) => handleSubmit(e)}
                      >
                        <div className=" mr-2 fw-bold">S'inscrire</div>
                        {loading && (
                          <div
                            className="spinner-border  text-light"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        )}
                      </button>
                      {/* <p className="text-center">Ou se connecter avec</p>
                      <ul className="social_links unordered_list_center">
                        <li>
                          <Link to="https://www.google.com/">
                            <i className="fab fa-google" />
                          </Link>
                        </li>
                      </ul> */}
                      {register ? (
                        <p className=" text-green-600 text-center my-2">
                          Votre inscription a été effectuée avec succès
                        </p>
                      ) : (
                        <p className=" text-danger text-center my-2"></p>
                      )}
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
