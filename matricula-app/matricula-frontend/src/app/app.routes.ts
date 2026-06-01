import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Cursos } from './pages/cursos/cursos';
import { Matricula } from './pages/matricula/matricula';

export const routes: Routes = [
  { path: '',          component: Inicio },
  { path: 'cursos',    component: Cursos },
  { path: 'matricula', component: Matricula }
];