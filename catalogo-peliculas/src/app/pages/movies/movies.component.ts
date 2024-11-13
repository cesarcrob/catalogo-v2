// Importa Component y OnInit desde Angular Core para definir un componente y su ciclo de vida
import { Component, OnInit } from '@angular/core';
// Importa NgFor para poder iterar listas en el template HTML
import { NgFor } from '@angular/common';
// Importa RouterLink para definir enlaces de navegación en el template HTML
import { RouterLink } from '@angular/router';
// Importa IndexService, el servicio que proporciona los datos de las películas desde la API
import { IndexService } from '../../services/index.service';

@Component({
  selector: 'app-movies',       // Define el selector que se usa para incluir este componente en el HTML
  standalone: true,              // Especifica que el componente es autónomo y no requiere estar en un módulo
  imports: [NgFor, RouterLink],  // Especifica los módulos necesarios para este componente, como NgFor y RouterLink
  templateUrl: './movies.component.html', // Ruta al archivo HTML del componente
  styleUrls: ['./movies.component.css'],  // Ruta al archivo CSS del componente
})
export default class MovieComponent implements OnInit {
  // Define la propiedad movies como un array para almacenar la lista de películas
  movies: any = [];

  // Inyecta el servicio IndexService en el constructor para usarlo en el componente
  constructor(private service: IndexService) {}

  // Método que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Llama al método getMovies del servicio para obtener las películas
    this.service.getMovies().subscribe((data: any) => {
      this.movies = data; // Asigna la lista de películas al array movies
    });
  }
}
