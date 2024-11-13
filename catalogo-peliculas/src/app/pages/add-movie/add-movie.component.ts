// Importa el decorador Component de Angular, que define la clase como un componente
import { Component } from '@angular/core';
// Importa HttpClient para realizar solicitudes HTTP
import { HttpClient } from '@angular/common/http';
// Importa Router para permitir la navegación entre rutas dentro de la aplicación
import { Router } from '@angular/router';
// Importa IndexService para interactuar con el servicio de películas (comunicarse con la API)
import { IndexService } from '../../services/index.service';
// Importa FormsModule para manejar formularios en el componente
import { FormsModule } from '@angular/forms';
// Importa NgIf para usar la directiva *ngIf en el HTML
import { NgIf } from '@angular/common';
// Importa Title para manipular el título de la página
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-movie', // Define el selector que será utilizado para incluir este componente en el HTML
  standalone: true, // Indica que este componente es independiente y no depende de un módulo Angular específico
  imports: [FormsModule, NgIf], // Importa los módulos FormsModule y NgIf para usarlos en este componente
  templateUrl: './add-movie.component.html', // Define la ubicación del archivo HTML asociado al componente
  styleUrl: './add-movie.component.css' // Define la ubicación del archivo CSS asociado al componente
})

export class AddMovieComponent {
  // Objeto 'movie' que se usará para capturar los datos del formulario
  movie = {
    title: '', // Nombre de la película
    synopsis: '', // Sinopsis de la película
    cover: '', // URL de la portada de la película
    year: null, // Año de la película
  };

  // Bandera para mostrar un mensaje de éxito cuando la película haya sido agregada
  isMovieAdded = false;

  // El constructor inyecta los servicios necesarios: IndexService para interactuar con la API y Router para navegar entre rutas
  constructor(private service: IndexService, private router: Router) {}

  // Método que se ejecuta cuando se envía el formulario
  onSubmit() {
    // Llama al servicio para agregar la película y maneja la respuesta de forma asíncrona
    this.service.addMovie(this.movie).subscribe(
      (response) => {
        console.log('Película agregada', response); // Muestra la respuesta en la consola
        this.isMovieAdded = true; // Establece la bandera de éxito
        setTimeout(() => {
          // Después de 1.5 segundos, redirige a la página de películas
          this.isMovieAdded = false; // Oculta el mensaje de éxito
          this.router.navigate(['/movies']); // Redirige a la lista de películas
        }, 1500);
      },
      (error) => {
        // Si ocurre un error, lo muestra en la consola
        console.error('Error agregando película', error);
      }
    );
  }

  // Método para cancelar la operación y redirigir al usuario a la lista de películas
  cancel() {
    this.router.navigate(['/movies']); // Redirige a la página de películas
  }
}
