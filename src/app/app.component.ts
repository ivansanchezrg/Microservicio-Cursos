import { Component } from '@angular/core';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Microservicio-Cursos';

  constructor(private http: HttpClient, config: NgbModalConfig, private modalService: NgbModal) { }

  openModal(content: any) {
    this.modalService.open(content);
  }

}
