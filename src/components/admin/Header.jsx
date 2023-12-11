import React, { useState } from 'react'
import Profile from "../../assets/dashboard/Profil.png";
import "../../styles/Sidebar.css";
import { Link } from 'react-router-dom';


export default function Header() {
  const [showprofil, setShowProfil] = useState(false);

  const toggleProfil = () => {
    setShowProfil(!showprofil);
  };
  return (
    <div>
      <div className="p-4 lg:ml-64 bg-white">
        <nav>
          <div className=" p-4 justify-between lg:flex items-center border-b-2">
            <div className="flex space-x-1">
              <input
                type="text"
                className="block w-80 pl-4 pr-10 py-2 text-black bg-white border rounded-full focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Recherches un parcours"
              />
              <button className="px-4 text-white bg-yellow-400 rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <Link to="/admin/addlearnpath" className="hover:bg-[#e8ebee] mx-2 bg-[#F0F0F0] flex p-2 rounded-md items-center">
              <div className="block px-2 text-sm font-medium">
                Créer un parcours"
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 12L17 12M12 17L12 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
            <div className='relative'>
              <Link
                className='flex items-center'
                onClick={toggleProfil}
              >
                <img
                  src={Profile}
                  alt='Profile'
                  className="w-12 rounded-full mr-1"
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='10'
                  height='6'
                  viewBox='0 0 10 6'
                  fill='none'
                  className={`arrow-icon ${showprofil ? 'rotate' : ''}`}
                >
                  <path
                    d='M9 1L5 5L1 1'
                    stroke='black'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Link>

              {showprofil && (
                <div className='info-dropdown'>
                  <p className='m-0'><span className=' font-bold'>Nom :</span> John Doe</p>
                  <p><span className='font-bold'>Email :</span>  john.doe@example.com</p>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
