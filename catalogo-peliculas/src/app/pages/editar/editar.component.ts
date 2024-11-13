// Importa el decorador Component de Angular, que define la clase como un componente
import { Component, OnInit } from '@angular/core';
// Importa ActivatedRoute y Router para manejar rutas y obtener parámetros de la URL
import { ActivatedRoute, Router } from '@angular/router';
// Importa FormBuilder y FormGroup para crear y gestionar formularios reactivos
import { FormBuilder, FormGroup } from '@angular/forms';
// Importa IndexService para interactuar con la API de películas
import { IndexService } from '../../services/index.service';
// Importa ReactiveFormsModule para usar formularios reactivos en el componente
import { ReactiveFormsModule } from '@angular/forms';
// Importa NgIf para usar la directiva *ngIf en el HTML
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-editar', // Define el selector que será utilizado para incluir este componente en el HTML
  standalone: true, // Indica que este componente es independiente y no depende de un módulo Angular específico
  imports: [ReactiveFormsModule, NgIf], // Importa ReactiveFormsModule y NgIf para ser utilizados en este componente
  templateUrl: './editar.component.html', // Define la ubicación del archivo HTML asociado al componente
  styleUrls: ['./editar.component.css'], // Define la ubicación del archivo CSS asociado al componente
})

export class EditarComponent implements OnInit {
  // 'movieForm' es el formulario reactivo que contendrá los campos de la película
  movieForm: FormGroup;
  // 'movieId' guarda el ID de la película que se editará
  movieId: string | null = null;
  // 'showSuccessMessage' controla la visualización de un mensaje de éxito después de actualizar la película
  showSuccessMessage = false;

  // El constructor inyecta los servicios necesarios: ActivatedRoute para acceder a los parámetros de la URL,
  // Router para navegar entre rutas, FormBuilder para crear el formulario reactivo, y IndexService para interactuar con la API
  constructor(
    private route: ActivatedRoute, // Accede a los parámetros de la ruta
    private router: Router, // Permite la navegación entre rutas
    private fb: FormBuilder, // Crea el formulario reactivo
    private service: IndexService // Servicio para interactuar con la API de películas
  ) {
    // Inicializa 'movieForm' usando FormBuilder
    this.movieForm = this.fb.group({
      title: [''], // Campo de título de la película
      synopsis: [''], // Campo de sinopsis de la película
      year: [''], // Campo de año de la película
      cover: [''], // Campo para la URL de la portada de la película
    });
  }

  // El método ngOnInit se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Obtiene el ID de la película desde los parámetros de la URL
    this.movieId = this.route.snapshot.paramMap.get('id');
    if (this.movieId) {
      // Si el ID existe, obtiene los detalles de la película usando el servicio y actualiza el formulario
      this.service.getMovie(this.movieId).subscribe((data) => {
        this.movieForm.patchValue(data); // Rellena el formulario con los datos obtenidos de la película
      });
    }
  }

  // El método onSubmit se ejecuta cuando el formulario se envía
  onSubmit() {
    // Si el ID de la película existe y el formulario es válido
    if (this.movieId && this.movieForm.valid) {
      // Llama al servicio para actualizar la película en la API
      this.service
        .updateMovie(this.movieId, this.movieForm.value)
        .subscribe(() => {
          // Si la actualización es exitosa, muestra un mensaje de éxito
          this.showSuccessMessage = true;

          // Después de 1.5 segundos, redirige al usuario a la lista de películas
          setTimeout(() => {
            this.router.navigate(['/movies']);
          }, 1500);
        });
    }
  }

  // Método para cerrar el mensaje de éxito
  closeAlert() {
    this.showSuccessMessage = false;
  }

  // Método para cancelar la edición y redirigir a la lista de películas
  cancel() {
    this.router.navigate(['/movies']);
  }
}
