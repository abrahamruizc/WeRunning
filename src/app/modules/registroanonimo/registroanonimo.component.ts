import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-registroanonimo',
  templateUrl: './registroanonimo.component.html',
  styleUrls: ['./registroanonimo.component.scss']
})
export class RegistroanonimoComponent {

  model = new Person("", "", "", "", "","", '');

  submitted = false;

  onSubmit() {this.submitted = true;}

  newPerson() {
    if(document.getElementById("check")) {
      this.model = new Person("", "", "", "", "","", '');
      alert("Registro realizado correctamente");
    } else {
      alert("Por favor, acepte los términos de uso")
    }
    
   
   
  }

}
