import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoService } from '../../services/curso';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class Cursos implements OnInit {

  cursos: any[] = [];

  private cursoService = inject(CursoService);

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos() {
    this.cursoService.listarCursos().subscribe(data => {
      this.cursos = data;
    });
  }

  estado(vacantes: number) {
    return vacantes > 0 ? 'Disponible' : 'Sin vacantes';
  }
}