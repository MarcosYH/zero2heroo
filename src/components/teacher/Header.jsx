import React from 'react'
import Profile from "../../assets/dashboard/Profil.png";
import "../../styles/Sidebar.css";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
       <div className="p-4 lg:ml-64 bg-white">
      <nav>
        <div className=" p-4 flex justify-end border-b-2">
          <div className=" mx-auto">
            <div className="hover:bg-[#e8ebee] mx-2 bg-[#F0F0F0] flex p-2 rounded-md items-center mr-20">
              <Link className="block px-4 text-sm font-medium" to=" #">
                Running labs
              </Link>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M1.19632 0L0 0.479345V14.509L1.19632 15L15 7.98519V7.01481L1.19632 0ZM1.53374 13.4217V1.57833L13.1902 7.50585L1.53374 13.4217Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center">
             
              <span className="text-gray-600 text-sm mr-2">test-Enseignant</span>
            
            <img src={Profile} alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}
