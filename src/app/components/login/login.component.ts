import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtRequest } from './../../models/jwtRequest';
import { LoginService } from './../../services/login.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) { }
  username: string = ""
  password: string = ""
  mensaje: string = ""
  role: string = ""
  ngOnInit(): void {

  }

  login() {
    let request = new JwtRequest();
    request.Username = this.username;
    request.Password = this.password;
    this.loginService.login(request).subscribe((data: any) => {
      sessionStorage.setItem("token", data.jwttoken);
      if (this.loginService.showRole() == 'ADMIN') {
        this.router.navigate(['components/entidades']);
      }
      else if (this.loginService.showRole() == 'ESTUDIANTE') {
        this.router.navigate(['components/curso/1']);
      }

    }, error => {
      this.mensaje = "Credenciales incorrectas!!!"
      this.snackBar.open(this.mensaje, "Aviso",{duration:2000});
    });
  }
}
