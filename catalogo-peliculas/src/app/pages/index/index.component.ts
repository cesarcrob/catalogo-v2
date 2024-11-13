import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importar RouterOutlet

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {}
