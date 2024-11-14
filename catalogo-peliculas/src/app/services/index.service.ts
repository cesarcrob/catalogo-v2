// Importa el decorador Injectable, necesario para que el servicio pueda ser inyectado en otros componentes
import { Injectable } from '@angular/core';
// Importa HttpClient, que permite realizar solicitudes HTTP a servidores externos
import { HttpClient } from '@angular/common/http';
// Importa Observable, que se usa para manejar las respuestas asíncronas de las solicitudes HTTP
import { Observable } from 'rxjs';

// Decorador @Injectable define que este servicio puede ser inyectado en otros componentes
@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible de forma global en toda la aplicación
})
export class IndexService {
  // URL de la API para obtener la lista de películas desde el backend de Laravel
  private MOVIE_API = 'https://catalogo-v2-production.up.railway.app/api/movies';

  // Inyecta HttpClient en el constructor para permitir el uso de solicitudes HTTP
  constructor(private http: HttpClient) {}

  // Método que realiza una solicitud GET a la URL de la API para obtener todas las películas
  public getMovies(): Observable<any> {
    return this.http.get(this.MOVIE_API); // Retorna un Observable que emitirá los datos de las películas
  }

  // Método para obtener los detalles de una película en base a su ID
  // 'id' es el identificador de la película que se desea obtener
  public getMovie(id: string | null): Observable<any> {
    return this.http.get(`${this.MOVIE_API}/${id}`); // Realiza una solicitud GET para obtener los detalles de una película específica
  }

  // Método para actualizar los detalles de una película en el backend
  // 'id' es el identificador de la película que se desea actualizar
  // 'movieData' contiene los nuevos datos de la película
  public updateMovie(id: string, movieData: any): Observable<any> {
    return this.http.put(`${this.MOVIE_API}/${id}`, movieData); // Realiza una solicitud PUT para actualizar los datos de una película
  }

  // Método para eliminar una película del backend
  // 'id' es el identificador de la película a eliminar
  public deleteMovie(id: string): Observable<any> {
    return this.http.delete(`${this.MOVIE_API}/${id}`); // Realiza una solicitud DELETE para eliminar una película
  }

  // Método para agregar una nueva película al backend
  // 'movie' contiene los datos de la nueva película que se desea agregar
  public addMovie(movie: any): Observable<any> {
    return this.http.post(this.MOVIE_API, movie); // Realiza una solicitud POST para agregar una nueva película
  }
}
