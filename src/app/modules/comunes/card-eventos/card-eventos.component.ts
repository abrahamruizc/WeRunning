import { Component } from '@angular/core';
import { Evento } from '../../lista-eventos/evento.model'

@Component({
  selector: 'app-card-eventos',
  templateUrl: './card-eventos.component.html',
  styleUrls: ['./card-eventos.component.scss']
})
export class CardEventosComponent {
  
  model = new Evento(1,"Carrera nocturna","Sevilla",9,new Date(23-10-2023),"../../assets/img/","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  model1 = new Evento(1,"Carrera nocturna","Sevilla",9,new Date(23-10-2023),"../../assets/img/","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  model2 = new Evento(1,"Carrera nocturna","Sevilla",9,new Date(23-10-2023),"../../assets/img/","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  model3 = new Evento(1,"Carrera nocturna","Sevilla",9,new Date(23-10-2023),"../../assets/img/","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  eventos=[this.model,this.model1,this.model2,this.model3];
}
