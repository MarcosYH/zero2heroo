import React, { useState } from 'react'
// import ReactQuill from 'react-quill'
import axios from "axios";
import ReactQuill from 'react-quill';

export default function AdminAddLabs() {
  const [successMessage, setSuccessMessage] = useState(null);
  const [formData, setFormData] = useState({
    wording: "",
    description: "",
    technologie: "",
    type: "",
    level: "",
    duration: 0,
    score: 0,
    image: "",
    services: "",
    type_access: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://38.242.136.15:3000/createLab", formData);
      console.log("Réponse du serveur:", response.data);
      // Réinitialise le formulaire après le succès de la requête
      setFormData({
        wording: "",
        description: "",
        technologie: "",
        type: "",
        level: "",
        duration: 0,
        score: 0,
        image: "",
        services: "",
        type_access: ""
      });
      console.log("Lab créé avec succès !");
      setSuccessMessage("Lab créé avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      alert("Erreur lors de la création du lab.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  };


  return (
    <div className='p-10 px-20 lg:ml-64'>
      <form onSubmit={handleSubmit}>
        <div className=" mb-10">
          <h4 className=" text-3xl font-bold">Création de nouveau lab</h4>

        </div>
        <div className=" lg:flex justify-center my-3">
          {/* form of add article */}
          <div className="lg:w-2/3 px-8 py-6 bg-slate-100">
            {successMessage && (
              <div className="mt-4 bg-green-200 border border-green-400 text-green-700 px-4 py-2 rounded">
                {successMessage}
              </div>
            )}
            <div className="flex justify-center">
              <div className=" w-full ">
                <div>
                  <div className="my-4">
                    <span htmlFor="wording" className="block text-sm font-medium text-gray-700">
                      Titre du lab
                    </span>
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
                  <div>
                    <div className="lg:flex flex-wrap">
                      <div className="">
                        <span className="block text-sm font-medium text-gray-700">
                          Difficulté
                        </span>
                        <select
                          id="level"
                          name="level"
                          value={formData.level}
                          onChange={handleChange}
                          className="p-2 px-4 mr-2 rounded-lg border border-gray-300"
                        >
                          <option value="Débutant">Débutant</option>
                          <option value="Amateur">Intermédiaire</option>
                          <option value="Expert"> Avancé</option>
                        </select>
                      </div>
                      <div className="">
                        <span className="block text-sm font-medium text-gray-700">
                          Technologie
                        </span>
                        <select
                          id="technologie"
                          name="technologie"
                          value={formData.technologie}
                          onChange={handleChange}
                          className="p-2 px-4 mr-2 rounded-lg border border-gray-300"
                        >
                          <option value="React">React</option>
                          <option value="Angular">Angular</option>
                          <option value="Nodejs"> Nodejs</option>
                        </select>
                      </div>

                      <div className="">
                        <span className="block text-sm font-medium text-gray-700">
                          Type
                        </span>
                        <select
                          id="type"
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                          className="p-2 px-4 mr-2 rounded-lg border border-gray-300"
                        >
                          <option value="env_dockerfile">environnement dockerfile</option>
                          <option value="env_dockerCompose">environnement dockerCompose</option>
                          <option value="Nodejs"> code review</option>
                        </select>
                      </div>

                    </div>
                    <div className="lg:flex flex-wrap my-4">
                      <div className=" mr-4">
                        <span className="block text-sm font-medium text-gray-700">
                          Nom de l'image du lab
                        </span>
                        <input
                          type="text"
                          id="image"
                          name="image"
                          value={formData.image}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full border rounded-lg"
                          required
                        />

                      </div>

                      <div className=" mr-4">
                        <span className="block text-sm font-medium text-gray-700">
                          Services
                        </span>
                        <input
                          type="text"
                          id="services"
                          name="services"
                          value={formData.services}
                          onChange={handleChange}
                          placeholder="web:80; sql:3306"
                          className="mt-1 p-2 w-full border rounded-lg"
                          required
                        />

                      </div>


                      <div className=" mr-4">
                        <span className="block text-sm font-medium text-gray-700 mb-1">
                          Type access
                        </span>
                        <select
                          id="type_access"
                          name="type_access"
                          value={formData.type_access}
                          onChange={handleChange}
                          className='p-2 px-10 mr-6 rounded-lg border border-gray-300'>
                          <option value="web">ssh</option>
                          <option value="devops">gui </option>
                        </select>
                      </div>

                    </div>
                  </div>
                  <div className="container mx-auto my-8">
                    <span htmlFor="description" className="block mb-2 text-xl font-bold text-gray-700">
                      Description
                    </span>
                    <ReactQuill
                      value={formData.description}
                      onChange={handleDescriptionChange}
                      placeholder="Écrivez quelque chose..."
                      className="bg-white p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 p-4 mx-4 bg-slate-100">
            <div className=" w-full ">
              <div>
                <div className="my-4 text-center">
                  <span htmlFor="duration" className="block text-sm font-medium text-gray-700">
                    Durée(min)
                  </span>
                  <input
                    type="number"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="overflow-hidden mt-1 p-2  border rounded-lg"
                    placeholder="15min"
                    required
                  />
                </div>

                <div className="my-4 text-center">
                  <span htmlFor="score" className="block text-sm font-medium text-gray-700">
                    Score
                  </span>
                  <input
                    type="number"
                    id="score"
                    name="score"
                    value={formData.score}
                    onChange={handleChange}
                    className="overflow-hidden mt-1 p-2  border rounded-lg"
                    placeholder="Score"
                    required
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className=' text-center mt-5'>
          <button type="submit" className=" bg-slate-500 mr-3 p-3 px-4 rounded-md text-white font-bold">
            Publier maintenant
          </button>
        </div>
      </form>
    </div>
  )
}