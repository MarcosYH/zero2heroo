import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logoemes1.svg'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
  return (
    <div>
      <footer className="site_footer">
        <div className="footer_widget_area">
          <div className="container">
            <div className="row">
              <div className="col col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <div className="site_logo">
                    <Link className="site_link" to="/" onClick={scrollToTop}>
                      <img
                        src={logo}
                        alt="logoemes1"
                      />
                    </Link>
                  </div>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                </div>
              </div>
              <div className="col col-lg-7">
                <div className="row">
                  <div className="col col-md-4 col-sm-4">
                    <div className="footer_widget">
                      <h3 className="footer_widget_title">Liens</h3>
                      <ul className="page_list unordered_list_block">
                        <li>
                          <Link to="/login" onClick={scrollToTop}>
                            <span className="item_text">Connexion</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={scrollToTop}>
                            <span className="item_text">Accueil</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" onClick={scrollToTop}>
                            <span className="item_text">Blog</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact" onClick={scrollToTop}>
                            <span className="item_text">contact</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col col-md-4 col-sm-4">
                    <div className="footer_widget">
                      <h3 className="footer_widget_title">À propos</h3>
                      <ul className="page_list unordered_list_block">
                        <li>
                          <Link to="#!">
                            <span className="item_text">Programmation</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#!">
                            <span className="item_text">
                              Recueillir des avis
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col col-md-4 col-sm-4">
                    <div className="footer_widget">
                      <h3 className="footer_widget_title">Support</h3>
                      <ul className="page_list unordered_list_block">
                        <li>
                          <Link to="#">
                            <span className="item_text">Centre d'aide</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="item_text">FAQ</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="item_text">Contacts</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#!">
                            <span className="item_text">Sécurité</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#!">
                            <span className="item_text">Police privée</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright_widget">
          <div className="container">
            <p className="copyright_text text-center mb-0">
              <b>Copyright © 2023</b> Emes. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
