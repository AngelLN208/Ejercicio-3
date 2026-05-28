import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CursoService } from '../../services/curso';
import { MatriculaService } from '../../services/matricula';
import { Curso } from '../../models/curso';

@Component({
  selector: 'app-matricula',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './matricula.html',
  styleUrl: './matricula.css'
})
export class Matricula implements OnInit {

  cursos: Curso[] = [];
  matriculas: any[] = [];

  datos = {
    nombres: '',
    codigoEstudiante: '',
    cursoId: 0,
    turno: ''
  };

  private cursoService = inject(CursoService);
  private servicio = inject(MatriculaService);

  ngOnInit(): void {

    this.cargarCursos();
    this.cargarMatriculas();

  }

  // 🔥 CARGAR CURSOS
  cargarCursos() {

    this.cursoService.listarCursos().subscribe(data => {

      this.cursos = [...data];

    });

  }

  // 🔥 CARGAR MATRICULAS
  cargarMatriculas() {

    this.servicio.listar().subscribe(data => {

      this.matriculas = [...data];

    });

  }

  // 🔥 GUARDAR
  guardar() {

    if (!this.datos.cursoId) {
      alert('Selecciona un curso');
      return;
    }

    const cursoSeleccionado = this.cursos.find(
      c => c.id === Number(this.datos.cursoId)
    );

    if (!cursoSeleccionado) {
      alert('Curso no encontrado');
      return;
    }

    if (cursoSeleccionado.vacantes === 0) {
      alert('Sin vacantes');
      return;
    }

    this.servicio.guardar(this.datos).subscribe({

      next: () => {

        alert('Matrícula registrada');

        // 🔥 RECARGAR TABLAS
        this.cargarCursos();
        this.cargarMatriculas();

        // 🔥 LIMPIAR FORM
        this.datos = {
          nombres: '',
          codigoEstudiante: '',
          cursoId: 0,
          turno: ''
        };

      },

      error: (err) => {

        console.error(err);
        alert('Error al registrar');

      }

    });

  }

}