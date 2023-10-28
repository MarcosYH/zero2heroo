import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/auth.service.js";
import "../../styles/style.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("229");
  const [num, setNum] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [register, setRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisiblconfirm, setPasswordVisibleconfirm] = useState(false);
  
  // fuuction validate email
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
// function get country id
  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const fullPhoneNumber = `+${countryCode}${num}`;
  // fuction  passwordStrength
  const calculateStrength = (password) => {
    const length = password.length;
    const hasNumber = /\d/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let score = 0;
    // if(length <=8){
    //   score += 25;
    // }
    if (length <= 8 && length === "") {
      score += 0;
    }
    if (hasNumber && length >= 8) {
      score += 25;
    }
    if (hasUpperCase && length >= 8) {
      score += 25;
    }
    if (hasLowerCase && length >= 8) {
      score += 25;
    }
    if (hasSpecialChars && length >= 8) {
      score += 25;
    }

    return Math.min(100, score);
  };

  const passwordStrength = calculateStrength(password);

  let message = null;

  if (passwordStrength < 100) {
    message = (
      <span className="advice">
        <br />
        Le mot de passe doit comporter au moins 8 caractères et inclure au moins
        un chiffre, une lettre majuscule et un caractère spécial.
      </span>
    );
  } else {
    message = (
      <span className="advice2">
        {" "}
        <br /> Mot de passe parfait !
      </span>
    );
  }

  const width = `${passwordStrength}%`;

  let progressBarColor = "#de1616";
  if (passwordStrength >= 50) {
    progressBarColor = "#FFA200";
  }
  if (passwordStrength >= 80) {
    progressBarColor = "#06bf06";
  }

  const progressBarStyle = {
    width: width,
    backgroundColor: progressBarColor,
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordVisibilityconfirm = () => {
    setPasswordVisibleconfirm(!passwordVisiblconfirm);
  };

  // function handlesubmit for register
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && num && email && password && cpassword) {
      setError("");
      setEmailError("");

      if (!isEmailValid(email)) {
        setEmailError("Veuillez entrer une adresse e-mail valide");
        return;
      }
      if (password.length < 8) {
        setPasswordError("Le mot de passe doit contenir au moins 8 caractères");
        return;
      }
      if (password !== cpassword) {
        setPasswordError("Les mots de passe ne correspondent pas");
        return;
      }

      setLoading(true);

      try {
        const response = await registerUser({
          name,
          email,
          password,
          cpassword,
          tel: fullPhoneNumber,
        });

        setRegister(true);
        setLoading(false);
        window.location.href = "/checkemail";
        console.log(response);
        setName("");
        setCpassword("");
        setNum("");
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
                      <div className="form_item position-relative d-flex">
                        <select
                          id="country-code"
                          className="country"
                          value={countryCode}
                          onChange={handleCountryCodeChange}
                        >
                          <option value="229">+229</option>
                          <option value="228">+228</option>
                          <option value="237">+237</option>
                          <option value="225">+225</option>
                          <option value="226">+226</option>
                          <option value="227">+227</option>
                          <option value="224">+224</option>
                          <option value="223">+223</option>
                          <option value="222">+222</option>
                        </select>
                        <input
                          id="telephone"
                          type="number"
                          name="telephone"
                          value={num}
                          className="telephone"
                          onChange={(e) => setNum(e.target.value)}
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
                      <div className="form_item position-relative">
                        <input
                          id="passwordregister"
                          type={passwordVisible ? "text" : "password"}
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Créer un mot de passe"
                          required
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
                        {password && (
                          <div className="password-strength-meter">
                            <div className="progress">
                              <div
                                className={`password-strength-progress progress-bar ${progressBarColor}`}
                                role="progressbar"
                                value={passwordStrength}
                                max="100"
                                style={progressBarStyle}
                              ></div>
                            </div>
                            <p className="password-strength-text m-0">
                              Force du mot de passe : {passwordStrength}%
                              {message}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="form_item position-relative">
                        <input
                          id="confirmpasswordregister"
                          type={passwordVisiblconfirm ? "text" : "password"}
                          name="confirmepassword"
                          value={cpassword}
                          onChange={(e) => setCpassword(e.target.value)}
                          placeholder="Confirmer votre mot de passe"
                          required
                          disabled={loading}
                        />
                        <label
                          className="position-absolute end-0 translate-middle-y me-2 togglePasswordVisibility"
                          onClick={togglePasswordVisibilityconfirm}
                        >
                          {passwordVisiblconfirm ? (
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
