import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Curos1Service {

  private apiUrl = 'http://localhost:8002'; // Reemplaza esta URL con la URL de tu API

  constructor(private http: HttpClient) { }

  addCurso(nombre: string, nombre_instructor: string, descripcion: string, costo: number) {
    const curso = { nombre, nombre_instructor, descripcion, costo };
    return this.http.post(this.apiUrl, curso);
  }
}
