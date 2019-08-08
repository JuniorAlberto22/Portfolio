import { RoutesService } from '../../services/routes/routes.service';
import { LoginService } from '../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginModel } from '../../Models/LoginModel';

@Component({
  selector: 'app-login-crud',
  templateUrl: './login-crud.component.html',
  styleUrls: ['./login-crud.component.css']
})
export class LoginCrudComponent implements OnInit {

  constructor(private loginService: LoginService, private routesService: RoutesService) {
  }

  close: any;
  habilidades: string[] = [];
  habilidade = new FormControl('');
  selectedFile: ImageSnippet;
  imageFile: any = 'assets/images/perfil.jpg';

  loginFormGroup = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl(''),
      nome: new FormControl(''),
      sobrenome: new FormControl(''),
    }
  );

  cadastrar() {
    const info = this.getInfo();
    this.loginService.addLogin(info).then(e => {
      this.closeModal();
      this.loginService.signLogin(info);
      this.routesService.goToHome(null);
    }).catch(e => console.log('Error: ' + e));
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
      uid: null,
      email: this.loginFormGroup.value.email,
      nome: this.loginFormGroup.value.nome,
      password: this.loginFormGroup.value.password,
      sobrenome: this.loginFormGroup.value.sobrenome,
      habilidades: this.habilidades,
      image: this.selectedFile.file,
      imagePath: null
    };
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
    });

    reader.readAsDataURL(file);
    reader.onload = () => this.imageFile = reader.result;
  }

  closeModal() {
    this.close();
  }

  ngOnInit() {
  }
}

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
