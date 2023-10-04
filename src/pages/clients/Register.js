import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  const handleSubmit = (e) => {
    e.preventDefault();

    if (lastname && firstname && email && password) {
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

      // Perform the necessary actions (send data, etc.)
      const configuration = {
        method: "post",
        url: "https://auth-api-adk2.onrender.com/register",
        data: {
          lastname,
          firstname,
          email,
          password,
        },
      };

      axios(configuration)
        .then((result) => {
          setRegister(true);
          setLoading(false);
          window.location.href = "/login";
          console.log(result);
          setLastname("");
          setFirstname("");
          setEmail("");
          setPassword("");
          setError("");
          setError2("");
          setPasswordError("");
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);

          if (error.response && error.response.status === 404) {
            setError2("Veuillez entrer un nom ou email valide");
          } else {
            setError2(
              "Une erreur s'est produite. Veuillez réessayer plus tard."
            );
          }
        });
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
                    <Link to="login.html">Connexion</Link>
                  </p>
                  <form action="#">
                    <div className="register_form signup_login_form">
                      <div className="form_item">
                        <input
                          type="text"
                          name="lastname"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                          placeholder="Nom"
                          required
                        />
                      </div>
                      <div className="form_item">
                        <input
                          type="text"
                          name="firstname"
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                          placeholder="Prénom"
                          required
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
                        />
                        {emailError && (
                          <p className="text-red-600 text-center">
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
                        />
                        {passwordError && (
                          <p className="text-red-600 text-center">
                            {passwordError}
                          </p>
                        )}
                      </div>
                      {error && (
                        <p className="text-red-600 text-center">{error}</p>
                      )}
                      {error2 && (
                        <p className="text-red-600 text-center">{error2}</p>
                      )}
                      <button
                        type="submit"
                        className="btn btn_dark mb-5 py-3 text-center d-flex justify-center"
                        onClick={(e) => handleSubmit(e)}
                      >
                        <div>S'inscrire</div> 
                        {loading && (
                          <div role="status" className=" ml-3">
                            <svg
                              aria-hidden="true"
                              role="status"
                              class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="#1C64F2"
                              ></path>
                            </svg>
                            <span className="sr-only">Loading...</span>
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
                        <p className=" text-red-600 text-center my-2"></p>
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
