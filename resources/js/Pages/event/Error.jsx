import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';



export default function Success( {auth, event}) {
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
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Error</h2>}
        >
            <Head title="Error" />  

        </AuthenticatedLayout>

        <h3 className='mt-10 ml-10'>Il n'y a plus de place pour le {event.type} de <strong>{artistsName}</strong>...</h3>
        <p className='mt-10 ml-10'>Merci de votre compréhension!!</p>
    </>
  )
}
