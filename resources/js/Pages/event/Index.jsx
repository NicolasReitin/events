import React from 'react'
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card';

function events( {auth, events} ) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Events</h2>}
            >
                <Head title="Events" />  

            </AuthenticatedLayout>

            <div>
                <h2 className='text-center text-5xl mt-5'>Liste des événements :</h2>
                
                <div className='flex flex-wrap  gap-10 mt-5 ml-10'>
                    {events.map((event) => (
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

