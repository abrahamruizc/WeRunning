import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
//


@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule
    
  ]
})
export class ModulesModule { }
