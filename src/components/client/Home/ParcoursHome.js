import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../../utils/scrollToTop";
export default function ParcoursHome() {
  const dataPath = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad",
      category: "Cybersécurité",
      difficulty: "Débutant",
      duration: "2 semaines",
      title: "Introduction à la Cybersécurité",
    },
    {
      id: 2,
      image: "https://bit.ly/3VpMZCX",
      category: "Cybersécurité",
      difficulty: "Intermédiaire",
      duration: "4 semaines",
      title: "Analyse de Malware",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
      category: "Cybersécurité",
      difficulty: "Avancé",
      duration: "6 semaines",
      title: "Sécurité des Réseaux",
    },
    {
      id: 4,
      image: "https://bit.ly/3RbBQ6d",
      category: "Cybersécurité",
      difficulty: "Expert",
      duration: "8 semaines",
      title: "Hacking Éthique et Tests d'Intrusion",
    },
  ];

  return (
    <div>
      <section className="courses_section section_space_lg">
        <div className="container">
          <div className="section_heading">
            <div className="row align-items-center">
              <div className="col col-md-6">
                <h2 className="heading_text mb-0">Nos Parcours</h2>
              </div>
              <div className="col col-md-6 d-none d-lg-flex justify-content-end">
                <div className="btn_wrap p-0">
                  <Link
                    className="btn border_dark"
                    to="/path"
                    onClick={scrollToTop}
                  >
                    <span>
                      <small>Explorer les parcours</small>
                      <small>Explorer les parcours</small>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-start">
            {dataPath.map((item, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="card h-100 course_card style_2">
                  <div className="image-container">
                    <Link
                      to="/path"
                      className="image-container"
                      onClick={scrollToTop}
                    >
                      <img
                        src={item.image}
                        alt="parcours"
                        className="card-img-top"
                      />
                    </Link>
                  </div>
                  <div className="card-body item_content">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <ul className="list-unstyled mb-0 item_category_list unordered_list">
                        <li>
                          <Link to="#!">{item.category}</Link>
                        </li>
                      </ul>
                    </div>
                    <ul className="meta_info_list unordered_list justify-content-between">
                      <li>
                        <i className="fas fa-chart-bar mr-3" />
                        <span>{item.difficulty}</span>
                      </li>
                      <li>
                        <i className="fas fa-clock" />
                        <span>{item.duration}</span>
                      </li>
                    </ul>
                    <h3 className="item_title">
                      <Link to="/path" onClick={scrollToTop}>
                        {item.title}
                      </Link>
                    </h3>
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
