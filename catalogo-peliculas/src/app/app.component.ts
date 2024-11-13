import { Component } from '@angular/core'; // Importar el decorador Component de Angular
/* import { RouterOutlet } from '@angular/router'; */ //Importar RouterOutlet permite la navegación de rutas
import { IndexComponent } from './pages/index/index.component'; // Importa el componente Index

@Component({
  selector: 'app-root', // Selector para usar el componente en HTML
  standalone: true, // Indica que este componente puede usarse de forma independiente
  /* imports: [RouterOutlet], */ // Permite usar RouterOutlet en el componente, descomentar si se necesita
  imports: [IndexComponent], // Importa el componente Index para que esté disponible en este componente
  templateUrl: './app.component.html', // Ruta al archivo de plantilla HTML
  styleUrl: './app.component.css' // Ruta a los estilos CSS del componente
})
export class AppComponent {
  title = 'catalogo-peliculas'; // Propiedad que puede ser utilizada en la plantilla
}
