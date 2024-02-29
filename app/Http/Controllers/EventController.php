<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Showroom;
use App\Http\Requests\StoreeventRequest;
use App\Http\Requests\UpdateeventRequest;
use Inertia\Inertia;

class EventController extends Controller
{
    public function book(event $event)
    {
        
    }
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(event $event)
    {
        // dd($event);
        $showroom = Showroom::query()
            ->where('id', '=', $event->id)
            ->get();

        $event->load('artists');
        $event->load('showroom');
        // dd($event);
            
        return Inertia::render('event/Show', ['event' => $event, 'showroom' => $showroom]);
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
