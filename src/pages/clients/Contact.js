import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/contact", {
        name,
        email,
        phone,
        sujet: subject,
        message,
      });
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");

      console.log("Message sent:", response.data);
      setSubmitted(true);
      setError("");
    } catch (error) {
      console.error("Message sending failed:", error.response.data.error);
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="page_wrapper">
        <main className="page_content">
          <section className="page_banner">
            <div className="container">
              <div
                className="content_wrapper"
                style={{
                  backgroundImage:
                    'url("assets/images/banner/page_banner_image.png")',
                }}
              >
                <div className="row align-items-center">
                  <div className="col col-lg-6">
                    <ul className="breadcrumb_nav unordered_list">
                      <li>
                        <Link to="/">Accueil</Link>
                      </li>
                      <li>Contact</li>
                    </ul>
                    <h1 className="page_title">Contacts</h1>
                    <p className="page_description">
                      Contactez-nous pour toute question, suggestion ou demande
                      d'assistance. Notre équipe est là pour vous aider à
                      renforcer vos compétences en sécurité web
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="contact_section section_space_lg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col col-lg-4">
                  <div className="pe-lg-5">
                    <div className="iconbox_item contact_info_iconbox">
                      <div className="item_icon">
                        <i className="fas fa-phone" />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Appelez-nous</h3>
                        <p className="mb-0">(229) 69 07 07 35</p>
                        <p className="mb-0">(102) 333 234 674</p>
                      </div>
                    </div>
                    <div className="iconbox_item contact_info_iconbox">
                      <div className="item_icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Adresse Email</h3>
                        <p className="mb-0">infozero2hero@gmail.com</p>
                      </div>
                    </div>
                    <div className="iconbox_item contact_info_iconbox">
                      <div className="item_icon">
                        <i className="fas fa-location-dot" />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Nous joindre</h3>
                        <p className="mb-0">31 Sunset Road, Gales Ferry, </p>
                        <p className="mb-0">6335 United States</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-8">
                  <section className=" decoration_wrap overflow-hidden">
                    <div className="container decoration_wrap">
                      <div className="row justify-content-center">
                        <div className="col">
                          <div className="section_heading text-center">
                            <h2 className="heading_text mb-0">
                              Contactez notre équipe d'assistance pour savoir ce
                              que vous voulez
                            </h2>
                          </div>
                        </div>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="row justify-content-center">
                          <div className="col col-lg-12">
                            <div className="row">
                              <div className="col col-md-6">
                                <div className="form_item m-0">
                                  <label
                                    htmlFor="input_name"
                                    className="input_title"
                                  >
                                    Nom
                                  </label>
                                  <input
                                    id="input_name"
                                    type="text"
                                    name="name"
                                    placeholder="Votre Nom"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col col-md-6">
                                <div className="form_item m-0">
                                  <label
                                    htmlFor="input_email"
                                    className="input_title"
                                  >
                                    Email
                                  </label>
                                  <input
                                    id="input_email"
                                    type="email"
                                    name="email"
                                    placeholder="Votre Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col col-md-6">
                                <div className="form_item m-0">
                                  <label
                                    htmlFor="input_phone"
                                    className="input_title"
                                  >
                                    Téléphone
                                  </label>
                                  <input
                                    id="input_phone"
                                    type="tel"
                                    name="phone"
                                    placeholder="Votre Numéro"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col col-md-6">
                                <div className="form_item m-0">
                                  <label
                                    htmlFor="input_subject"
                                    className="input_title"
                                  >
                                    Sujet
                                  </label>
                                  <select
                                    id="input_subject"
                                    name="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                  >
                                    <option value="">Choisir le sujet</option>
                                    <option value="probleme_de_cours">
                                      Problème de cours
                                    </option>
                                    <option value="probleme_d_inscription">
                                      Problème d'inscription
                                    </option>
                                    <option value="question_sur_zero2hero">
                                      Question sur Zero2Hero
                                    </option>
                                    <option value="autre">Autre</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col">
                                <div className="form_item">
                                  <label
                                    htmlFor="input_message"
                                    className="input_title"
                                  >
                                    Message
                                  </label>
                                  <textarea
                                    id="input_message"
                                    name="message"
                                    placeholder="Tapez votre message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                  />
                                </div>
                                {submitted && (
                                  <p className="text-success fw-bold text-center">
                                    Merci de nous avoir envoyé votre
                                    préoccupation, <br /> nous vous répondrons
                                    dans moins de 24h 😊.
                                  </p>
                                )}
                                {error && (
                                  <p className="text-danger">{error}</p>
                                )}
                                <button
                                  type="submit"
                                  className="btn btn_dark py-3 text-center d-flex justify-center items-center w-100"
                                  disabled={loading}
                                >
                                  <div className="mr-2 fw-bold">
                                    Envoyez votre message
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
                          </div>
                        </div>
                      </form>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
