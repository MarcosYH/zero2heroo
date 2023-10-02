import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
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
                  {/* Contact Form Section - Start
        ================================================== */}
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
                      <form action="#">
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
                                    placeholder="Votre Name"
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
                                    name="telephone"
                                    placeholder="Votre Numéro"
                                  />
                                </div>
                              </div>
                              <div className="col col-md-6">
                                <div className="form_item m-0">
                                  <label
                                    htmlFor="input_jubject"
                                    className="input_title"
                                  >
                                    Sujet
                                  </label>
                                  <select name="subject" id="input_jubject">
                                    <option value="subject" selected>
                                      Choisir le sujet
                                    </option>
                                    <option value="volvo">
                                      Probleme de cours
                                    </option>
                                    <option value="saab">
                                      Probleme d'inscription
                                    </option>
                                    <option value="mercedes">
                                      Question sur zero2hero
                                    </option>
                                    <option value="audi">Audi</option>
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
                                    defaultValue={""}
                                  />
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn_dark w-100 b-block"
                                >
                                  <span>
                                    <small>Envoyez votre message</small>
                                    <small>Envoyez votre message</small>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </section>
                  {/* Contact Form Section - End
        ================================================== */}
                </div>
              </div>
            </div>
          </section>
          {/* Contact Section - End
        ================================================== */}
        </main>
      </div>
    </div>
  );
}
