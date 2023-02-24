import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { MaterialModule } from '../core/material/material.module';



@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent,
    UpdatepasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ]
})
export class ModulesModule { }
