import React from "react";
import { Link } from "react-router-dom";

export default function Cours() {
  return (
    <div>
      <div className="page_wrapper">
        <main className="page_content">
          <section className="">
            <div className="container">
              <div className="content_wrapper">
                <div className="row align-items-center">
                  <div className="col col-lg-6">
                    <ul className="breadcrumb_nav unordered_list">
                      <li>
                        <Link to="/">Accueil</Link>
                      </li>
                      <li>Cours</li>
                    </ul>
                    <h1 className="page_title animate__animated animate__fadeIn">Nos cours</h1>
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
          <section className="courses_archive_section mb-5">
            <div className="container">
              <div className="row">
                <div className="col col-lg-4">
                  <div className="course_card style_2">
                    <div className="item_image">
                      <Link to="/course">
                        <img
                          src="assets/images/course/course_image_4.png"
                          alt="course_image_4"
                        />
                      </Link>
                    </div>
                    <div className="item_content">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <ul className="item_category_list unordered_list">
                          <li>
                            <Link to="#!">Categorie</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="meta_info_list unordered_list justify-content-between">
                        <li>
                          <i className="fas fa-chart-bar mr-3" />
                          <span>Difficulté</span>
                        </li>
                        <li>
                          <i className="fas fa-clock" />
                          <span>Durée</span>
                        </li>
                        <li>
                          <i class="fas fa-unlock" />
                          <span>Gratuit</span>
                        </li>
                      </ul>
                      <h3 className="item_title">
                        <Link to="/course">Titre du cours</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="course_card style_2">
                    <div className="item_image">
                      <Link to="/course">
                        <img
                          src="assets/images/course/course_image_4.png"
                          alt="course_image_4"
                        />
                      </Link>
                    </div>
                    <div className="item_content">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <ul className="item_category_list unordered_list">
                          <li>
                            <Link to="#!">Categorie</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="meta_info_list unordered_list justify-content-between">
                        <li>
                          <i className="fas fa-chart-bar mr-3" />
                          <span>Difficulté</span>
                        </li>
                        <li>
                          <i className="fas fa-clock" />
                          <span>Durée</span>
                        </li>
                        <li>
                          <i class="fas fa-lock" />
                          <span>payant</span>
                        </li>
                      </ul>
                      <h3 className="item_title">
                        <Link to="/course">Titre du cours</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="course_card style_2">
                    <div className="item_image">
                      <Link to="/course">
                        <img
                          src="assets/images/course/course_image_4.png"
                          alt="course_image_4"
                        />
                      </Link>
                    </div>
                    <div className="item_content">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <ul className="item_category_list unordered_list">
                          <li>
                            <Link to="#!">Categorie</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="meta_info_list unordered_list justify-content-between">
                        <li>
                          <i className="fas fa-chart-bar mr-3" />
                          <span>Difficulté</span>
                        </li>
                        <li>
                          <i className="fas fa-clock" />
                          <span>Durée</span>
                        </li>
                        <li>
                          <i class="fas fa-lock" />
                          <span>payant</span>
                        </li>
                      </ul>
                      <h3 className="item_title">
                        <Link to="/course">Titre du cours</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="course_card style_2">
                    <div className="item_image">
                      <Link to="/course">
                        <img
                          src="assets/images/course/course_image_4.png"
                          alt="course_image_4"
                        />
                      </Link>
                    </div>
                    <div className="item_content">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <ul className="item_category_list unordered_list">
                          <li>
                            <Link to="#!">Categorie</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="meta_info_list unordered_list justify-content-between">
                        <li>
                          <i className="fas fa-chart-bar mr-3" />
                          <span>Difficulté</span>
                        </li>
                        <li>
                          <i className="fas fa-clock" />
                          <span>Durée</span>
                        </li>
                        <li>
                          <i class="fas fa-lock" />
                          <span>payant</span>
                        </li>
                      </ul>
                      <h3 className="item_title">
                        <Link to="/course">Titre du cours</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="course_card style_2">
                    <div className="item_image">
                      <Link to="/course">
                        <img
                          src="assets/images/course/course_image_4.png"
                          alt="course_image_4"
                        />
                      </Link>
                    </div>
                    <div className="item_content">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <ul className="item_category_list unordered_list">
                          <li>
                            <Link to="#!">Categorie</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="meta_info_list unordered_list justify-content-between">
                        <li>
                          <i className="fas fa-chart-bar mr-3" />
                          <span>Difficulté</span>
                        </li>
                        <li>
                          <i className="fas fa-clock" />
                          <span>Durée</span>
                        </li>
                        <li>
                          <i class="fas fa-lock" />
                          <span>payant</span>
                        </li>
                      </ul>
                      <h3 className="item_title">
                        <Link to="/course">Titre du cours</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="course_card style_2">
                    <div className="item_image">
                      <Link to="/course">
                        <img
                          src="assets/images/course/course_image_4.png"
                          alt="course_image_4"
                        />
                      </Link>
                    </div>
                    <div className="item_content">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <ul className="item_category_list unordered_list">
                          <li>
                            <Link to="#!">Categorie</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="meta_info_list unordered_list justify-content-between">
                        <li>
                          <i className="fas fa-chart-bar mr-3" />
                          <span>Difficulté</span>
                        </li>
                        <li>
                          <i className="fas fa-clock" />
                          <span>Durée</span>
                        </li>
                        <li>
                          <i class="fas fa-lock" />
                          <span>payant</span>
                        </li>
                      </ul>
                      <h3 className="item_title">
                        <Link to="/course">Titre du cours</Link>
                      </h3>
                    </div>
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
