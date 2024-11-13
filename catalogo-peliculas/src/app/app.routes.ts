import { Routes } from '@angular/router'; // Importa el tipo Routes del módulo de Angular Router
import MovieComponent from './pages/movie/movie.component'; // Importa el componente MovieComponent para mostrar detalles de una película
import MoviesComponent from './pages/movies/movies.component'; // Importa el componente MoviesComponent que muestra el catálogo de películas
import { HomeComponent } from './pages/home/home.component'; // Importa el componente HomeComponent para la página de inicio
import { EditarComponent } from './pages/editar/editar.component'; // Importa el componente EditarComponent para la edición de películas
import { AddMovieComponent } from './pages/add-movie/add-movie.component'; // Importa el componente AddMovieComponent para agregar nuevas películas

// Define las rutas de la aplicación
export const routes: Routes = [
    {
        path: 'movies', // Ruta para el catálogo de películas
        component: MoviesComponent, // Asocia esta ruta al componente MoviesComponent que muestra el catálogo
    },
    {
        path: 'movie/:id', // Ruta para mostrar detalles de una película específica. El ':id' es un parámetro dinámico de la ruta.
        component: MovieComponent, // Asocia esta ruta al componente MovieComponent que muestra los detalles de una película
    },
    /* 
    {
        path: '', // Redireccionar a la lista de películas si la ruta está vacía
        redirectTo: '/movies', // Redirige automáticamente a la ruta '/movies' cuando no se ingresa ninguna ruta
        pathMatch: 'full', // Asegura que se haga un redireccionamiento solo cuando la ruta esté completamente vacía
    }
    */
    {
        path: 'editar/:id', // Ruta para editar una película, donde ':id' es el ID de la película a editar
        component: EditarComponent, // Asocia esta ruta al componente EditarComponent, que maneja la lógica de edición
    },
    {
        path: 'add-movie', // Ruta para agregar una nueva película
        component: AddMovieComponent, // Asocia esta ruta al componente AddMovieComponent para crear una película nueva
    },     
    {
        path: '', // Ruta vacía para la página de inicio (cuando no se especifica ninguna ruta)
        component: HomeComponent, // Asocia esta ruta al componente HomeComponent, que es la página principal de la aplicación
    }
];
