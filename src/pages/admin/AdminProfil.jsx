import React, { useState } from 'react';

const AdminProfil = () => {
  const [user, setUser] = useState({
    nom: 'Doe',
    prenom: 'John',
    email: 'john.doe@example.com',
    photo: 'url_de_la_photo.jpg',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleUpdateProfile = () => {
    console.log('Profil mis à jour :', user);
  };

  return (
    <div className="p-10 px-20 lg:ml-64">
      <h1 className="text-2xl font-semibold mb-4">Profil de l'administrateur</h1>
      <div className="mb-4">
        <label className="block text-gray-600 font-bold mb-2">Nom</label>
        <input
          type="text"
          name="nom"
          value={user.nom}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-bold mb-2">Prénom</label>
        <input
          type="text"
          name="prenom"
          value={user.prenom}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-bold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-bold mb-2">Photo de profil (URL)</label>
        <input
          type="file"
          name="photo"
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <button
        onClick={handleUpdateProfile}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Mettre à jour le profil
      </button>
    </div>
  );
};

export default AdminProfil;
