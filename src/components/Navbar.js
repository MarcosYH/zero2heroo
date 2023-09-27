import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
         <header className="site_header site_header_2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col col-lg-2 col-5">
                <div className="site_logo">
                  <Link className="site_link" to="index.html">
                    <img src="assets/images/logo/logoemes1.svg" alt="logo" />
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
                      <li className=" ">
                        <Link className="nav-link" to="/">
                          Accueil
                        </Link>
                      </li>
                      <li className>
                        <Link className="nav-link" to="/course">
                          Cours
                        </Link>
                      </li>
                      <li className>
                        <Link className="nav-link" to="/testimoni">
                          Témoignage
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col col-lg-4 col-5">
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
                    <Link className="btn border_dark" to="/login">
                      <span>
                        <small>Connexion</small>
                        <small>Connexion</small>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="btn btn_dark" to="/register">
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
