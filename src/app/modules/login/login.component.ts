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
  model2 = new User("","");

  submitted = false;
  onSubmit() {this.submitted = true;}

  checkPassword() {


    if (this.model2.username === this.model.username && this.model2.password  === this.model.password) {
      location.href="./"
    } else {
      alert("Usuario y contraseña no coinciden con ningún usuario registrado.")
    }
    
  }
 
}