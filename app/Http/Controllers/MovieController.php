<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Movie;

class MovieController extends Controller
{
    //Aquí colocamos la función GET de todas las movies.
    public function index()
    {
        // Aquí se obtienen todas las movies desde el modelo Movie
        $movies = Movie::all();

        // Regresar las movies en formato JSON
        return response()->json($movies);
    }

    // Aquí colocamos la función para obtener una película en específico
    public function show($id)
    {
        //Función para buscar el registro por su ID
        $movie = Movie::find($id);

        //Si no existe el registro, regresar error 404
        If (!$movie){
            return response()->json(['message' => 'La movie no está en la lista'], 404);
        }

        //Si el registro si existe, devolverlo en un formato JSON
        return response()->json($movie);
    }

    // Aquí colocamos la función para agregar nuevos registros
    public function post(Request $request)
    {
        // Validación de los datos que se reciben
        $request->validate([
            'title' => 'required|string|max:200',
            'synopsis' => 'required|string|max:400',
            'year' => 'required|integer',
            'cover' => 'required|string|max:200',
        ]);

        // Creación de una nueva movie en la BD
        $movie = Movie::create([
            'title' => $request->title,
            'synopsis' => $request->synopsis,
            'year'=> $request->year,
            'cover' => $request->cover,
        ]);

        //Regresar mensaje de respuesta de éxito
        return response()->json(['message' => 'Movie agregada con éxito',
        'data' => $movie], 201);

    }

    // Aquí colocamos la función para actualizar registros
    public function update(Request $request,$id){
        $validateData = $request->validate([
            'title' => 'required|string|max:255',
            'synopsis' => 'required|string|max:500',
            'year' => 'required|integer',
            'cover' => 'required|string|max:255',
        ]);

        $movie = Movie::findOrFail($id);
        $movie ->update($validateData);

        return response()->json($movie);
    }

        // Aquí colocamos la función para borrar registros
    public function destroy($id){
        $movie = Movie::findOrfail($id);
        $movie->delete();

        return response()->json(['message' => 'La película seleccionada se borró con éxito']);
    }


}
