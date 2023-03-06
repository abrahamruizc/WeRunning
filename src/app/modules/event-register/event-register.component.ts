import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

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

submitted = false;


onSubmit() { 
  this.submitted = true;
  
}


getErrorMessage() {
  if (this.nombre.hasError('required')) {
    return 'Debes introducir un nombre';
  } 
  else if(this.apellidos.hasError('required')){
    return 'Debes introducir un apellido';
  } 
  else if(this.correo.hasError('required')){
    return 'Debes introducir un correo electronico';
  }
  else if(this.fecha.hasError('required')){
    return 'Debes introducir un fecha';
  }

  return this.nombre.hasError('email') ? 'Not a valid email' : '';
}

}
