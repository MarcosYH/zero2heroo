import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import imgPath from '../../assets/dashboard/course_image_4.png'
// import axios from "axios";
import { useToggleDots } from '../../utils/dotToggle';

export default function AdminParcours() {
  const [paths, setPaths] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { dotOpen, toggleDots } = useToggleDots();

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
                    {/* dot button */}
                    <button
                      type="button"
                      className={`${dotOpen[path._id] ? 'md:hover:bg-transparent md:border-0' : ''
                        } pl-3 pr-4 md:hover:text-red-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto`}
                      onClick={() => toggleDots(path._id)}
                    >
                      <svg
                        className=" w-12 absolute top-0 right-0 z-10"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
                            stroke="#000000"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </button>
                    {/* dots menu */}
                    <div
                      id={`dots-${path._id}`}
                      className={`${dotOpen[path._id] ? 'block' : 'hidden'
                        } bg-white text-base list-none absolute  divide-gray-100 rounded shadow my-4 md:w-44 right-0 top-6 z-20`}
                    >
                      <ul className="py-1" aria-labelledby={`dots-${path._id}`}>
                        <li>
                          <Link to="#" className="text-sm block text-start hover:bg-gray-100 text-gray-700 px-4 py-2">
                            Modifier
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="text-sm text-start hover:bg-gray-100 text-gray-700 block px-4 py-2"
                          // onClick={() => handleDelete(path.id)}
                          >
                            Supprimer
                          </Link>
                        </li>
                      </ul>
                    </div>
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
                        {/* <li>
                      <i className="fas fa-unlock" />
                      <span>Accessible</span>
                    </li> */}
                      </ul>
                      {/* <p>{path.description}</p> */}
                    </div>
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
