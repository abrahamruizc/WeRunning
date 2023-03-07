import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-modificar-datos',
  templateUrl: './modificar-datos.component.html',
  styleUrls: ['./modificar-datos.component.scss']
})
export class ModificarDatosComponent {


  model = new Person("Juan", "Ortiz", "Zuñiga", "juan@gmail.com", '10/09/1990', "77897654R");

  submitted = false;

  onSubmit() {this.submitted = true;}

  newPerson() {
    this.model = new Person("","","","","","");
    alert("Datos actualizados correctamente");
   
  }

}
