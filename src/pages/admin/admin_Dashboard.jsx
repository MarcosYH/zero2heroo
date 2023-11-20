import React from 'react'
// import StatsCard from '../../components/admin/StatsCard'
import teacher from '../../assets/dashboard/teacher.png'
import parcours from '../../assets/dashboard/Parcours.png'
import labs from '../../assets/dashboard/labs.png'
import cours from '../../assets/dashboard/cours.png'
import student from '../../assets/dashboard/student.png'
import Traficcard from '../../components/admin/Traficcard'
import StatsCard from '../../components/admin/StatsCard'


export default function Dashboard() {
  return (
    <div>
      <div className="p-4 lg:ml-64">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h4 className=' text-xl font-medium'>Nombre d’enseignants</h4>
            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">0</h2>
              <img src={teacher} className=" w-10" alt="icon_drapau"/>
            </div>
          </div>
          <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h4 className=' text-xl font-medium'>Nombre d'Étudiants</h4>

            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">0</h2>
              <img src={student} className=" w-10" alt="icon_drapau"/>
            </div>
          </div>
          <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h4 className=' text-xl font-medium'>Nombre de parcours</h4>
            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">0</h2>
              <img src={parcours} className="w-10" alt="icon_drapau"/>
            </div>
          </div>
         <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h4 className=' text-xl font-medium'>Nombre de cours</h4>
            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">0</h2>
              <img src={cours} className="w-10" alt="icon_drapau"/>
            </div>
          </div>
          <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h4 className=' text-xl font-medium'>Nombre de labs</h4>
            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">0</h2>
              <img src={labs} className="w-10" alt="icon_drapau"/>
            </div>
          </div>
        </div>
        <div className=' lg:flex mt-4'>
          <div className="grid grid-cols-1 my-4 lg:w-1/2">
            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900">Liste des Enseignants</h3>
                <a href="# " className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                  Voir tous
                </a>
              </div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Neil_image" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">Email</a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        Profession
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/bonnie-green.png" alt="Neilimage" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Bonnie Green
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9">Email</a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        Profession
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/michael-gough.png" alt="Neil_mage" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Michael Gough
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="57323a363e3b17203e3933242332257934383a">Email</a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        Profession
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className=' lg:w-1/2 ml-3'>
            <Traficcard />
          </div>
        </div>
        
        <div>
          <StatsCard />
        </div>
      </div>
    </div>
  )
}
