import React from "react";
import { Link } from "react-router-dom";

export default function Cours() {
  const dataCourses = [
    {
      id: 1,
      image: "https://bit.ly/3V9oGHM",
      category: "Sécurité Web",
      difficulty: "Intermédiaire",
      duration: "4 heures",
      title: "Base de la Sécurité Web",
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
                    <h1 className="page_title animate__animated animate__fadeIn">
                      Nos cours
                    </h1>
                    <p className="page_description">
                      Nous disposons d'une collection de cours de test pour vous
                      aider à mettre à l'épreuve vos compétences en sécurité
                      web.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="courses_archive_section mb-5">
            <div className="container">
              <div className="row">
                {dataCourses.map((course, index) => (
                  <div key={index} className="col col-lg-4">
                    <div className="card h-100 course_card style_2">
                      <Link to="/login">
                        <div className="image-container">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="card-img-top"
                          />
                        </div>
                      </Link>
                      <div className="card-body item_content">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <ul className="item_category_list unordered_list">
                            <li>
                              <Link to="#!">{course.category}</Link>
                            </li>
                          </ul>
                        </div>
                        <ul className="meta_info_list unordered_list justify-content-between">
                          <li>
                            <i className="fas fa-chart-bar mr-3" />
                            <span>{course.difficulty}</span>
                          </li>
                          <li>
                            <i className="fas fa-clock" />
                            <span>{course.duration}</span>
                          </li>
                          <li>
                            <i className="fas fa-unlock" />
                            <span>Gratuit</span>
                          </li>
                        </ul>
                        <h3 className="item_title">
                          <Link to="/course">{course.title}</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
