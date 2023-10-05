import React from 'react'
import imgpathEmpty from '../../assets/dashboard/parcoursvide.png'
import ReactQuill from 'react-quill'

export default function ParcoursEmpty() {
  return (
    <div className='p-10 px-20 lg:ml-64'>
      <div className=' text-center'>
        <img src={imgpathEmpty} alt="imgpathEmpty" className=' w-1/4 mx-auto' />
        <h1 className=' text-3xl'>Votre parcours est vide pour l'instant</h1>
      </div>
      <div>
        <h2 className=' text-2xl text-center my-4'> Veuiller créer une section</h2>
        <div className="w-2/3 mx-auto px-8 py-6 bg-slate-100">
          <div className="flex justify-center">
            <div className=" w-full ">
              <div>
                <div className="mt-4 mb-2 mx-auto text-center">
                  <span htmlFor="nom" className="block text-sm font-medium text-gray-700">
                    titre de la section
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 w-1/2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <div className=" lg:flex justify-center">
                    {/* <div className="my-4 mr-4">
                      <span htmlFor="nom" className="block text-sm font-medium text-gray-700">
                        type
                      </span>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 border rounded-lg"
                        required
                      />
                    </div> */}


                    <div className=" w-1/3 mr-2">
                      <span className="block text-sm font-medium text-gray-700">
                        Type
                      </span>
                      <select
                        id="difficulte"
                        name="categorie"
                        className="p-2 px-10 w-full rounded-lg border border-gray-300"
                      >
                        <option value="Video">Video</option>
                        <option value="Cours">Cours </option>
                        <option value="labs">labs</option>
                        <option value="pieces">pieces</option>
                      </select>
                    </div>
                    <div className="w-1/3 ">
                      <span className="block text-sm font-medium text-gray-700">
                        Ordre d'apparition
                      </span>
                      <select
                        id="difficulte"
                        name="categorie"
                        className="p-2 px-10 mr-2 w-full rounded-lg border border-gray-300"
                      >
                        <option value="1">1</option>
                        <option value="2">2 </option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="container mx-auto my-8">
                    {/* Description */}
                    <label htmlFor="description" className="block mb-2 text-xl font-bold text-gray-700">
                      Ressource
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      
                      placeholder="Écrivez quelque chose..."
                      className="bg-white p-2 border border-gray-300 rounded w-full h-32"
                      required
                    />
                  </div>

                <div className="container mx-auto my-8">
                  <span htmlFor="description" className="block mb-2 text-xl font-bold text-gray-700">
                    Description
                  </span>
                  <ReactQuill
                    placeholder="Écrivez quelque chose..."
                    className="bg-white p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className=' text-center mt-5'>
                  <button type="submit" className=" bg-slate-500 mr-3 p-3 px-4 rounded-md text-white font-bold">
                    Publier maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
