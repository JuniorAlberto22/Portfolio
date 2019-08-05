import { LoginModel } from './../../Models/LoginModel';
import { LoginService } from './../../services/login/login.service';
import { RoutesService } from './../../services/routes/routes.service';
import { FormGroup, FormControl } from '@Angular/forms';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginCrudComponent } from 'src/app/modais/login-crud/login-crud.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  title = 'Login';
  close: any;

  modalRef: BsModalRef;

  loginFormGroup = new FormGroup(
    {
      email: new FormControl('edlane@gmail.com'),
      password: new FormControl('Teste123')
    }
  );

  constructor(private routesService: RoutesService, private modalService: BsModalService, private loginService: LoginService) {
  }

  closeModal() {
    this.close();
  }

  CriarConta() {
    const initialState = {
      close: () => this.modalRef.hide()
    };

    this.closeModal();
    this.modalRef = this.modalService.show(LoginCrudComponent, {initialState});
  }

  Entrar() {
    const model = new LoginModel();
    model.email = this.loginFormGroup.value.email;
    model.password = this.loginFormGroup.value.password;
    this.loginService.signLogin(model).then(s => {this.routesService.goToHome(null); this.closeModal();});
  }

  ngOnInit() { }
}
