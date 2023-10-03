import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function AddLearnPath() {
  const [content, setContent] = useState('');

  const handleEditorChange = (value) => {
    setContent(value);
  };
  return (
    <div className='p-4 lg:ml-64'>
      <form>
        <div className=" flex justify-between mb-10">
          <h4 className=" text-3xl font-bold">Créer un nouveau parcours</h4>
          <div>
            <button type="submit" className=" bg-slate-500 mr-3 p-3 px-4 rounded-md text-white font-bold">
              Publier maintenant
            </button>
          </div>
        </div>
        <div className=" lg:flex justify-center my-3">
          {/* form of add article */}
          <div className="lg:w-2/3 px-8 py-6 bg-slate-100">
            <div className="flex justify-center">
              <div className=" w-full ">
                <div>
                  <div className="my-4">
                    <span htmlFor="nom" className="block text-sm font-medium text-gray-700">
                      Titre du parcours
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
                    <div className="lg:flex">
                      <div className="">
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
                          <option value="Amateur">Amateur</option>
                          <option value="Expert"> Expert</option>
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
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 p-4 mx-4 bg-slate-100">
            <div className=" w-full ">
              <div>
                <div className="my-4">
                  <span htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Prix du parcours
                  </span>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="overflow-hidden mt-1 p-2 w-full border rounded-lg"
                    placeholder=" Prix"
                    required
                  />
                </div>
                <div className="my-4">
                  <span htmlFor="time" className="block text-sm font-medium text-gray-700">
                    Durée
                  </span>
                  <input
                    type="number"
                    id="time"
                    name="time"
                    className="overflow-hidden mt-1 p-2 w-1/2 border rounded-lg"
                    placeholder="Durée"
                    required
                  />
                </div>
                <div>
                  <h4 className=' mb-1'>nombre de cours dans le parcours</h4>
                  <input
                    type="number"
                    id="cours"
                    name="cours"
                    className="overflow-hidden mt-1 p-2 w-1/2 border rounded-lg"
                    placeholder="Nombre de cours dans le parcours"
                    required
                  />
                </div>
                 
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
