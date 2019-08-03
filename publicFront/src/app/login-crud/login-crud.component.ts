import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@Angular/forms';
import { LoginModel } from '../Models/LoginModel';

@Component({
  selector: 'app-login-crud',
  templateUrl: './login-crud.component.html',
  styleUrls: ['./login-crud.component.css', './login-crud.component.sass']
})
export class LoginCrudComponent implements OnInit {

  habilidades: string[] = [];
  habilidade = new FormControl('');

  loginFormGroup = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl(''),
      nome: new FormControl(''),
      sobrenome: new FormControl(''),
    }
  );

  constructor() { }

  cadastrar() {
    console.log(this.getInfo());
  }

  adicionarHabilidade(habilidade: string) {
    if (habilidade && !this.habilidades.includes(habilidade)) {
      console.log(this.habilidade);
      this.habilidades.push(habilidade);
      this.habilidade.setValue(null);
    }
  }

  excluirHabilidade(habilidade: string) {
    for (let i = 0; i < this.habilidades.length; i++) {
      if (this.habilidades[i] === habilidade) {
        this.habilidades.splice(i, 1);
      }
    }
  }

  getInfo(): LoginModel {
    return {
      email: this.loginFormGroup.value.email,
      nome: this.loginFormGroup.value.nome,
      password: this.loginFormGroup.value.password,
      sobrenome: this.loginFormGroup.value.sobrenome,
      habilidades: this.habilidades
    };
  }

  ngOnInit() {
  }
}
