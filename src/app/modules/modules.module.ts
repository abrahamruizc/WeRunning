import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { EventRegisterComponent } from './event-register/event-register.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { CoreModule } from '../core/core.module';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { MaterialModule } from '../core/material/material.module';
import { HistoricoEventosComponent } from './historico-eventos/historico-eventos.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    EventRegisterComponent,
    ListaEventosComponent,
    UpdatepasswordComponent,
    HistoricoEventosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    MaterialModule,
  ]
})
export class ModulesModule { }
