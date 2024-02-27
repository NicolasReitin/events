<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    public function event() { // association N/N avec table article_tag
        return $this->belongsToMany(Tag::class, 'events_tags', 'tag_id', 'event_id');
    }
}
