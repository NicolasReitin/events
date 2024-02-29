<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Event;
use App\Models\Customer;
use App\Models\Showroom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreeventRequest;
use App\Http\Requests\UpdateeventRequest;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::query()
        ->with(['artists', 'showroom'])->get();
        // dd($events);
        return Inertia::render('event/Index', ['events' => $events]);
    }
    
    public function book(event $event)
    {
        $event->load('artists');
        $event->load('showroom');
        
        return Inertia::render('event/Book', ['event' => $event]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreeventRequest $request)
    {
        $firstName = $request->input('firstName');
        $lastName = $request->input('lastName');
        $email = $request->input('email');
        $adress = $request->input('adress');
        $postalCode = $request->input('postalCode');
        $city = $request->input('city');
        // dd($firstName);

        $eventId = $request->input('eventId'); // recup de l'id de l'event dans le form en hidden
      
        //recup de l'objet event
        $event = Event::query()
                ->with(['artists', 'showroom'])
                ->where('id', $eventId)
                ->first();

        // recup du nombre de place déjà reservé
        $bookingNumber = $event->booking_number;

        //recup de l'id de la salle de l'event pour retrouver la capacité totale de la salle
        $showroomId = $event->first()->showroom_id;

        //recup de la capacité de la salle
        $showroom = Showroom::select('capacity')
                    ->where('id', $showroomId)
                    ->first();
        $capacity = $showroom->capacity;

        
        //vérif qu'il reste des places
        if (($capacity - $bookingNumber) > 0 ) {
            //on créé le client
            $customer = Customer::create([
                'firstname' => $firstName,
                'lastname' => $lastName,
                'email' => $email,
                'adress' => $adress,
                'postalcode' => $postalCode,
                'city' => $city
            ]);

            // on récup l'id qui vient d'être créé
            $customerId = $customer->id;
            
            //on injecte dans la table booking le ticket
            DB::table('booking')->insert([
                'event_id' => $eventId,
                'customer_id' => $customerId,
                'date_purchase' => now()
            ]);

            // on incremente le nombre de reservation du nombre de billets pris
            Event::query()
            ->where('id', $eventId )
            ->increment('booking_number', 1);

            return redirect()->route('event.success', ['eventId' => $event->id]);

        }else{

            return redirect()->route('event.error', ['eventId' => $event->id]);
            
        }
    }

    public function success(event $event)
    {
        //
    }

    public function error(event $event)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(event $event)
    {
        // dd($event);
        $event->load('artists');
        $event->load('showroom');
            
        return Inertia::render('event/Show', ['event' => $event]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateeventRequest $request, event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(event $event)
    {
        //
    }

}
