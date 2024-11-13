<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder; //IMPORTAR MODELO MOVIE
use App\Movie; //IMPORTAR MODELO MOVIE

class MoviesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // LIMPIAR TABLA ANTES DE INSERTAR DATOS NUEVOS
        Movie::truncate();

        // CREAR INSTANCIA FAKER
        $faker = \Faker\Factory::create();

        // INGRESAR 10 REGISTROS FALSOS A LA TABLA DE LA BD
        for ($i = 0; $i < 10; $i++) {
            Movie::create([
                'title' => $faker->sentence,    // TÍTULO ALEATORIO
                'synopsis' => $faker->paragraph, // SINÓPSIS ALEATORIA
                'year' => $faker->numberBetween(1900, 2024), // AÑO ALEATORIO
                'cover' => $faker->sentence, //LINK PORTADA IMAGEN
            ]);
        }
    }
}
