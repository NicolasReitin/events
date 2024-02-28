<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;

    protected $fillable = ['name'];


    public function events() { // association N/N avec table article_tag
        return $this->belongsToMany(Event::class, 'events_artists');
    }




}
