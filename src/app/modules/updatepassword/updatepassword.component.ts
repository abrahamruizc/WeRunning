import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Password } from './password.model';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.scss'],
})
export class UpdatepasswordComponent {


  
  pActual = new FormControl('', [Validators.required, Validators.minLength(8)]);
  pnueva = new FormControl('', [Validators.required ,Validators.minLength(8)]);
  pnueva2 = new FormControl('', [Validators.required, Validators.minLength(8)]);


  submitted = false;

  onSubmit() { this.submitted = true;}

  getErrorMessage() {
    if(this.pActual.hasError('required')){
      return 'Debes introducir la contraseña';
    } //else if(this.pActual != this.p.password){

   // }
   
  
    return this.pActual.hasError('nombre') ? 'No es un nombre valido' : '';
  }
  
}
