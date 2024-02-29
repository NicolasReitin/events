import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import FormValidate from '@/Components/FormValidate';
import CardShow from '@/Components/CardShow';


export default function book( {auth, event} ) {

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
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Booking</h2>}
        >
            <Head title="Booking" />  

        </AuthenticatedLayout>

        <h2 className='text-center text-5xl mt-5'>{event.type} de {artistsName} </h2>

        <CardShow 
        event = {event}
        />

        <div className='ml-10 mr-10 mt-10'>
            <h2 className='text-center text-xl'><strong>Information pour la réservation</strong></h2>

            <FormValidate 
            eventId = {event.id}
            />
            
        </div>
    </>
  )
}
