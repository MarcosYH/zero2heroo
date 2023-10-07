import React, { useState } from 'react'
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

export default function AddLearnPath() {

  const [successMessage, setSuccessMessage] = useState(null);
  const [formData, setFormData] = useState({
    wording: "",
    description: "",
    image: "",
    categorie: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend-zro2hero.vercel.app/parcours/create",
        formData
      );
      console.log("Réponse du serveur:", response.data);
      setSuccessMessage("Parcours créé avec succès !");
      // Réinitialise le formulaire après le succès de la requête
      setFormData({
        wording: "",
        description: "",
        image: "",
        categorie: ""
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
    }
  };

  return (
    <div className='p-4 lg:ml-64'>
      <div>
        <div className=" mb-10">
          <h4 className=" text-3xl font-bold">Créer un nouveau parcours</h4>
        </div>
        <div className=" lg:flex justify-center my-3">
          {/* form of add article */}
          <div className="w-full px-8 py-6 bg-slate-100">
            <div className="flex justify-center">
              <div className=" w-full ">
                {/* Affiche le message de succès s'il est défini */}
                {successMessage && (
                  <div className="mt-4 bg-green-200 border border-green-400 text-green-700 px-4 py-2 rounded">
                    {successMessage}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="my-4">
                    {/* Titre du parcours */}
                    <label htmlFor="wording" className="block text-sm font-medium text-gray-700">
                      Titre du parcours
                    </label>
                    <input
                      type="text"
                      id="wording"
                      name="wording"
                      value={formData.wording}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-lg"
                      required
                    />
                  </div>

                  <div className="">
                    {/* Catégorie */}
                    <label htmlFor="categorie" className="block text-sm font-medium text-gray-700">
                      Catégorie
                    </label>
                    <select
                      id="categorie"
                      type="text"
                      name="categorie"
                      value={formData.categorie}
                      onChange={handleChange}
                      className="p-2 md:w-1/3 mr-6 rounded-lg border border-gray-300"
                      required
                    >
                      <option value="web">web</option>
                      <option value="devops">devops</option>
                      <option value="mobile">mobile</option>
                      <option value="securite">securite</option>
                    </select>
                  </div>

                  <div className='my-4'>
                    {/* Image */}
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                      Ajouter une image au parcours
                    </label>
                    <input
                      type="file"
                      id="image"
                      // type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      className="w-full border rounded-sm bg-white p-2 mt-1 overflow-hidden cursor-pointer block"
                      accept="image/*"
                    />
                  </div>

                  <div className="container mx-auto my-8">
                    {/* Description */}
                    <label htmlFor="description" className="block mb-2 text-xl font-bold text-gray-700">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Écrivez quelque chose..."
                      className="bg-white p-2 border border-gray-300 rounded w-full h-32"
                      required
                    />
                  </div>
                  <div className=' text-center'>
                    <button type="submit" className=" bg-slate-500 mr-3 p-3 px-4 rounded-md text-white font-bold">
                      Publier maintenant
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
