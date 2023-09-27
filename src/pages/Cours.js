import React from "react";
import { Link } from "react-router-dom";

export default function Cours() {
  return (
    <div>
      <div className="page_wrapper">
        <main className="page_content">
          {/* Page Section - Start
        ================================================== */}
          <section className="page_banner">
            <div className="container">
              <div className="content_wrapper">
                <div className="row align-items-center">
                  <div className="col col-lg-6">
                    <ul className="breadcrumb_nav unordered_list">
                      <li>
                        <Link to="index.html">Accueil</Link>
                      </li>
                      <li>Cours</li>
                    </ul>
                    <h1 className="page_title">Nos cours</h1>
                    <p className="page_description">
                      Egestas sed tempus urna et pharetra. Leo integer malesuada
                      nunc vel. Libero id faucibus nisl tincidunt eget nullam
                      non nisi. Faucibus turpis in eu mi bibendum neque egestas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Page Section - End
        ================================================== */}
          {/* Courses Archive Section - Start
        ================================================== */}
          <section className="courses_archive_section section_space_lg">
            <div className="container">
              <div className="row">
                <div className="col col-lg-4">
                  <div className="course_card style_2">
                    <div className="item_image">
                      <Link to="course_details.html" data-cursor-text="Voir">
                        <img
                          src="assets/images/course/course_image_4.jpg"
                          alt="course_image_4"
                        />
                      </Link>
                    </div>
                    <div className="item_content">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <ul className="item_category_list unordered_list">
                          <li>
                            <Link to="#!">Détection de faille</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="meta_info_list unordered_list">
                        <li>
                          <i className="fas fa-chart-bar" />
                          <span>Debutant</span>
                        </li>
                        <li>
                          <i className="fas fa-clock" />
                          <span>120 Heures</span>
                        </li>
                      </ul>
                      <h3 className="item_title">
                        <Link to="course_details.html">
                          Introduction a la cyber securité
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="course_card">
                    <div className="item_image">
                      <Link to="course_details.html" data-cursor-text="Voir">
                        <img
                          src="assets/images/course/course_image_6.jpg"
                          alt="course_image_6"
                        />
                      </Link>
                    </div>
                    <div className="item_content">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <ul className="item_category_list unordered_list">
                          <li>
                            <Link to="#!">hacking</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="meta_info_list unordered_list">
                        <li>
                          <i className="fas fa-chart-bar" />
                          <span>Amateur</span>
                        </li>
                        <li>
                          <i className="fas fa-clock" />
                          <span>120 Heures</span>
                        </li>
                      </ul>
                      <h3 className="item_title">
                        <Link to="course_details.html">
                          Data Science security
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="course_card">
                    <div className="item_image">
                      <Link to="course_details.html" data-cursor-text="Voir">
                        <img
                          src="assets/images/course/course_image_5.jpg"
                          alt="course_image_5"
                        />
                      </Link>
                    </div>
                    <div className="item_content">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <ul className="item_category_list unordered_list">
                          <li>
                            <Link to="#!">security ssl</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="meta_info_list unordered_list">
                        <li>
                          <i className="fas fa-chart-bar" />
                          <span>Amateur</span>
                        </li>
                        <li>
                          <i className="fas fa-clock" />
                          <span>120 Heures</span>
                        </li>
                      </ul>
                      <h3 className="item_title">
                        <Link to="course_details.html">
                          Pratique cyber securité web
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="course_card style_2">
                    <div className="item_image">
                      <Link to="course_details.html" data-cursor-text="Voir">
                        <img
                          src="assets/images/course/course_image_4.jpg"
                          alt="course_image_4"
                        />
                      </Link>
                    </div>
                    <div className="item_content">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <ul className="item_category_list unordered_list">
                          <li>
                            <Link to="#!">Détection de faille</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="meta_info_list unordered_list">
                        <li>
                          <i className="fas fa-chart-bar" />
                          <span>Debutant</span>
                        </li>
                        <li>
                          <i className="fas fa-clock" />
                          <span>120 Heures</span>
                        </li>
                      </ul>
                      <h3 className="item_title">
                        <Link to="course_details.html">
                          Introduction a la cyber securité
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="course_card">
                    <div className="item_image">
                      <Link to="course_details.html" data-cursor-text="Voir">
                        <img
                          src="assets/images/course/course_image_6.jpg"
                          alt="course_image_6"
                        />
                      </Link>
                    </div>
                    <div className="item_content">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <ul className="item_category_list unordered_list">
                          <li>
                            <Link to="#!">hacking</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="meta_info_list unordered_list">
                        <li>
                          <i className="fas fa-chart-bar" />
                          <span>Amateur</span>
                        </li>
                        <li>
                          <i className="fas fa-clock" />
                          <span>120 Heures</span>
                        </li>
                      </ul>
                      <h3 className="item_title">
                        <Link to="course_details.html">
                          Data Science security
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="course_card">
                    <div className="item_image">
                      <Link to="course_details.html" data-cursor-text="Voir">
                        <img
                          src="assets/images/course/course_image_5.jpg"
                          alt="course_image_5"
                        />
                      </Link>
                    </div>
                    <div className="item_content">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <ul className="item_category_list unordered_list">
                          <li>
                            <Link to="#!">security ssl</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="meta_info_list unordered_list">
                        <li>
                          <i className="fas fa-chart-bar" />
                          <span>Amateur</span>
                        </li>
                        <li>
                          <i className="fas fa-clock" />
                          <span>120 Heures</span>
                        </li>
                      </ul>
                      <h3 className="item_title">
                        <Link to="course_details.html">
                          Pratique cyber securité web
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagination_wrap">
                <ul className="pagination_nav unordered_list">
                  <li>
                    <Link to="#!">
                      <i className="fas fa-long-arrow-left" />
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="#!">1</Link>
                  </li>
                  <li>
                    <Link to="#!">2</Link>
                  </li>
                  <li>
                    <Link to="#!">3</Link>
                  </li>
                  <li>
                    <Link to="#!">...</Link>
                  </li>
                  <li>
                    <Link to="#!">12</Link>
                  </li>
                  <li>
                    <Link to="#!">
                      <i className="fas fa-long-arrow-right" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* Courses Archive Section - End
        ================================================== */}
        </main>
      </div>
    </div>
  );
}
