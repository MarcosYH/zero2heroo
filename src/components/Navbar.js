import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logoemes1.svg'
export default function Navbar() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
  return (
    <div>
         <header className="site_header site_header_2">
          <div className="container py-3">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="site_logo">
                  <Link className="site_link" to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col col-lg-6 col-2">
                <nav className="main_menu navbar navbar-expand-lg">
                  <div
                    className="main_menu_inner collapse navbar-collapse justify-content-center"
                    id="main_menu_dropdown"
                  >
                    <ul className="main_menu_list unordered_list_center">
                      <li>
                        <Link className="nav-link" to="/" onClick={scrollToTop}>
                          Accueil
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/course" onClick={scrollToTop}>
                          Cours
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/path" onClick={scrollToTop}>
                          Parcours
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/testimoni" onClick={scrollToTop}>
                          Témoignage
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/contact" onClick={scrollToTop}>
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-auto ">
                <ul className="header_btns_group unordered_list_end">
                  <li>
                    <button
                      className="mobile_menu_btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#main_menu_dropdown"
                      aria-controls="main_menu_dropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="far fa-bars" />
                    </button>
                  </li>
                  <li>
                    <Link className="btn border_dark" to="/login" onClick={scrollToTop}>
                      <span>
                        <small>Connexion</small>
                        <small>Connexion</small>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="btn btn_dark" to="/register" onClick={scrollToTop}>
                      <span>
                        <small>S'inscrire</small>
                        <small>S'inscrire</small>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
    </div>
  )
}
