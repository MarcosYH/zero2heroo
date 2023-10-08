import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import labimg from '../../assets/dashboard/labimg.jpeg'

import reactimg from '../../assets/dashboard/react.png'
import angular from '../../assets/dashboard/Angular.png'
import next from '../../assets/dashboard/next.png'
import docker from '../../assets/dashboard/docker.png'


export default function AdminLabs() {

  // State pour stocker les données récupérées
  const [labs, setLabs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    axios.get("https://backend-zro2hero.vercel.app/labs/viewAllLab")
      .then(response => {
        setLabs(response.data);
        setIsLoading(false);
        console.log(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des labs:", error);
        setIsLoading(true);
      });
  }, []);


  return (
    <div className='p-10 px-20 lg:ml-64'>
      <div className=' flex justify-between'>
        <h4 className=' text-3xl'>Labs</h4>
        <Link
          to="/admin/addlabs"
          className='btn btn-primary pt-3 px-3 pb-3'>
          <i className="fas fa-plus mr-3"></i>
          <span>Créer un lab</span>
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10'>
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-yellow-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-yellow-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-yellow-400"></div>
          </div>
        ) : (
          labs.map((lab, index) => {
            let imgSrc;
            // Condition pour définir la source de l'image en fonction de la technologie
            if (lab.technologie === 'React') {
              imgSrc = reactimg;
            } else if (lab.technologie === 'Angular') {
              imgSrc = angular;
            } else if (lab.technologie === 'Next') {
              imgSrc = next;
            } else if (lab.technologie === 'Docker') {
              imgSrc = docker;
            }
            else {
              imgSrc = labimg;
            }

            return (
              <Link key={lab._id} to={`/admin/labdetail/${lab._id}`} className="rounded-lg overflow-hidden shadow-md m-4">
                <img className="w-1/3 mx-auto" src={imgSrc} alt="Card" />
                <div className="px-6 py-4 text-center">
                  <span className="block font-bold text-xl border rounded-xl px-8 py-1">
                    {lab.wording}
                  </span>
                  <h4 className='mt-3'>Niveau: {lab.level}</h4>
                </div>
              </Link>
            );
          })

        )}
      </div>
    </div>
  )
}
