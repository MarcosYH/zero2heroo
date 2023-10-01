import React from "react";
import { Link } from "react-router-dom";

export default function IntroVideo() {
  return (
    <div>
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
                    width={860}
                    height={345}
                    src="https://www.youtube.com/embed/jkLbPCICidY?si=nnl-KPf0bTcYKGAc"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </Link>
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
                  dernières avancées en matière de pratiques modernes de codage
                  sécurisé.
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
                  environnements de développement créés en quelques secondes et
                  accessibles par le biais d'un navigateur web.
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
                  inadéquats - c'est pourquoi des vulnérabilités vieilles de 20
                  ans existent toujours.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}
