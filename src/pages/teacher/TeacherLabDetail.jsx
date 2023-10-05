import React from 'react'
import reactimg from '../../assets/dashboard/react.png'
import runimg from '../../assets/dashboard/runimg.png'

export default function TeacherLabDetail() {
  return (
    <div className='p-10 md:px-20 lg:ml-64'>
      <div className=' lg:flex justify-center my-3 bg-slate-50'>

        <div className=' lg:w-2/3 bg-gray-100 px-8 py-6'>
          <div className=' mt-10 flex items-center'>
            <img src={reactimg} alt="reactimg" className=' w-1/6' />
            <h4 className=' text-3xl ml-3'>Injection Sql dans l'authentification de base</h4>
          </div>
          <p className=' my-3'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, libero fugiat. Maxime asperiores numquam, non consectetur, pariatur culpa blanditiis aliquam assumenda incidunt quas excepturi in molestias quod enim earum impedit!</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 bg-slate-100'>
            <div className=' '>
              <h4>Durée</h4>
              <p>45 min</p>
            </div>
            <div className=' '>
              <h4>Difficulté</h4>
              <p>Intermédiaire</p>
            </div>
            <div className=' '>
              <h4>Auteur</h4>
              <p>Mr test </p>
            </div>
            <div className=' '>
              <h4>Technologie</h4>
              <p>React</p>
            </div>
            <div className=' '>
              <h4>Score</h4>
              <p>45 points</p>
            </div>
            <div className=' '>
              <h4>Trophé</h4>
              <p>sql injection trophé</p>
            </div>
          </div>

        </div>
        <div className=' lg:w-1/3 p-4 text-center '>
          <img src={runimg} alt="runimg" className=' w-52 mb-10 mx-auto' />
          <button className=' btn btn-dark text-white text-center p-4'>
            Run lab
          </button>
        </div>
      </div>
    </div>
  )
}
