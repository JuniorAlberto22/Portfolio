import { LoginModel } from './../Models/LoginModel';
import { LoginService } from './../services/login/login.service';
import { LoginModalComponent } from './../modais/login-modal/login-modal.component';
import { RoutesService } from './../services/routes/routes.service';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: LoginModel;

  inicio = 'Início';
  feed = 'Feed';
  quemSomonNos = 'Quem Somos Nós';
  servicos = 'Serviços';
  contatos = 'Contatos';

  modalRef: BsModalRef;

  constructor(private routes: RoutesService, private modalService: BsModalService, private loginServide: LoginService) {
    LoginService.userEmitter.subscribe(s => {
      this.user = s ? s[0] : this.user;
      console.log('Event' + s);
    });
  }

  ngOnInit() {
  }

  openLoginModal() {
    const initialState = {
      close: () => this.modalRef.hide()
    };
    this.modalRef = this.modalService.show(LoginModalComponent, {initialState});
  }

  isLogged(): boolean {
    return this.user ? true : false;
  }
}

