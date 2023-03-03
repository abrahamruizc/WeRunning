import { Component } from '@angular/core';
import { Evento } from '../evento/evento.model'
@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss']
})
export class ListaEventosComponent {
  model = new Evento(1,"Carrera nocturna","Sevilla",9,new Date("2022-02-03T21:00:00.000Z"),"assets/img/Cartel_Nocturna_2022.jpg","El Ayuntamiento abre las inscripciones para la Carrera Nocturna del Guadalquivir KH7 de 2021 con un total de 10.000 dorsales disponibles.");
  model1 = new Evento(2,"Carrera popular constantina","Sevilla",15,new Date("2021-04-03T17:00:00.000Z"),"assets/img/cartel-valle-de-la-osa-2021.jpg","La Delegación Municipal de Deportes del Excelentísimo Ayuntamiento de Constantina trabaja en los preparativos para uno de los tradicionales eventos deportivos veraniegos de nuestra localidad: la Carrera Popular Valle de la Osa");
  model2 = new Evento(3,"Carrera de la Mujer Málaga 2023","Malaga",26,new Date("2023-05-21T16:00:00.000Z"),"assets/img/Carrera_de_la_Mujer_Malaga-2023.jpg","Carrera Popular de 4.5 kilómetros que se celebra en la localidad de Málaga el domingo 05 de marzo de 2023.");
  model3 = new Evento(4,"XXVIII Carrera Urbana Ciudad de Álora","Alora",9,new Date("2023-07-03T21:30:00.000Z"),"assets/img/Medio-Maraton-Alora-2023.jpg","Carrera Popular de 2 kilómetros que se celebra en la localidad de Álora el domingo 05 de marzo de 2023. Carrera organizada por El Ayuntamiento de Álora y el Club Atletismo Guadalhorce ");
  eventos=[this.model,this.model1,this.model2,this.model3];
}
