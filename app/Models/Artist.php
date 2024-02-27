<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function eventArtist() { // association N/N avec table article_tag
        return $this->belongsToMany(Tag::class, 'events_artists', 'artist_id', 'event_id');
    }

    // public function event() { // association 1/N avec la table users
    //     return $this->belongsTo(User::class, 'user_id');
    // }


}
