<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events_categoties', function (Blueprint $table) {
            $table->foreignId(column: 'event_id')->constrained(table: 'events');
            $table->foreignId(column: 'category_id')->constrained(table: 'categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events_categoties');
    }
};
