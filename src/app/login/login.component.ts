import { Component, OnInit } from '@angular/core';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

}
