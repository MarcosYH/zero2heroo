import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
// import imgPath from '../../assets/dashboard/course_image_4.png'
// import axios from "axios";


export default function AdminParcours() {
  const [paths, setPaths] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://backend-zro2hero.vercel.app/parcours/viewAllPath");

        if (!response.ok) {
          throw new Error("Réponse du serveur non valide");
        }
        const data = await response.json();
        setPaths(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des parcours:", error);
        setIsLoading(true);
      }
    };
    fetchData();
  }, []);


  return (
    <div className='p-10 px-20 lg:ml-64'>
      <div className=' flex justify-between'>
        <h4 className=' text-3xl'>Parcours</h4>
        <Link
          to="/admin/addlearnpath"
          className='btn btn-primary pt-3 px-3 pb-3'>
          <i className="fas fa-plus mr-3"></i>
          <span>Créer un parcours</span>
        </Link>
      </div>
      <div>
        <div className="row mt-20">
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 rounded-full animate-pulse dark:bg-yellow-400"></div>
              <div className="w-4 h-4 rounded-full animate-pulse dark:bg-yellow-400"></div>
              <div className="w-4 h-4 rounded-full animate-pulse dark:bg-yellow-400"></div>
            </div>
          ) : (
            paths.map((path) => (
              <div key={path._id} className=" col col-lg-4">
                <div className="course_card style_2">
                  <div className="item_image  h-48 overflow-hidden relative">
                    <Link to={`/admin/learnpath/${path._id}`}>
                      <img
                        src={path.image.url}
                        alt={path.wording}
                        className="w-full h-auto object-cover"
                      />
                    </Link>
                  </div>
                  <div className="item_content">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <ul className="item_category_list unordered_list meta_info_list">
                        <li>
                          <Link to="#!">{path.categorie}</Link>
                        </li>
                      </ul>
                    </div>

                    <ul className="meta_info_list unordered_list justify-content-between">
                      <li>
                        <i className="fas fa-chart-bar mr-3"/>
                        <span>{path.level}</span>
                      </li>
                      <li>
                        <i className="fas fa-clock"/>
                        <span>{path.time} {path.timecategory}</span>
                      </li>
                    </ul>

                    <h3 className="item_title">
                      <Link to="/admin/learnpath/:id">{path.wording}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
