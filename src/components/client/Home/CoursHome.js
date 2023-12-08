import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop  } from "../../../utils/scrollToTop";

export default function CoursHome() {
  return (
    <div>
      <section className="courses_section section_space_lg">
        <div className="container">
          <div className="section_heading">
            <div className="row align-items-center">
              <div className="col col-md-6">
                <h2 className="heading_text mb-0">Nos cours</h2>
              </div>
              <div className="col col-md-6 d-none d-lg-flex justify-content-end">
                <div className="btn_wrap p-0">
                  <Link className="btn border_dark" to="/course" onClick={scrollToTop}>
                    <span>
                      <small>Explorer les cours</small>
                      <small>Explorer les cours</small>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-lg-4">
              <div className="course_card style_2">
                <div className="item_image">
                  <Link to="/course" onClick={scrollToTop}>
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
                  </ul>
                  <h3 className="item_title">
                    <Link to="/course" onClick={scrollToTop}>Titre du cours</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col col-lg-4">
              <div className="course_card style_2">
                <div className="item_image">
                  <Link to="/course" onClick={scrollToTop}>
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
                  </ul>
                  <h3 className="item_title">
                    <Link to="/course" onClick={scrollToTop}>Titre du cours</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col col-lg-4">
              <div className="course_card style_2">
                <div className="item_image">
                  <Link to="/course" onClick={scrollToTop}>
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
                  </ul>
                  <h3 className="item_title">
                    <Link to="/course" onClick={scrollToTop}>Titre du cours</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
