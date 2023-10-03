import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const users = [
  { id: 1, nom: "Doe", prenom: "John", email: "john.doe@example.com" },
  { id: 2, nom: "Smith", prenom: "Alice", email: "alice.smith@example.com" },
  { id: 3, nom: "Johnson", prenom: "Bob", email: "bob.johnson@example.com" },
  { id: 4, nom: "Williams", prenom: "Eva", email: "eva.williams@example.com" },
];

export default function User() {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleCheckboxChange = (userId) => {
    const isSelected = selectedUsers.includes(userId);
    if (isSelected) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };
  return (
    <div className='p-10 px-20 lg:ml-64'>
      <div className=' flex justify-between'>
        <h4 className=' text-3xl'> Utilisateurs</h4>
        <Link
          to="/admin/adduser"
          className='btn btn-primary pt-3 px-3 pb-3'>
          <i class="fas fa-plus mr-3"></i>
          <span>Nouvel Utilisateur</span>
        </Link>
      </div>
      <div>

        <div className="container mx-auto p-4">
          <button
            className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={toggleEditMode}
          >
            {isEditMode ? "Terminer l'édition" : "Modifier/Supprimer"}
          </button>

          <ul className="grid grid-cols-1 gap-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="bg-white shadow-md p-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleCheckboxChange(user.id)}
                    className={isEditMode ? "block" : "hidden"}
                  />
                  <div>
                    <h2 className="text-xl font-bold">
                      {user.nom} {user.prenom}
                    </h2>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                </div>

                {isEditMode && (
                  <div className="space-x-2">
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                      Modifier
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Supprimer
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
