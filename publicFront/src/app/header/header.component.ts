import { RoutesService } from './../services/routes/routes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  inicio = 'Início';
  feed = 'Feed';
  quemSomonNos = 'Quem Somos Nós';
  servicos = 'Serviços';
  contatos = 'Contatos';

  constructor(private routes: RoutesService) { }

  ngOnInit() {
  }

  goToSignUp() {
    this.routes.goToSignUp('');
  }

}
