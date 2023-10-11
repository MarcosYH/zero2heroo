import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {

  return (
    <div className='p-10 px-20 lg:ml-64'>
      <div className=' flex justify-between'>
        <h4 className=' text-3xl'> Utilisateurs</h4>
        
        <Link
          to="#!"
          className='btn btn-primary pt-3 px-3 pb-3'>
          <i class="fas fa-plus mr-3"></i>
          <span>Nouvel Utilisateur</span>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm">
          <thead className="text-md text-black uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Nom
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Statut
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b border-b-gray-300 hover:bg-gray-200">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="px-6 py-4 font-medium text-black">
                Smith Alice
              </th>
              <td className="px-6 py-4">
                alice.smith@example.com
              </td>
              <td className="px-6 py-4">
                Admin
              </td>
              <td className="px-6 py-4">
                <span className=' bg-green-200 p-1 px-2 rounded-md text-green-700 font-medium'>Actif</span>
              </td>
              <td className="px-6 py-4 flex space-x-4">
                <Link to="#" className=' text-xl text-yellow-400'>
                  <i className='fas fa-edit'></i>
                </Link>
                <Link to="#" className=' text-xl text-red-500'>
                  <i className='fas fa-trash-alt'></i>
                </Link>
              </td>
            </tr>
            <tr className=" border-b border-b-gray-300 hover:bg-gray-200">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="px-6 py-4 font-medium text-black">
                John Doe
              </th>
              <td className="px-6 py-4">
                john.doe@example.com
              </td>
              <td className="px-6 py-4">
                Enseignant
              </td>
              <td className="px-6 py-4">
                <span className=' bg-green-200 p-1 px-2 rounded-md text-green-700 font-medium'>Actif</span>
              </td>
              <td className="px-6 py-4 flex space-x-4">
                <Link to="#" className=' text-xl text-yellow-400'>
                  <i className='fas fa-edit'></i>
                </Link>
                <Link to="#" className=' text-xl text-red-500'>
                  <i className='fas fa-trash-alt'></i>
                </Link>
              </td>
            </tr>
            <tr className=" border-b border-b-gray-300 hover:bg-gray-200">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="px-6 py-4 font-medium text-black">
                Johnson Bob
              </th>
              <td className="px-6 py-4">
                bob.johnson@example.com
              </td>
              <td className="px-6 py-4">
                Etudiant
              </td>
              <td className="px-6 py-4">
                <span className=' bg-red-200 p-1 px-2 rounded-md text-red-700 font-medium'>inactif</span>
              </td>
              <td className="px-6 py-4 flex space-x-4">
                <Link to="#" className=' text-xl text-yellow-400'>
                  <i className='fas fa-edit'></i>
                </Link>
                <Link to="#" className=' text-xl text-red-500'>
                  <i className='fas fa-trash-alt'></i>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
