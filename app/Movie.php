<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    //DEFINIMOS LOS CAMPOS
    protected $fillable = ['title', 'synopsis', 'year', 'cover'];
}
