import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { CoreModule } from '../core/core.module';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { HistoricoEventosComponent } from './historico-eventos/historico-eventos.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    ListaEventosComponent,
    UpdatepasswordComponent,
    HistoricoEventosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ]
})
export class ModulesModule { }
