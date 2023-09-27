import React from 'react'
import { Link } from 'react-router-dom'

export default function Temoignage() {
  return (
    <div>
      <div className="page_wrapper">
        <main className="page_content">
          {/* Page Section - Start
        ================================================== */}
          <section className=" ">
            <div className="container">
              <div className="content_wrapper">
                <div className="row align-items-center">
                  <div className="col col-lg-7 mx-auto">
                    <ul className="breadcrumb_nav unordered_list">
                      <li><Link to="index.html">Home</Link></li>
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
          {/* Page Section - End
        ================================================== */}
          {/* Event Details Section - Start
        ================================================== */}
          <section className="details_section event_details_section">
            <div className="container">
              <div className="row">
                <div className="col col-lg-8 mx-auto">
                  <div className="section_space_lg pb-0">
                    <div className="pe-lg-5">
                      <div className="details_content">
                        <h3 className="details_info_title">Avis clients</h3>
                        <p>
                          Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Nisl pretium fusce id velit.
                          Tellus orci ac auctor augue mauris. Sed id semper risus in. Nam aliquam sem et tortor. Habitant
                          morbi tristique senectus et netus et malesuada
                        </p>
                        <div className="event_speakers row mb-4">
                          <div className="col col-lg-4">
                            <div className="mentor_item">
                              <div className="mentor_image">
                                <Link to="mentor_details.html">
                                  <img src="assets/images/mentor/mentor_image_1.jpg" alt="Collab – Online Learning Platform" />
                                </Link>
                              </div>
                              <div className="mentor_content">
                                <h3 className="mentor_name">
                                  <Link to="mentor_details.html">Carolyn Jackson</Link>
                                </h3>
                                <p className="mentor_designation mb-0">Fullstack developer</p>
                              </div>
                            </div>
                          </div>
                          <div className="col col-lg-4">
                            <div className="mentor_item">
                              <div className="mentor_image">
                                <Link to="mentor_details.html">
                                  <img src="assets/images/mentor/mentor_image_2.jpg" alt="Collab – Online Learning Platform" />
                                </Link>
                              </div>
                              <div className="mentor_content">
                                <h3 className="mentor_name">
                                  <Link to="mentor_details.html">William Morgan</Link>
                                </h3>
                                <p className="mentor_designation mb-0">Python Mentor</p>
                              </div>
                            </div>
                          </div>
                          <div className="col col-lg-4">
                            <div className="mentor_item">
                              <div className="mentor_image">
                                <Link to="mentor_details.html">
                                  <img src="assets/images/mentor/mentor_image_3.jpg" alt="Collab – Online Learning Platform" />
                                </Link>
                              </div>
                              <div className="mentor_content">
                                <h3 className="mentor_name">
                                  <Link to="mentor_details.html">Christine Nelson</Link>
                                </h3>
                                <p className="mentor_designation mb-0">AQ/Mentor</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="comments_list_wrap mb-5">
                        <div className="section_heading">
                          <h3 className="heading_text">
                            Commentaires des étudiants
                          </h3>
                        </div>
                        <ul className="comments_list unordered_list_block">
                          <li>
                            <div className="comment_item">
                              <div className="comment_author">
                                <div className="author_thumbnail">
                                  <img src="assets/images/meta/student_thumbnail_6.jpg" alt="Collab – Online Learning Platform" />
                                </div>
                                <div className="author_content">
                                  <h4 className="author_name">Carolyn Wallace</h4>
                                  <span className="comment_date">January 27, 2023</span>
                                </div>
                              </div>
                              <p>
                                Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Vitae
                                ultricies leo integer malesuada nunc vel. Nibh cras pulvinar mattis nunc sed. Convallis a
                                cras semper auctor neque vitae tempus. Mattis molestie a iaculis at erat pellentesque
                                adipiscing.
                              </p>
                              <Link className="reply_btn" to="#!"><i className="fas fa-reply" /> Répondre</Link>
                            </div>
                            <ul className="comments_list unordered_list_block">
                              <li>
                                <div className="comment_item">
                                  <div className="comment_author">
                                    <div className="author_thumbnail">
                                      <img src="assets/images/meta/testimonial_thumbnail_1.jpg" alt="Collab – Online Learning Platform" />
                                    </div>
                                    <div className="author_content">
                                      <h4 className="author_name">Ray Cooper</h4>
                                      <span className="comment_date">January 27, 2023</span>
                                    </div>
                                  </div>
                                  <p>
                                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                                    Vitae ultricies leo integer malesuada nunc vel. Nibh cras pulvinar mattis nunc sed.
                                    Convallis a cras semper auctor neque vitae tempus. Mattis molestie a iaculis at erat
                                    pellentesque adipiscing.
                                  </p>
                                  <Link className="reply_btn" to="#!"><i className="fas fa-reply" /> Répondre</Link>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <div className="comment_item">
                              <div className="comment_author">
                                <div className="author_thumbnail">
                                  <img src="assets/images/meta/student_thumbnail_7.jpg" alt="Collab – Online Learning Platform" />
                                </div>
                                <div className="author_content">
                                  <h4 className="author_name">Marrion Willsoriam</h4>
                                  <span className="comment_date">January 27, 2023</span>
                                </div>
                              </div>
                              <p>
                                Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Vitae
                                ultricies leo integer malesuada nunc vel. Nibh cras pulvinar mattis nunc sed. Convallis a
                                cras semper auctor neque vitae tempus. Mattis molestie a iaculis at erat pellentesque
                                adipiscing.
                              </p>
                              <Link className="reply_btn" to="#!"><i className="fas fa-reply" /> Répondre</Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="comment_form_wrap">
                        <div className="section_heading">
                          <h3 className="heading_text">
                            Laisser une réponse
                          </h3>
                        </div>
                        <form action="#">
                          <div className="row">
                            <div className="col">
                              <div className="form_item mb-0">
                                <label htmlFor="input_message" className="input_title text-uppercase">Message</label>
                                <textarea id="input_message" name="message" placeholder="Message" defaultValue={""} />
                              </div>
                            </div>
                            <div className="col col-md-6">
                              <div className="form_item mb-0">
                                <label htmlFor="input_name" className="input_title">Nom</label>
                                <input id="input_name" type="text" placeholder="Votre Nom" />
                              </div>
                            </div>
                            <div className="col col-md-6">
                              <div className="form_item mb-0">
                                <label htmlFor="input_email" className="input_title">Email</label>
                                <input id="input_email" type="email" placeholder="Votre Email" />
                              </div>
                            </div>
                            <div className="col">
                              <div className="checkbox_item">
                                <input id="checkbox_remember" type="checkbox" />
                                <label htmlFor="checkbox_remember">Enregistrer mon nom, mon adresse électronique et mon site web dans ce navigateur pour la prochaine fois que je commente.
                                  prochaine fois que je commenterai.</label>
                              </div>
                              <button type="submit" className="btn btn_dark">
                                <span>
                                  <small>Soumettre un commentaire</small>
                                  <small>Soumettre un commentaire</small>
                                </span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Event Details Section - End
        ================================================== */}
          {/* Policy Section - Start
        ================================================== */}
          <section className="policy_section section_space_lg">
            <div className="container position-relative">
              <div className="section_heading text-center">
                <h2 className="heading_text mb-0">
                  Flexibilité dans la planification et l'enseignement
                </h2>
              </div>
              <div className="row">
                <div className="col col-lg-3">
                  <div className="iconbox_item">
                    <div className="title_wrap">
                      <div className="item_icon bg_dark">
                        <i className="fas fa-book-open" />
                      </div>
                      <h3 className="item_title mb-0">
                        <span className="d-block">Attribuer du temps</span>
                        pour l'étude
                      </h3>
                    </div>
                    <p className="mb-0">
                      Etiam sit amet nisl purus in mollis nunc sed. Viverra nibh cras pulvinar mattis nunc sed blandit
                      libero volutpat
                    </p>
                  </div>
                </div>
                <div className="col col-lg-3">
                  <div className="iconbox_item">
                    <div className="title_wrap">
                      <div className="item_icon bg_dark">
                        <i className="fas fa-code-branch" />
                      </div>
                      <h3 className="item_title mb-0">
                        <span className="d-block">Formats d'apprentissage alternatifs </span>
                      </h3>
                    </div>
                    <p className="mb-0">
                      Posuere ac ut consequat semper viverra nam libero justo. Semper feugiat nibh sed pulvinar proin
                      gravida hendrerit
                    </p>
                  </div>
                </div>
                <div className="col col-lg-3">
                  <div className="iconbox_item">
                    <div className="title_wrap">
                      <div className="item_icon bg_dark">
                        <i className="fas fa-comment-smile" />
                      </div>
                      <h3 className="item_title mb-0">
                        <span className="d-block">Des mentors avec plus de 5
                          ans d'expérience</span>
                      </h3>
                    </div>
                    <p className="mb-0">
                      Nunc sed velit dignissim sodales ut eu sem. Id faucibus nisl tincidunt eget. Nunc non blandit massa
                      enim
                    </p>
                  </div>
                </div>
                <div className="col col-lg-3">
                  <div className="iconbox_item">
                    <div className="title_wrap">
                      <div className="item_icon bg_dark">
                        <i className="fas fa-user-graduate" />
                      </div>
                      <h3 className="item_title mb-0">
                        <span className="d-block">Suivre la formation</span>
                      </h3>
                    </div>
                    <p className="mb-0">
                      Tincidunt vitae semper quis lectus nulla at. Eget lorem dolor sed viverra ipsum nunc. Tellus at urna
                      condimentum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Policy Section - End
        ================================================== */}
        </main>
      </div>
    </div>
  )
}
