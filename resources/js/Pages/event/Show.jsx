import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react'
import ButtonLink from '@/Components/ButtonLink';
import CardShow from '@/Components/CardShow';

export default function show( {auth, event} ) {
  // console.log(event);
    function formatDateTime(dateTimeString) {
        const year = dateTimeString.substr(0, 4); // Ajoutez ici le millésime complet si nécessaire
        const month = dateTimeString.substr(5, 2);
        const day = dateTimeString.substr(8, 2);
        const hours = dateTimeString.substr(11, 2);
        const minutes = dateTimeString.substr(14, 2);
    
        return `${day}/${month}/${year} à ${hours}:${minutes}`;
    }

    const artistsName =  event.artists.map((artist) => {
      return <>
          <a href="" key={artist.id} >            
              {artist.name}
          </a>
      </>
    }) 

  return (
    <>
      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Event</h2>}
      >
        <Head title="Events" />  

      </AuthenticatedLayout>
      {/* {console.log(event.artists)} */}
      
      <h2 className='text-center text-5xl mt-5'>{event.type} de {artistsName} </h2>

      <CardShow
        event = {event}
        />

    </>
  )
}
