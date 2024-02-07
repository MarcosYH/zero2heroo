import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/general/Loader";

export default function Temoignage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [testimonial, setTestimonial] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/temoignage/", {
        name,
        email,
        message,
      });
      console.log("Temoignage submitted:", response.data);
      setSubmitted(true);
      setError("");
      window.location.reload();
    } catch (error) {
      console.error(
        "Temoignage submission failed:",
        error.response.data.message
      );
      setError(error.response.data.message);
      setSubmitted(false);
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // Add closing parenthesis here
      try {
        const response = await fetch("http://localhost:3000/temoignage/");

        if (!response.ok) {
          throw new Error("Réponse du serveur non valide");
        }
        const data = await response.json();
        setTestimonial(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des utilisateurs:",
          error
        );
        setIsLoading(true);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="page_wrapper">
        <main className="page_content">
          <section className=" ">
            <div className="container">
              <div className="content_wrapper">
                <div className="row align-items-center">
                  <div className="col col-lg-7 mx-auto">
                    <ul className="breadcrumb_nav unordered_list">
                      <li>
                        <Link to="/">Accueil</Link>
                      </li>
                      <li>Temoignage</li>
                    </ul>
                    <h1 className="page_title text-center">
                      Les témoignages de nos apprenants
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="testimonial_section section_space_lg">
            <div className="container">
              <div className="testimoni">
                <div className=" row">
                  {isLoading ? (
                    <div className="my-4">
                      <Loader />
                    </div>
                  ) : (
                    testimonial.map((testi, index) => (
                      <div key={index} className="col-lg-6 mb-4">
                        <div className="testimonial_item">
                          <div className="testimonial_content">
                            <img
                              src="assets/images/testimonial/profil.png"
                              alt="profil"
                              className="profil"
                            />
                            <h3 className="testimonial_title">
                              {testi.name} 
                            </h3>
                            <p>{testi.message}</p>
                            <span className="quote_icon">
                              <i className="fas fa-quote-right" />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  
                </div>
              </div>
            </div>
          </section>
          <section className="details_section event_details_section">
            <div className="container">
              <div className="row">
                <div className="col col-lg-8 mx-auto">
                  <div className="comment_form_wrap">
                    <div className="section_heading">
                      <h3 className="heading_text">Laisser un commentaire</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col">
                          <div className="form_item mb-0">
                            <label
                              htmlFor="input_message"
                              className="input_title text-uppercase"
                            >
                              Message
                            </label>
                            <textarea
                              id="input_message"
                              name="message"
                              placeholder="Message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col col-md-6">
                          <div className="form_item mb-0">
                            <label htmlFor="input_name" className="input_title">
                              Nom
                            </label>
                            <input
                              id="input_name"
                              type="text"
                              placeholder="Votre Nom"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col col-md-6">
                          <div className="form_item mb-0">
                            <label
                              htmlFor="input_email"
                              className="input_title"
                            >
                              Email
                            </label>
                            <input
                              id="input_email"
                              type="email"
                              placeholder="Votre Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col">
                          <button
                            type="submit"
                            className="btn btn_dark py-3 text-center d-flex justify-center items-center"
                            disabled={loading}
                          >
                            <div className="mr-2 fw-bold">
                              Soumettre un commentaire
                            </div>
                            {loading && (
                              <div
                                className="spinner-border  text-light"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            )}
                          </button>
                        </div>
                      </div>
                      {submitted && (
                        <p className="text-success text-center">
                          Témoignage soumis avec succès!
                        </p>
                      )}
                      {error && (
                        <p className="text-danger text-center">{error}</p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
