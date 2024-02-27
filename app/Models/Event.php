<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    public function artist() { // association N/N avec table article_tag
        return $this->belongsToMany(Tag::class, 'events_artists', 'event_id', 'artist_id');
    }

    public function category() { // association N/N avec table article_tag
        return $this->belongsToMany(Tag::class, 'events_categoties', 'event_id', 'category_id');
    }

    public function tag() { // association N/N avec table article_tag
        return $this->belongsToMany(Tag::class, 'events_tags', 'event_id', 'tag_id');
    }

    public function customer() { // association N/N avec table article_tag
        return $this->belongsToMany(Tag::class, 'events_customers', 'event_id', 'customer_id');
    }
    
    
}
