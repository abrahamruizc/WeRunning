import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { MaterialModule } from '../core/material/material.module';
import { HistoricoEventosComponent } from './historico-eventos/historico-eventos.component';
import { ModificarDatosComponent } from './modificar-datos/modificar-datos.component';
import { RegistroanonimoComponent } from './registroanonimo/registroanonimo.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    ListaEventosComponent,
    UpdatepasswordComponent,
    HistoricoEventosComponent,
    ModificarDatosComponent,
    RegistroanonimoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class ModulesModule { }
