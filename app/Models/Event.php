<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = ['type', 'date_start', 'date_end', 'booking_number'];

    public function artists() { // association N/N avec table article_tag
        return $this->belongsToMany(Artist::class, 'events_artists');
    }

    public function showroom() { // association N/N avec table article_tag
        return $this->belongsTo(Showroom::class);
    }

    public function category() { // association N/N avec table article_tag
        return $this->belongsToMany(Category::class);
    }

    public function tag() { // association N/N avec table article_tag
        return $this->belongsToMany(Tag::class);
    }

    public function customer() { // association N/N avec table article_tag
        return $this->belongsToMany(Customer::class, 'events_customers', 'event_id', 'customer_id');
    }
    
    
}
