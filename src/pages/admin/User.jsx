import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../components/general/Loader';
import Modal from '../../components/general/Modal';
import axios from 'axios';

export default function User() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDelUserOpen, setIsModalDelUserOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModalDelUser = () => {
    setIsModalDelUserOpen(true);
  };
  const closeModalDelUser = () => {
    setIsModalDelUserOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => { // Add closing parenthesis here
      try {
        const response = await fetch("http://localhost:3000/alluser");

        if (!response.ok) {
          throw new Error("Réponse du serveur non valide");
        }
        const data = await response.json();
        setUser(data);
        setIsLoading(false);
        console.log(data);
      }
      catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs:", error);
        setIsLoading(true);
      }
    };
    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    isActivated: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/user', formData);
      console.log('User created:', response.data);
      setFormData({
        name: '',
        email: '',
        role: '',
        isActivated: false,
      });
      closeModal();
      setLoading(false);
    } catch (error) {
      console.error('Error creating user:', error);
      setLoading(false);
    }
  };

  // Fonction pour supprimer un utilisateur
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/user/${id}`);
      setUser(user.filter(user => user._id !== id));
      closeModalDelUser();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };


  return (
    <div className='p-10 px-20 lg:ml-64'>
      <div className=' flex justify-between'>
        <h4 className=' text-3xl'> Utilisateurs</h4>
        <Link
          to="#!"
          className='btn btn-primary pt-3 px-3 pb-3'
          onClick={openModal}
        >
          <i className="fas fa-plus mr-3"></i>
          <span>Nouvel Utilisateur</span>
        </Link>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <form onSubmit={handleSubmit}>
            <div className="">
              <div className="form_item">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nom"
                  required
                  disabled={loading}
                />
              </div>
              <div className="form_item">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  disabled={loading}
                />
              </div>
              <div className="form_item position-relative">
                <select
                  onChange={handleChange}
                  name="role"
                  value={formData.role}
                  required
                  disabled={loading}
                >
                  <option value="">Role</option>
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
              </div>
              <div className="form_item clearfix flex align-items-center">
                <label className="switch float-left">
                  <input
                    type="checkbox"
                    name="isActivated"
                    checked={formData.isActivated}
                    onChange={(e) =>
                      setFormData({ ...formData, isActivated: e.target.checked })
                    }
                    disabled={loading}
                  />
                  <span className="slider"></span>
                </label>
                <label className="float-left ml-2 fw-bold"> Statut</label>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn btn_dark py-3 text-center d-flex justify-center items-center"
                  disabled={loading}
                >
                  <div className="mr-2 fw-bold">Créer</div>
                  {loading && (
                    <div
                      className="spinner-border  text-light"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </form>
        </Modal>
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
            {isLoading ? (
              <div className='my-4'>
                <Loader />
              </div>
            ) : (
              user.map((user) => (
                <tr key={user._id} className=" border-b border-b-gray-300 hover:bg-gray-200">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-black">
                    {user.name}
                  </th>
                  <td className="px-6 py-4">
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    {user.role}
                  </td>
                  <td className="px-6 py-4">
                    {user.isActivated ? (
                      <span className='bg-green-200 p-1 px-2 rounded-md text-green-700 font-medium'>Actif</span>
                    ) : (
                      <span className='bg-red-200 p-1 px-2 rounded-md text-red-700 font-medium'>Inactif</span>
                    )}
                  </td>
                  <td className="px-6 py-4 flex space-x-4">
                    <Link to="#" className=' text-xl text-yellow-400'>
                      <i className='fas fa-edit'></i>
                    </Link>

                    <Link to="#" className=' text-xl text-red-500' onClick={openModalDelUser}>
                      <i className='fas fa-trash-alt'></i>
                    </Link>

                    <Modal isOpen={isModalDelUserOpen} onClose={closeModalDelUser}>
                      <div className='text-center'>
                        <h2 className='text-2xl font-bold'>Suppression d'utilisateur</h2>
                        <p className='my-4'>Voulez-vous vraiment supprimer cet utilisateur ?</p>
                        <div className='flex justify-center space-x-5'>
                          <button
                            className='btn btn-success py-2'
                            onClick={() => deleteUser(user._id)}
                          >
                            Oui
                          </button>
                          <button
                            className='btn btn-danger'
                            onClick={closeModalDelUser}
                          >
                            Non
                          </button>
                        </div>
                      </div>
                    </Modal>

                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
