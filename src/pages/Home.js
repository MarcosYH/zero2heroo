import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="page_wrapper">
        {/* Main Body - Start
      ================================================== */}
        <main className="page_content">
          {/* Banner Section - Start
        ================================================== */}
          <section
            className="hero_banner style_2 mouse_move"
            style={{
              backgroundImage: 'url("assets/images/shape/shape_img_6.svg")',
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col col-lg-6">
                  <h1 className="banner_big_title">
                    Devenez un hero en securité web !
                  </h1>
                  <p className="banner_description">
                    Testez vos connaissances en sécurité Web avec nos
                    environnements de test. Apprenez, appliquez et testez vos
                    connaissances en suivant nos cours en securité pour être un
                    héro du domaine.{" "}
                  </p>
                  <p>
                    {" "}
                    Vous aurez à travailler dans des laboratoires
                    d'environnements virtuels sur des technologies telles que :
                  </p>
                  <ul className="tags_list unordered_list">
                    <li>
                      <Link to="#!">JAVA</Link>
                    </li>
                    <li>
                      <Link to="#!">PYTHON</Link>
                    </li>
                    <li>
                      <Link to="#!">JavaScript</Link>
                    </li>
                    <li>
                      <Link to="#!">C++</Link>
                    </li>
                    <li>
                      <Link to="#!">Vuejs</Link>
                    </li>
                    <li>
                      <Link to="#!">Ruby</Link>
                    </li>
                    <li>
                      <Link to="#!">Reactjs</Link>
                    </li>
                    <li>
                      <Link to="#!">Django</Link>
                    </li>
                    <li>
                      <Link to="#!">Angular</Link>
                    </li>
                    <li>
                      <Link to="#!">Wordpress</Link>
                    </li>
                  </ul>
                </div>
                <div className="col col-lg-6">
                  <div className="banner_image_2">
                    <div className=" ">
                      <div className="layer" data-depth="0.1">
                        <img
                          src="assets/images/banner/hero_banner_img_2.png"
                          alt="hero_banner_img_2"
                        />
                      </div>
                    </div>
                    <div className="child_image ">
                      <div className="layer" data-depth="0.3">
                        <img
                          src="assets/images/banner/hero_banner_img_3.png"
                          alt="hero_banner_img_3"
                        />
                      </div>
                    </div>
                    <div className="child_image image_wrap_3">
                      <div className="layer" data-depth="0.2">
                        <img
                          src="assets/images/banner/hero_banner_img_4.png"
                          alt="hero_banner_img_4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Banner Section - End
        ================================================== */}
          {/* Intro Video Section - Start
        ================================================== */}
          <section className="intro_video_section section_space_lg bg_light_2 overflow-hidden decoration_wrap">
            <div className="container position-relative">
              <div className="section_heading text-center">
                <h2 className="heading_text mb-0">
                  Nos cours sont adaptés à tout le monde...
                </h2>
              </div>
              <div className="intro_video">
                <div className="video_wrap tilt">
                  <img
                    src="assets/images/video/video_poster_1.png"
                    alt="video_poster_1"
                  />
                  <Link className="video_play_btn popup_video" to="#">
                    <div>
                      <iframe
                        width={760}
                        height={315}
                        src="https://www.youtube.com/embed/jkLbPCICidY?si=nnl-KPf0bTcYKGAc"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </Link>
                  {/* <Link class="video_play_btn popup_video" to="#">
                <span class="icon"><i class="fas fa-play"></i></span>
              </Link> */}
                </div>
              </div>
              <div className="row">
                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="iconbox_item">
                    <div className="title_wrap">
                      <div className="item_icon">
                        <img
                          src="assets/images/icon/icon_about1.png"
                          alt="icon_about1"
                        />
                      </div>
                      <h3 className="item_title mb-0">
                        Apprendre la
                        <span className="d-block">
                          Programmation défensive, vulnérabilités réelles.
                        </span>
                      </h3>
                    </div>
                    <p className="mb-0">
                      Notre plateforme évolue en permanence pour intégrer les
                      dernières avancées en matière de pratiques modernes de
                      codage sécurisé.
                    </p>
                  </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="iconbox_item">
                    <div className="title_wrap">
                      <div className="item_icon">
                        <img
                          src="assets/images/icon/icon_about2.png"
                          alt="icon_about2"
                        />
                      </div>
                      <h3 className="item_title mb-0">
                        Exercez vous avec des
                        <span className="d-block">
                          Tests réels et environnements transparents
                        </span>
                      </h3>
                    </div>
                    <p className="mb-0">
                      Les laboratoires se déroulent dans de véritables
                      environnements de développement créés en quelques secondes
                      et accessibles par le biais d'un navigateur web.
                    </p>
                  </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="iconbox_item">
                    <div className="title_wrap">
                      <div className="item_icon">
                        <img
                          src="assets/images/icon/icon_about3.png"
                          alt="icon_about3"
                        />
                      </div>
                      <h3 className="item_title mb-0">
                        Pas de longs
                        <span className="d-block">
                          Cours ennuyeux sur le codage sécurisé
                        </span>
                      </h3>
                    </div>
                    <p className="mb-0">
                      Les questionnaires, les diapositives et les vidéos sont
                      inadéquats - c'est pourquoi des vulnérabilités vieilles de
                      20 ans existent toujours.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Intro Video Section - End
        ================================================== */}
          {/* Courses Section - Start
        ================================================== */}
          <section className="courses_section section_space_lg">
            <div className="container">
              <div className="section_heading">
                <div className="row align-items-center">
                  <div className="col col-md-6">
                    <h2 className="heading_text mb-0">Nos cours</h2>
                  </div>
                  <div className="col col-md-6 d-none d-lg-flex justify-content-end">
                    <div className="btn_wrap p-0">
                      <Link className="btn border_dark" to="course.html">
                        <span>
                          <small>Explorer les cours</small>
                          <small>Explorer les cours</small>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col col-lg-4">
                  <div className="course_card style_2">
                    <div className="item_image">
                      <Link to="course_details.html">
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
                      <Link to="course_details.html">
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
                  <div className="course_card">
                    <div className="item_image">
                      <Link to="course_details.html">
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
              </div>
            </div>
          </section>
          {/* Courses Section - End
        ================================================== */}
          {/* LabTechnologique Section - Start
        ================================================== */}
          <section className="labTechno">
            <div className="container">
              <h3 className=" text-center">Lab Technologique</h3>
              <div className="d-flex flex-wrap col-md-8 mx-auto justify-content-center">
                <div className=" col-3">
                  <div className=" d-flex justify-content-center">
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_flutter.png"
                        alt="icon_flutter"
                        className="icon_lab"
                      />
                    </div>
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_js.png"
                        alt="icon_js"
                        className="icon_lab"
                      />
                    </div>
                  </div>
                  <div className=" d-flex justify-content-center">
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_ts.png"
                        alt="icon_ts"
                        className="icon_lab"
                      />
                    </div>
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_php.png"
                        alt="icon_php"
                        className="icon_lab"
                      />
                    </div>
                  </div>
                  <div className=" d-flex justify-content-center">
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_angular.png"
                        alt="icon_angular"
                        className="icon_lab"
                      />
                    </div>
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_vuejs.png"
                        alt="icon_vuejs"
                        className="icon_lab"
                      />
                    </div>
                  </div>
                </div>
                <div className=" col-3">
                  <div className=" d-flex justify-content-center">
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_docker.png"
                        alt="icon_docker"
                      />
                    </div>
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_reactjs.png"
                        alt="icon_reactjs"
                      />
                    </div>
                  </div>
                  <div className="  d-flex justify-content-center">
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_nextjs.png"
                        alt="icon_nextjs"
                      />
                    </div>
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_nodejs.png"
                        alt="icon_nodejs"
                      />
                    </div>
                  </div>
                  <div className="  d-flex justify-content-center">
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_mongodb.png"
                        alt="icon_mongodb"
                      />
                    </div>
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_andoid.png"
                        alt="icon_andoid"
                      />
                    </div>
                  </div>
                </div>
                <div className=" col-3">
                  <div className="  d-flex justify-content-center">
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_taillwind.png"
                        alt="icon_taillwind"
                      />
                    </div>
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_firebase.png"
                        alt="icon_firebase"
                      />
                    </div>
                  </div>
                  <div className="  d-flex justify-content-center">
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_c.png"
                        alt="icon_c"
                      />
                    </div>
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_aws.png"
                        alt="icon_aws"
                      />
                    </div>
                  </div>
                  <div className="  d-flex justify-content-center">
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_html5.png"
                        alt="icon_html5"
                      />
                    </div>
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_rubi.png"
                        alt="icon_rubi"
                      />
                    </div>
                  </div>
                </div>
                <div className=" col-3">
                  <div className="  d-flex justify-content-center">
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_django.png"
                        alt="icon_django"
                      />
                    </div>
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_java.png"
                        alt="icon_java"
                      />
                    </div>
                  </div>
                  <div className="  d-flex justify-content-center">
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_wordpress.png"
                        alt="icon_wordpress"
                      />
                    </div>
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_sql.png"
                        alt="icon_sql"
                      />
                    </div>
                  </div>
                  <div className="  d-flex justify-content-center">
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_c2.png"
                        alt="icon_c2"
                      />
                    </div>
                    <div className=" col">
                      <img
                        src="assets/images/icon_lab/icon_html3.png"
                        alt="icon_html3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* LabTechnologique Section - End
        ================================================== */}
          {/* Newslatter Section - Start
        ================================================== */}
          <section className="newslatter_section">
            <div className="container">
              <div
                className="newslatter_box"
                style={{
                  backgroundImage:
                    'url("assets/images/shape/shape_img_6_custom.svg")',
                }}
              >
                <div className="row justify-content-center">
                  <div className="col col-lg-6">
                    <div className="section_heading text-center">
                      <h2 className="heading_text">
                        Entrez votre email pour suivre nos actualités.
                      </h2>
                      <p className="heading_description mb-0">
                        Recevez les dernières actualités et mises à jour
                        directement dans votre boîte de réception. Restez
                        informé(e) en vous abonnant à notre newsletter{" "}
                      </p>
                    </div>
                    <form action="#">
                      <div className="form_item m-0">
                        <input
                          type="email"
                          name="email"
                          placeholder="Votre email"
                        />
                        <button type="submit" className="btn btn_dark">
                          <span>
                            <small>S'abonner</small>
                            <small>S'abonner</small>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Newslatter Section - End
        ================================================== */}
        </main>
        {/* Main Body - End
      ================================================== */}
      </div>
    </div>
  );
}
