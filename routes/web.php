<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\ProfileController;
use App\Models\Event;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $events = Event::query()
        ->with(['artists', 'showroom'])->get();
    return Inertia::render('Dashboard', [
        'events' => $events   
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');



Route::get('/events', [EventController::class, 'index'])->name('event.index');
Route::get('/event/{event}', [EventController::class, 'show'])->name('event.show');
Route::get('/event/book/{event}', [EventController::class, 'book'])->name('event.book');
Route::post('/event/store', [EventController::class, 'store'])->name('event.store');


Route::get('/event/booking/success/{eventId}', function ($eventId) {
    $event = Event::with('artists', 'showroom')
    ->find($eventId);
    return Inertia::render('event/Success', ['event' => $event]);
})->name('event.success');


Route::get('/event/booking/error/{eventId}', function ($eventId) {
    $event = Event::with('artists', 'showroom')
    ->find($eventId);
    return Inertia::render('event/Error', ['event' => $event]);
}) ->name('event.error');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
