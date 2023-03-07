import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  signin : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;

  model = new User("admin", "admin");

  submitted = false;
  onSubmit() {this.submitted = true;}

  get emailInput() { return this.signin.get('username'); }
  get passwordInput() { return this.signin.get('password'); } 
 
}

//function getErrorMessagenombre() {
//  if(this.signin.email.hasError('required')){
//   return 'Debes introducir un nombre';
//  } 
//  return this.password.hasError('password') ? 'No es un nombre valido' : '';
//}