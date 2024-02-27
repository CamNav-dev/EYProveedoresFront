import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EYProveedoresUI';
  role: string = '';
  username: string = '';

  constructor(
    private loginService: LoginService,
  ) {}

  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    this.role = this.loginService.showRole();
    this.username = this.loginService.getUsername();

    return this.loginService.verificar();
  }
  validarRol() {
    if (this.role == 'ADMIN' || this.role == 'CLIENTE') {
      return true;
    } else {
      return false;
    }
  }
}


