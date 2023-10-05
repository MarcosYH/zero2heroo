import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import labimg from '../../assets/dashboard/labimg.jpeg'
// import angularimg from '../../assets/dashboard/Angular.png'
// import nextimg from '../../assets/dashboard/next.png'

export default function AdminLabs() {

   // State pour stocker les données récupérées
   const [labs, setLabs] = useState([]);

   
   useEffect(() => {
     
     axios.get("http://38.242.136.15:3000/viewAllLab")
       .then(response => {
          
         setLabs(response.data);
       })
       .catch(error => {
         console.error("Erreur lors de la récupération des labs:", error);
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
    
          {labs.map((lab, index) => (
      <Link key={index} to="/admin/labdetail" className="rounded-lg overflow-hidden shadow-md m-4">
        <img className="w-1/3  mx-auto" src={labimg} alt="Card" />
        <div className="px-6 py-4 text-center">
          <span className=" block font-bold text-xl border rounded-xl px-8 py-1">
          {lab.wording}
          </span>
          <h4 className=' mt-3'>Niveau: {lab.level}</h4>
        </div>
      </Link>
        ))}
      {/* <div className="rounded-lg overflow-hidden shadow-md m-4">
        <img className="w-1/3  mx-auto" src={angularimg} alt="Card" />
        <div className="px-6 py-4 text-center">
          <Link className="font-bold text-xl border rounded-xl px-4">
            Angulaire
          </Link>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden shadow-md m-4">
        <img className="w-1/3  mx-auto" src={nextimg} alt="Card" />
        <div className="px-6 py-4 text-center">
          <Link className="font-bold text-xl border rounded-xl px-4">
            Nextjs
          </Link>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden shadow-md m-4">
        <img className="w-1/3  mx-auto" src={reactimg} alt="Card" />
        <div className="px-6 py-4 text-center">
          <Link className="font-bold text-xl border rounded-xl px-4">
            React
          </Link>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden shadow-md m-4">
        <img className="w-1/3  mx-auto" src={angularimg} alt="Card" />
        <div className="px-6 py-4 text-center">
          <Link className="font-bold text-xl border rounded-xl px-4">
            Angulaire
          </Link>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden shadow-md m-4">
        <img className="w-1/3  mx-auto" src={nextimg} alt="Card" />
        <div className="px-6 py-4 text-center">
          <Link className="font-bold text-xl border rounded-xl px-4">
            Nextjs
          </Link>
        </div>
      </div> */}
    </div>
  </div>
  )
}
