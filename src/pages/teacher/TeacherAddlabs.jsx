import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function TeacherAddlabs() {
  const [content, setContent] = useState('');

  const handleEditorChange = (value) => {
    setContent(value);
  };
  return (
    <div className='p-10 px-20 lg:ml-64'>
      <form>
        <div className=" mb-10">
          <h4 className=" text-3xl font-bold">Création de nouveau lab</h4>

        </div>
        <div className=" lg:flex justify-center my-3">
          {/* form of add article */}
          <div className="lg:w-2/3 px-8 py-6 bg-slate-100">
            <div className="flex justify-center">
              <div className=" w-full ">
                <div>
                  <div className="my-4">
                    <span htmlFor="nom" className="block text-sm font-medium text-gray-700">
                      Titre du lab
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 p-2 w-full border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <div className="lg:flex flex-wrap">
                      <div className=" mb-3">
                        <span className="block text-sm font-medium text-gray-700">
                          Catégorie
                        </span>
                        <select name="categorie" id="categorie" className='p-2 px-10 mr-6 rounded-lg border border-gray-300'>
                          <option value="web">web</option>
                          <option value="devops">devops</option>
                          <option value="mobile">mobile</option>
                          <option value="securite">securite</option>
                        </select>

                      </div>
                      <div className="">
                        <span className="block text-sm font-medium text-gray-700">
                          Difficulté
                        </span>
                        <select
                          id="difficulte"
                          name="categorie"
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
                          id="difficulte"
                          name="categorie"
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
                          id="difficulte"
                          name="categorie"
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
                          id="name"
                          name="name"
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
                          placeholder='web:80; sql:3306'
                          className="mt-1 p-2 w-full border rounded-lg"
                          required
                        />

                      </div>


                      <div className=" mr-4">
                        <span className="block text-sm font-medium text-gray-700 mb-1">
                          Type access
                        </span>
                        <select name="categorie" id="categorie" className='p-2 px-10 mr-6 rounded-lg border border-gray-300'>
                          <option value="web">ssh</option>
                          <option value="devops">gui </option>
                        </select>
                      </div>

                    </div>
                  </div>

                  <div className=' my-4'>
                    <span> Ajouter une image au parcours</span>
                    <input
                      className=" w-full border rounded-sm bg-white p-2 mt-1 overflow-hidden cursor-pointer block"
                      type="file"
                      accept="image/*"
                    />
                  </div>
                  <div className="container mx-auto my-8">
                    <span htmlFor="description" className="block mb-2 text-xl font-bold text-gray-700">
                      Description
                    </span>
                    <ReactQuill
                      value={content}
                      onChange={handleEditorChange}
                      placeholder="Écrivez quelque chose..."
                      className="bg-white p-2 border border-gray-300 rounded"
                    />
                  </div>
                  {/* <div className="container mx-auto my-8">
                    <span htmlFor="description" className="block mb-2 text-xl font-bold text-gray-700">
                      Configuration du conteneur
                    </span>
                    <ReactQuill
                      value={content}
                      onChange={handleEditorChange}
                      placeholder="Entrer les configs pour lancer le conteneur"
                      className="bg-white p-2 border border-gray-300 rounded"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 p-4 mx-4 bg-slate-100">
            <div className=" w-full ">
              <div>
                <div className="my-4 text-center">
                  <span htmlFor="time" className="block text-sm font-medium text-gray-700">
                    Auteur
                  </span>
                  <input
                    type="text"
                    id="auteur"
                    name="auteur"
                    className="overflow-hidden mt-1 p-2 border rounded-lg"
                    placeholder="Auteur"
                    required
                  />
                </div>

                <div className="my-4 text-center">
                  <span htmlFor="time" className="block text-sm font-medium text-gray-700">
                    Durée(min)
                  </span>
                  <input
                    type="number"
                    id="time"
                    name="time"
                    className="overflow-hidden mt-1 p-2  border rounded-lg"
                    placeholder="15min"
                    required
                  />
                </div>

                <div className="my-4 text-center">
                  <span htmlFor="time" className="block text-sm font-medium text-gray-700">
                    Score
                  </span>
                  <input
                    type="number"
                    id="auteur"
                    name="auteur"
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
