// Importa la configuración de aplicación desde Angular Core
import { ApplicationConfig } from '@angular/core';
// Importa el proveedor de enrutador para definir rutas en la aplicación
import { provideRouter } from '@angular/router';

// Importa las rutas definidas en el archivo app.routes.ts
import { routes } from './app.routes';
// Importa el proveedor HttpClient para habilitar las solicitudes HTTP
import { provideHttpClient } from '@angular/common/http';

// Configuración principal de la aplicación
export const appConfig: ApplicationConfig = {
  // Arreglo de proveedores de la aplicación
  providers: [
    provideRouter(routes), // Proveedor de rutas que usa las rutas definidas en app.routes.ts
    provideHttpClient()    // Proveedor de HttpClient para permitir las solicitudes HTTP en la aplicación
  ],
};
