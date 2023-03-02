import { Component } from '@angular/core';
import { Evento } from '../evento/evento.model'

@Component({
  selector: 'app-historico-eventos',
  templateUrl: './historico-eventos.component.html',
  styleUrls: ['./historico-eventos.component.scss']
})
export class HistoricoEventosComponent {
  model = new Evento(1,"Carrera nocturna","Sevilla",9,new Date(23-10-2023),"../../assets/img/","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  model1 = new Evento(1,"Carrera nocturna","Sevilla",9,new Date(23-10-2023),"../../assets/img/","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  model2 = new Evento(1,"Carrera nocturna","Sevilla",9,new Date(23-10-2023),"../../assets/img/","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  model3 = new Evento(1,"Carrera nocturna","Sevilla",9,new Date(23-10-2023),"../../assets/img/","ojfjodsjlfñjdslfjlsdjflsjfljdslfjdsljflsmj´fojlfkdsjlfksdjsdl");
  eventos=[this.model,this.model1,this.model2,this.model3];
}
