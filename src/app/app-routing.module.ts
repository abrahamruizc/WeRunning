import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { HomeComponent } from './modules/home/home.component';
import { ListaEventosComponent } from './modules/lista-eventos/lista-eventos.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', component: ListaEventosComponent },
      { path: 'register', component: RegistrationComponent }
    ]
  }
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
