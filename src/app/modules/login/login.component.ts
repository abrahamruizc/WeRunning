import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UrlSegment } from '@angular/router';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
    username = new FormControl('', [Validators.required]);
    password = new FormControl('', [Validators.required, Validators.min(3) ]);
  hide = true;

  model = new User("admin", "admin");

  submitted = false;
  onSubmit() {this.submitted = true;}

  checkPassword() {
    let username = (<HTMLInputElement>document.getElementById("username")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value

    console.log(username);
    console.log(this.model.username);

    if (username === this.model.username && password === this.model.password) {
      location.href="./"
    } else {
      alert("Usuario y contraseña no coinciden con ningún usuario registrado.")
    }
    
  }
 
}