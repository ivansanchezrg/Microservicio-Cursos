import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  cursos: any;

  constructor(private http: HttpClient, config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8060/cursos').subscribe((response) =>{
      this.cursos = response;
      console.log(response);
    });
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

}
