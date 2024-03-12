import React, { useState } from 'react'
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card';
import Search from '@/Components/Search';

function events( {auth, events} ) {

    const [searchBar, setSearchBar] = useState('');

      // Filtrer les cartes en fonction du terme de recherche
  const filteredEvents = events.filter(event => {
    // Vérifier si le terme de recherche est inclus dans le name de l'artist ou le name de la salle
    return event.artists[0].name.toLowerCase().includes(searchBar) ||
            event.showroom.name.toLowerCase().includes(searchBar)   
    // Vous pouvez étendre cette logique pour inclure d'autres propriétés d'événements
  });

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Events</h2>}
            >
                <Head title="Events" />  

            </AuthenticatedLayout>

            <Search 
            setSearchBar={setSearchBar}
            />

            <div>
                <h2 className='text-center text-5xl mt-5'>Liste des événements :</h2>
                
                <div className='flex flex-wrap  gap-10 mt-5 ml-10'>
                    {filteredEvents.map((event) => (
                        <>
                            <Card
                            key = {event.id}
                            event = {event}
                            >

                            </Card>
                        </>
                    ))}
                </div>
                
            </div>
            

            



        </>
    );
}

export default events

