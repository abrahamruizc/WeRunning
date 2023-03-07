import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-registroanonimo',
  templateUrl: './registroanonimo.component.html',
  styleUrls: ['./registroanonimo.component.scss']
})
export class RegistroanonimoComponent {

  model = new Person("", "", "", "", "","", '', false);


  submitted = false;

  onSubmit() {this.submitted = true;}

  newPerson() {
   
      this.model = new Person("", "", "", "", "","", '', true);
      alert("Registro realizado correctamente");  
   
   
  }

}
