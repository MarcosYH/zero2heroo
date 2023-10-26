import React, { useEffect, useState } from "react";
import validateUser from "../../assets/validateUser.jpg";
import notValidatedImage from "../../assets/reniesUser.png";
import { useParams } from "react-router-dom";
import "../../styles/style.css";
import { Link } from "react-router-dom";

export default function ValidateUser() {
  const [isValidated, setIsValidated] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useParams();

  useEffect(() => {
    const activateAccount = async () => {
      try {
        const response = await fetch(
          `https://backend-zro2hero.vercel.app/validateUser/${token}`
        );
        const data = await response.json();

        if (response.status === 200) {
          setIsValidated(true);
          setMessage("Votre compte a été activé avec succès!");
        } else {
          setMessage(
            data.error ||
              "Une erreur s'est produite lors de l'activation du compte."
          );
        }
      } catch (error) {
        console.error(error);
        setMessage("Lien de validation invalide ou expiré");
      } finally {
        setIsLoading(false);
      }
    };

    activateAccount();
  }, [token]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-500 my-10">
          {isLoading ? (
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <span>{message}</span>
          )}
          <br />
          {isValidated ? "Veuillez vous connecter avec vos identifiants." : ""}
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="">
          {isValidated ? (
            <img
              src={validateUser}
              alt="validateUser"
              className="imgvalidate mx-auto"
            />
          ) : isLoading ? (
            <div className="spinner-border text-white" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <img
              src={notValidatedImage}
              alt="notValidatedImage"
              className="imgvalidate mx-auto"
            />
          )}
        </div>
      </div>
      {isValidated && (
        <div className="text-center">
          <Link className="btn border_dark" to="/login" onClick={scrollToTop}>
            <span>
              <small>Connexion</small>
              <small>Connexion</small>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
