import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { CoreModule } from '../core/core.module';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { MaterialModule } from '../core/material/material.module';



@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent,
    ListaEventosComponent,
    UpdatepasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    MaterialModule,
  ]
})
export class ModulesModule { }
