import React, { useEffect, useState } from 'react'
import reactimg from '../../assets/dashboard/react.png'
import runimg from '../../assets/dashboard/runimg.png'
import axios from 'axios';
import angular from '../../assets/dashboard/Angular.png'
import next from '../../assets/dashboard/next.png'
import docker from '../../assets/dashboard/docker.png'

import { useParams } from 'react-router-dom';

export default function AdminLabDetail() {
  const [labs, setLabs] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://backend-zro2hero.vercel.app/labs/viewOneLab/${id}`)
      .then(response => {
        setLabs(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des détails du parcours:", error);
      });
  }, [id]);

  if (!labs) {
    return (
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-yellow-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-yellow-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-yellow-400"></div>
      </div>
    );
  }

  return (
    <div className='p-10 md:px-20 lg:ml-64'>
      <div className=' lg:flex justify-center my-3 bg-slate-50'>

        <div className=' lg:w-2/3 bg-gray-100 px-8 py-6'>
          <div className=' mt-10 flex items-center'>
            {labs.technologie === 'React' && <img src={reactimg} alt="reactimg" className='w-1/6' />}
            {labs.technologie === 'Angular' && <img src={angular} alt="angularimg" className='w-1/6' />}
            {labs.technologie === 'Next' && <img src={next} alt="nextimg" className='w-1/6' />}
            {labs.technologie === 'Docker' && <img src={docker} alt="dockerimg" className='w-1/6' />}

            {/* <img src={reactimg} alt="reactimg" className=' w-1/6' /> */}

            <h4 className=' text-3xl ml-3'>{labs.wording}</h4>
          </div>
          <p className=' my-3'><span className=' text-md font-bold'>Description: </span>{labs.description}</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 bg-slate-100'>
            <div className=' '>
              <h4>Durée</h4>
              <p>{labs.duration} min</p>
            </div>
            <div className=' '>
              <h4>Difficulté</h4>
              <p>{labs.level}</p>
            </div>
            <div className=' '>
              <h4>Auteur</h4>
              <p>{labs.auteur} </p>
            </div>
            <div className=' '>
              <h4>Technologie</h4>
              <p>{labs.technologie}</p>
            </div>
            <div className=' '>
              <h4>Score</h4>
              <p>{labs.score} points</p>
            </div>
            <div className=' '>
              <h4>Trophé</h4>
              <p>{labs.wording} trophé</p>
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
