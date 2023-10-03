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
        <div className=" flex justify-between mb-10">
          <h4 className=" text-3xl font-bold">Créer un nouveau lab</h4>
          <div>
            <button type="submit" className=" bg-slate-500 mr-3 p-3 px-4 rounded-md text-white font-bold">
              Publier maintenant
            </button>
          </div>
        </div>
        <div className=" lg:flex justify-center my-3">
          {/* form of add lab */}
          <div className=" w-full px-8 py-6 bg-slate-100">
            <div className="flex justify-center">
              <div className=" w-full ">
                <div>
                  <div className="my-4">
                    <span htmlFor="nom" className="block text-sm font-medium text-gray-700">
                      Nom du lab
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
                    <div className="md:flex">
                      <div className="">
                        <span className="block text-sm font-medium text-gray-700">
                          Technologie
                        </span>
                        <select name="categorie" id="categorie" className='p-2 px-10 mr-6 rounded-lg border border-gray-300'>
                          <option value="React">React</option>
                          <option value="Angular">Angular</option>
                          <option value="Next">Next</option>
                          <option value="Docker">Docker</option>
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
                      <div className="">
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
                    </div>
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

        </div>
      </form>
    </div>
  )
}
