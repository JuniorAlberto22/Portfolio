import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private router: Router) { }

  goToHome(data: any) {
    this.callRoute('home', data);
  }

  goToSignUp(data: any) {
    this.callRoute('signup', data);
  }

  private callRoute(route: string, data: any) {
    if (data) {
      this.router.navigate([route, data]);
    } else {
      this.router.navigate([route]);
    }
  }
}
