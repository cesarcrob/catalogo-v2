<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Movie; //Se incluye elmodelo
use App\Http\Controllers\MovieController; //Se incluye el controlador MovieControler

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//Definimos la ruta GET para obtener todas las movies.
Route::get('/movies', [MovieController::class, 'index']);

//Aquí colocamos la ruta para obtener el registro específico por ID
Route::get('/movies/{id}', [MovieController::class, 'show']);

// Aquí colocamos la ruta para agregar un nuevo registro a la BD
Route::post('/movies', [MovieController::class, 'post']);

// Aquí colocamos la ruta para actualizar un registro a la BD
Route::put('/movies/{id}', [MovieController::class, 'update']);

// Aquí colocamos la ruta para borrar un registro a la BD
Route::delete('/movies/{id}', [MovieController::class, 'destroy']);