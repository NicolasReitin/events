import React from 'react'
import ButtonLink from './ButtonLink';

export default function Card( {event} ) {

    const artistsName =  event.artists.map((artist) => {
        return <>
            <a href="" key={artist.id} >            
                {artist.name}
            </a>
        </>
    }) 

//conversion heure format
    function formatDateTime(dateTimeString) {
        const year = dateTimeString.substr(0, 4); // Ajoutez ici le millésime complet si nécessaire
        const month = dateTimeString.substr(5, 2);
        const day = dateTimeString.substr(8, 2);
        const hours = dateTimeString.substr(11, 2);
        const minutes = dateTimeString.substr(14, 2);
    
        return `${day}/${month}/${year} à ${hours}:${minutes}`;
    }

  return (
    <div 
    className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {artistsName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong className='text-gray-300'>Date de début :</strong> {formatDateTime(event.date_start)}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong className='text-gray-300'>Date de fin :</strong> {formatDateTime(event.date_end)}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong className='text-gray-300'>Capacité totale :</strong> {event.showroom.capacity}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong className='text-gray-300'>Places restantes :</strong> {event.showroom.capacity - event.booking_number}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong className='text-gray-300'>A partir de : </strong> {event.price} €</p>
        
        <ButtonLink 
            hrefLink = {route('event.show', event.id )}
        />
    </div>
  )
}
