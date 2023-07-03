import { Component } from '@angular/core';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Curos1Service } from './service/curos1.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Microservicio-Cursos';
  nombre: string ='';
  nombre_instructor: string='';
  descripcion: string='';
  costo: number=0;

  constructor(private http: HttpClient, config: NgbModalConfig, private modalService: NgbModal,
    private cursoService: Curos1Service) { }

  openModal(content: any) {
    this.modalService.open(content);
  }

  addCurso() {
    this.cursoService.addCurso(this.nombre, this.nombre_instructor, this.descripcion, this.costo)
      .subscribe(
        (data) => Swal.fire(
          'Good job!',
          'Registro Exitoso!',
          'success',
        ), // En caso de éxito
        (error) => console.log(error) // En caso de error
      );

      
  }


}
