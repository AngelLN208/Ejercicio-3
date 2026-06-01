import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private http = inject(HttpClient);

  private api = 'http://localhost:8080/api/cursos';

  listarCursos(): Observable<Curso[]> {

    return this.http.get<Curso[]>(this.api);

  }

}