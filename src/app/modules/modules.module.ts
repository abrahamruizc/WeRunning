import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { EventRegisterComponent } from './event-register/event-register.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent,
    EventRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ModulesModule { }
