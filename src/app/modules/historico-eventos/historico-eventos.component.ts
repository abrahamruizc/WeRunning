import { Component } from '@angular/core';
import { Evento } from '../evento/evento.model'

@Component({
  selector: 'app-historico-eventos',
  templateUrl: './historico-eventos.component.html',
  styleUrls: ['./historico-eventos.component.scss']
})
export class HistoricoEventosComponent {
  model = new Evento(1,"Carrera nocturna","Sevilla",9,new Date("2022-02-03T21:00:00.000Z"),"../../assets/img/Cartel_Nocturna_2022.jpg","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  model1 = new Evento(2,"Carrera popular constantina","Sevilla",15,new Date("2021-04-03T17:00:00.000Z"),"../../assets/img/","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  model2 = new Evento(3,"Carrera nocturna","Sevilla",9,new Date("2022-05-21T16:00:00.000Z"),"../../assets/img/","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  model3 = new Evento(4,"Carrera nocturna","Sevilla",9,new Date("2023-07-03T21:30:00.000Z"),"../../assets/img/","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  eventos=[this.model,this.model1,this.model2,this.model3];
}
