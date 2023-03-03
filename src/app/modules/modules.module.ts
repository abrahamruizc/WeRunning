import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { EventRegisterComponent } from './event-register/event-register.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { HistoricoEventosComponent } from './historico-eventos/historico-eventos.component';
import { ModificarDatosComponent } from './modificar-datos/modificar-datos.component';
import { RegistroanonimoComponent } from './registroanonimo/registroanonimo.component';
import { PayMethodComponent } from './pay-method/pay-method.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    ModificarDatosComponent,
    RegistroanonimoComponent,
    EventRegisterComponent,
    ListaEventosComponent,
    UpdatepasswordComponent,
    HistoricoEventosComponent,
    HistoricoEventosComponent,
    PayMethodComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class ModulesModule { }
