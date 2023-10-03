import React from 'react'
import { Link } from 'react-router-dom'
import imgPath from '../../assets/dashboard/course_image_4.png'

export default function AdminParcours() {
  return (
    <div className='p-10 px-20 lg:ml-64'>
      <div className=' flex justify-between'>
        <h4 className=' text-3xl'>Parcours</h4>
        <Link
          to="/admin/addlearnpath"
          className='btn btn-primary pt-3 px-3 pb-3'>
          <i class="fas fa-plus mr-3"></i>
          <span>Nouveau Parcours</span>
        </Link>
      </div>
      <div>
        <div className="row mt-20">
          <div className="col col-lg-4">
            <div className="course_card style_2">
              <div className="item_image">
                <Link to="#">
                  <img
                    src={imgPath}
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
                  <li>
                    <i className="fas fa-unlock" />
                    <span>Gratuit</span>
                  </li>
                </ul>
                <h3 className="item_title">
                  <Link to="#" >Titre du parcours</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="course_card style_2">
              <div className="item_image">
                <Link to="#">
                  <img
                    src={imgPath}
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
                  <li>
                    <i className="fas fa-lock" />
                    <span>payant</span>
                  </li>
                </ul>
                <h3 className="item_title">
                  <Link to="#">Titre du parcours</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="course_card style_2">
              <div className="item_image">
                <Link to="#">
                  <img
                    src={imgPath}
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
                  <li>
                    <i className="fas fa-lock" />
                    <span>payant</span>
                  </li>
                </ul>
                <h3 className="item_title">
                  <Link to="#">Titre du parcours</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}