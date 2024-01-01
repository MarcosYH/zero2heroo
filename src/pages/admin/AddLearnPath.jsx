import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {compressImage} from '../../utils/resizeimage';

export default function AddLearnPath() {

  const [successMessage, setSuccessMessage] = useState(null);
  const [formData, setFormData] = useState({
    wording: "",
    description: "",
    image: "",
    categorie: "",
    level: "",
    time: "",
    timecategory: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  //handle and convert it in base 64

  const handleImage = async (e) => {
    const file = e.target.files[0];
    console.log(file)
    const compressedImage = await compressImage(file);
    console.log(compressedImage)
    await setFileToBase(compressedImage)
  };

  const setFileToBase = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData((prevState) => ({
          ...prevState,
          image: reader.result,
        }));
        resolve();
      };
    });
  };

  useEffect(() => {
    let timeout;
    if (successMessage) {
      // Affiche le toast de succès pendant 3 secondes (3000 millisecondes)
      timeout = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [successMessage]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.wording || !formData.description || !formData.image || !formData.categorie || !formData.level || !formData.time) {
      setError("Veuillez remplir tous les champs.");
      setSuccessMessage(null);
      return;
    }

    try {
      const response = await axios.post(
        "https://backend-zro2hero.vercel.app/parcours/create",
        formData
      );
      console.log("Réponse du serveur:", response.data);
      setSuccessMessage("Parcours créé avec succès !");
      setError(null);
      setLoading(false);
      // Réinitialise le formulaire après le succès de la requête
      setFormData({
        wording: "",
        description: "",
        image: "",
        categorie: "",
        level: "",
        time: "",
        timecategory: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setError("Erreur lors de l'envoi du formulaire. Veuillez choisir une bonne image .");
      setLoading(false);
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
                  <div className="fixed bottom-0 right-0 p-4 bg-green-500 text-white rounded-tl-lg shadow-lg">
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
                      disabled={loading}
                    />
                  </div>

                  <div className="md:flex">
                    {/* Catégorie */}
                    <div className="mr-6 mb-3">
                      <label htmlFor="categorie" className="block text-sm font-medium text-gray-700">
                        Catégorie
                      </label>
                      <select
                        id="categorie"
                        type="text"
                        name="categorie"
                        value={formData.categorie}
                        onChange={handleChange}
                        className="p-2 w-full rounded-lg border border-gray-300"
                        required
                        disabled={loading}
                      >
                        <option value="">Sélectionnez une catégorie</option>
                        <option value="web">web</option>
                        <option value="devops">devops</option>
                        <option value="mobile">mobile</option>
                        <option value="securite">securite</option>
                      </select>
                    </div>

                    {/* level */}
                    <div className="mr-6 mb-3">
                      <label htmlFor="categorie" className="block text-sm font-medium text-gray-700">
                        Niveau
                      </label>
                      <select
                        id="level"
                        type="text"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        className="p-2  rounded-lg border border-gray-300"
                        required
                        disabled={loading}
                      >
                        <option value="">Sélectionnez un niveau</option>
                        <option value="Debutant">Débutant</option>
                        <option value="Intermediaire">Intermédiaire</option>
                        <option value="Avancé">Avancé</option>
                      </select>
                    </div>

                    {/* time */}
                    <div className="mr-6 mb-3">
                      <label htmlFor="categorie" className="block text-sm font-medium text-gray-700">
                        Durée
                      </label>
                      <input
                        id="time"
                        type="number"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="p-2 rounded-l-lg border border-gray-300 border-l-0 w-1/3"
                        required
                        disabled={loading}
                      />
                      <select
                      id="timecategory"
                      type="text"
                      name="timecategory"
                      value={formData.timecategory}
                      onChange={handleChange}
                      className="p-2 rounded-r-lg border border-gray-300 border-r-0 bg-gray-50"
                      required
                      disabled={loading}
                      >
                        <option value="">type</option>
                        <option value="heures">heures</option>
                        <option value="jours">jours</option>
                        <option value="semaines">semaines</option>
                      </select>
                    </div>

                  </div>

                  <div className='my-4'>
                    {/* Image */}
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                      Ajouter une image au parcours
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleImage}
                      className="w-full border rounded-sm bg-white p-2 mt-1 overflow-hidden cursor-pointer block"
                      required
                      disabled={loading}
                    />
                    <img className=" w-1/2 mx-auto" src={formData.image} alt=""/>
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
                      disabled={loading}
                    />
                  </div>
                  {error &&
                    <div className='mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded'>{error}</div>}

                  <div className=' flex justify-center'>
                    <button type="submit"
                            className=" bg-slate-500 mr-3 p-3 px-4 rounded-md text-white font-bold text-xl flex">
                      <div className=' mr-2'>Publier</div>
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
