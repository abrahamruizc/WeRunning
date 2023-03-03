import { Component } from '@angular/core';
import { Evento } from '../evento/evento.model'
@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss']
})
export class ListaEventosComponent {
  model = new Evento(1,"Carrera nocturna","Sevilla",9,new Date(23-10-2023),"../../assets/img/","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  model1 = new Evento(1,"Carrera nocturna","Sevilla",9,new Date(23-10-2023),"../../assets/img/","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  model2 = new Evento(1,"Carrera nocturna","Sevilla",9,new Date(23-10-2023),"../../assets/img/","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  model3 = new Evento(1,"Carrera nocturna","Sevilla",9,new Date(23-10-2023),"../../assets/img/","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  eventos=[this.model,this.model1,this.model2,this.model3];
}
