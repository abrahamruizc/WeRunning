import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { ListaEventosComponent } from './modules/lista-eventos/lista-eventos.component';
import { UpdatepasswordComponent } from './modules/updatepassword/updatepassword.component';
import { HistoricoEventosComponent } from './modules/historico-eventos/historico-eventos.component';





import { ModificarDatosComponent } from './modules/modificar-datos/modificar-datos.component';
import { RegistroanonimoComponent } from './modules/registroanonimo/registroanonimo.component';


const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', component: ListaEventosComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'historico-eventos', component: HistoricoEventosComponent},
      { path: 'register', component: RegistrationComponent },
      { path: 'updatepassword', component: UpdatepasswordComponent},






      { path: 'modificar-datos', component: ModificarDatosComponent},
      { path: 'registroanonimo', component: RegistroanonimoComponent},
      

    ]
  }
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
