import { RoutesService } from './../../services/routes/routes.service';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.css']
})
export class LogoutModalComponent implements OnInit {

  close: any;
  title = 'Logout';
  constructor(private loginSrevice: LoginService, private routesService: RoutesService) { }

  closeModal() {
    this.close();
  }

  sair() {
    this.loginSrevice.logOut().
    then(() => {
      this.closeModal();
      this.routesService.goToHome(null);
    }).catch(err => console.log(err));
  }

  ngOnInit() {
  }

}
