<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstname', // Ajoutez 'first_name' à la liste des champs remplissables
        'lastname',
        'email',
        'adress',
        'postalcode',
        'city',
    ];

    public function event() { // association N/N avec table article_tag
        return $this->belongsToMany(Tag::class, 'events_customers', 'customer_id', 'event_id');
    }
}
