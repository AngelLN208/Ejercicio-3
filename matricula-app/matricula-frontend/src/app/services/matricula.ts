import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MatriculaService {

  private api = 'http://localhost:8080/api/matriculas';

  constructor(private http: HttpClient) {}

  guardar(data: any) {
    return this.http.post(this.api, data);
  }

  // 🔥 ESTE ES EL QUE TE FALTA O ESTÁ MAL
  listar() {
    return this.http.get<any[]>(this.api);
  }
}