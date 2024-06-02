import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../../utils/scrollToTop";

export default function CoursHome() {
  const dataCourse = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      category: "Sécurité des Applications Web",
      difficulty: "Intermédiaire",
      duration: "4 heures",
      title: "Introduction à la Sécurité Web",
    },
    {
      id: 2,
      image: "https://bit.ly/3wOP1mG",
      category: "Sécurité Réseau",
      difficulty: "Débutant",
      duration: "3 heures",
      title: "Sécurisation des Applications Web",
    },
    {
      id: 3,
      image: "https://bit.ly/3yPtDhs",
      category: "Sécurité des Applications Web",
      difficulty: "Avancé",
      duration: "6 heures",
      title: "Protection contre les Attaques XSS",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
      category: "Sécurité des Bases de Données",
      difficulty: "Intermédiaire",
      duration: "5 heures",
      title: "Prévention des Injections SQL",
    },
  ];

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
                  <Link
                    className="btn border_dark"
                    to="/course"
                    onClick={scrollToTop}
                  >
                    <span>
                      <small>Explorer les cours</small>
                      <small>Explorer les cours</small>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-start">
            {dataCourse.map((course, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 "
              >
                <div className="card h-100 course_card style_2">
                  <Link to="/course" onClick={() => window.scrollTo(0, 0)}>
                    <div className="image-container">
                      <img
                        src={course.image}
                        alt="cours"
                        className="card-img-top"
                      />
                    </div>
                  </Link>
                  <div className="card-body item_content">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <ul className="list-unstyled mb-0 item_category_list unordered_list">
                        <li>
                          <Link to="#!">{course.category}</Link>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-unstyled d-flex justify-content-between mb-3 meta_info_list unordered_list ">
                      <li>
                        <i className="fas fa-chart-bar mr-1" />
                        <span>{course.difficulty}</span>
                      </li>
                      <li>
                        <i className="fas fa-clock mr-1" />
                        <span>{course.duration}</span>
                      </li>
                    </ul>
                    <h5 className="card-title item_title">
                      <Link to="/course" onClick={() => window.scrollTo(0, 0)}>
                        {course.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
