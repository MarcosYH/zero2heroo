import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ParcourDetail = ({ match }) => {
    const [parcours, setParcours] = useState(null);
    const { id } = useParams(); // Utilisez useParams pour extraire l'ID du parcours de l'URL

    useEffect(() => {
        // Effectuer une requête pour récupérer les détails du parcours par son ID
        axios.get(`https://backend-zro2hero.vercel.app/parcours/viewOnePath/${id}`)
            .then(response => {
                setParcours(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des détails du parcours:", error);
            });
    }, [id]); // Utilisez id dans le tableau de dépendances

    // Si le parcours n'est pas encore chargé, affichez un message de chargement
    if (!parcours) {
        return (
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-yellow-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-yellow-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-yellow-400"></div>
            </div>
        );
    }
    return (
        <div className='p-10 px-20 lg:ml-64'>
            <h1 className=' text-3xl'>Nom du parcours: {parcours.wording}</h1>
            <h4 className=' text-2xl'>Categorie: {parcours.categorie} </h4>
            <p>Description: {parcours.description}</p>
        </div>
    );
}

export default ParcourDetail;
