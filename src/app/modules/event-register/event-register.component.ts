import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Person } from './person.model';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.scss']
})
export class EventRegisterComponent {


nombre = new FormControl('', [Validators.required, Validators.minLength(8)]);
apellidos = new FormControl('', [Validators.required, Validators.minLength(8)]);
correo = new FormControl('', [Validators.required, Validators.email]);
fecha = new FormControl('', [Validators.required]);
contrasena1 = new FormControl('', [Validators.required]);
contrasena2 = new FormControl('', [Validators.required]);

submitted = false;

model = new Person("", "", "" , "");

//, Validators.pattern("^(?=^[ -~]{6,64}$)(?=.([a-z][A-Z]))(?=.[0-9])(.*[ -/|:-@|[-`|{-~]).+$")
onSubmit() { 
  this.submitted = true;
  
}


getErrorMessagenombre() {
  if(this.apellidos.hasError('required')){
    return 'Debes introducir un nombre';
  } 
 

  return this.nombre.hasError('nombre') ? 'No es un nombre valido' : '';
}


getErrorMessageapellidos() {
  if(this.apellidos.hasError('required')){
    return 'Debes introducir un apellido';
  } 
 

  return this.apellidos.hasError('apellido') ? 'No es un apellido valido' : '';
}


getErrorMessagecorreo() {
  if(this.correo.hasError('required')){
    return 'Debes introducir un correo electronico';
  }

  return this.correo.hasError('correo') ? 'No es un correo valido' : '';
}

getErrorMessagefecha() {
  if(this.fecha.hasError('required')){
    return 'Debes introducir un fecha';
  }

  return this.fecha.hasError('fecha') ? 'No es una fecha valido' : '';
}


getErrorMessagecontra1() {
  if(this.contrasena1.hasError('required')){
    return 'Debes introducir una contraseña';
  } 

  return this.contrasena1.hasError('contrasena') ? 'No es una contraseña valida' : '';
}

getErrorMessagecontra2() {
  if(this.contrasena2.hasError('required')){
    return 'Debes introducir una contraseña';
  } 
  if(this.contrasena1 != this.contrasena2){
    return 'Las contraseñas deben coincidir';
  }

  return this.contrasena2.hasError('contrasena') ? 'No es una contraseña valida' : '';
}

}
