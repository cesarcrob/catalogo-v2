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
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title'); // TÍTULO - TIPO STRING
            $table->text('synopsis'); // SIPNÓSIS - TIPO TEXT
            $table->integer('year'); // AÑO - TIPO INTEGER
            $table->string('cover'); // COVER - TIPO STRING
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};
