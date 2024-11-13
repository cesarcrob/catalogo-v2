import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndexService } from '../../services/index.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export default class MovieComponent implements OnInit {
  movie: any;  // Almacena los datos de la película seleccionada
  showDeleteMessage = false;  // Controla si se muestra el mensaje de confirmación de eliminación

  constructor(
    private route: ActivatedRoute,  // Permite acceder a los parámetros de la ruta activa
    private service: IndexService,  // Servicio que maneja las peticiones HTTP para películas
    private router: Router  // Permite la navegación entre rutas en Angular
  ) {}

  ngOnInit(): void {
    // Obtiene el ID de la película desde los parámetros de la URL
    const id = this.route.snapshot.paramMap.get('id');
    
    // Llama al servicio para obtener los detalles de la película utilizando el ID
    this.service.getMovie(id).subscribe((data: any) => {
      this.movie = data;  // Asigna los datos obtenidos a la variable 'movie'
    });
  }

  editar() {
    // Redirige a la página de edición de la película utilizando el ID de la película
    this.router.navigate(['editar', this.movie.id]);
  }

  confirmDelete() {
    // Muestra un cuadro de confirmación antes de eliminar la película
    if (confirm('¿Está seguro de eliminar esta película?')) {
      this.deleteMovie();  // Si el usuario confirma, se llama a la función de eliminación
    }
  }

  deleteMovie() {
    // Verifica si la película tiene un ID antes de proceder a la eliminación
    if (this.movie.id) {
      this.service.deleteMovie(this.movie.id).subscribe(() => {
        this.showDeleteMessage = true;  // Muestra el mensaje de eliminación
        setTimeout(() => {
          this.router.navigate(['/movies']);  // Redirige al catálogo de películas después de 1.5 segundos
        }, 1500);
      });
    }
  }

  closeAlert() {
    // Cierra el mensaje de confirmación de eliminación
    this.showDeleteMessage = false;
  }
}
