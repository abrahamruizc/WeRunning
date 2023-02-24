import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { CoreModule } from '../core/core.module';




@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent,
    ListaEventosComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ]
})
export class ModulesModule { }
