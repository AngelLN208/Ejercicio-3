import { Component } from '@angular/core';
import { Matricula } from './pages/matricula/matricula';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Matricula],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}