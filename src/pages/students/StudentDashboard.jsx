import React from 'react'
import image_welcome from "../../assets/dashboard/image_welcome.png";
import icon_drapau from "../../assets/dashboard/icon_drapeau.png"
import icon_point from "../../assets/dashboard/icon_point.png"
import icon_trophy from "../../assets/dashboard/icon_trophy.png"
import icon_certification from "../../assets/dashboard/icon_certification.png"
import { Link } from 'react-router-dom';

export default function StudentDashboard() {
  return (
    <div className='p-4 lg:ml-64'>
      <div className=" flex flex-wrap items-center w-full">
        <img src={image_welcome} alt="image_welcome" />
        <div>
          <div>
            <h1 className=" font-bold md:text-4xl sm:text-4xl">
              Hey bienvenu!
            </h1>
            {/* <p>Email : {user.email}</p> */}
          </div>
          <p className=' mt-2'>Démarrer votre laboratoire ou votre cours de formation</p>
        </div>
        <Link
          to="#"
          type="button"
          className="text-black text-md font-bold rounded-lg p-4 py-3 text-center ml-20 md:mr-0 bg-[#e8ebee]"
        >
          Aller au laboratoire
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 py-8 rounded-lg shadow-md">
        <h4 className=' text-xl font-medium'>Laboratoires en fonctionnement</h4>
          <div className=" flex justify-between items-center pt-3">
            <h2 className="text-4xl font-bold">0</h2>
            <img src={icon_drapau} className="" alt="icon_drapau" />
          </div>
        </div>
        <div className="bg-white p-4 py-8 rounded-lg shadow-md">
        <h4 className=' text-xl font-medium'>Points</h4>
          <div className=" flex justify-between items-center pt-3">
            <h2 className="text-4xl font-bold">0</h2>
            <img src={icon_point} className="" alt="icon_drapau" />
          </div>
        </div>
        <div className="bg-white p-4 py-8 rounded-lg shadow-md">
        <h4 className=' text-xl font-medium'>Trophées</h4>
          <div className=" flex justify-between items-center pt-3">
            <h2 className="text-4xl font-bold">0</h2>
            <img src={icon_trophy} className="" alt="icon_drapau" />
          </div>
        </div>
        <div className="bg-white p-4 py-8 rounded-lg shadow-md">
        <h4 className=' text-xl font-medium'>Certifications</h4>
          <div className=" flex justify-between items-center pt-3">
            <h2 className="text-4xl font-bold">0</h2>
            <img src={icon_certification} className="" alt="icon_drapau" />
          </div>
        </div>

      </div>
    </div>
  )
}
