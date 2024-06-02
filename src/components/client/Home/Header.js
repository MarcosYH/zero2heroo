import React from "react";
import { Link } from "react-router-dom";
import TypingAnimation from "../../magicui/typing-animation";

export default function Header() {
  return (
    <div>
      <section
        className="hero_banner style_2 mouse_move"
        style={{
          backgroundImage: 'url("assets/images/shape/shape_img_6.svg")',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-6 animate__animated animate__backInLeft">
              <h1 className="banner_big_title">
                <TypingAnimation
                  className="banner_big_title"
                  text="Devenez un héro en securité web !"
                />
              </h1>
              <p className="banner_description">
                Testez vos connaissances en sécurité Web avec nos environnements
                de test. Apprenez, appliquez et testez vos connaissances en
                suivant nos cours en securité pour être un héro du domaine.
              </p>
              <p>
                Vous aurez à travailler dans des laboratoires d'environnements{" "}
                <br />
                virtuels sur des technologies telles que :
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
                      className="animate__animated animate__backInRight"
                    />
                  </div>
                </div>
                <div className="child_image ">
                  <div className="layer" data-depth="0.3">
                    <img
                      src="assets/images/banner/hero_banner_img_3.png"
                      alt="hero_banner_img_3"
                      className="animate__animated animate__backInUp"
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
    </div>
  );
}
