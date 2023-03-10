import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { LoginComponent } from './modules/login/login.component';
import { ListaEventosComponent } from './modules/lista-eventos/lista-eventos.component';
import { UpdatepasswordComponent } from './modules/updatepassword/updatepassword.component';
import { HistoricoEventosComponent } from './modules/historico-eventos/historico-eventos.component';
import { ModificarDatosComponent } from './modules/modificar-datos/modificar-datos.component';
import { RegistroanonimoComponent } from './modules/registroanonimo/registroanonimo.component';

import { EventRegisterComponent } from './modules/event-register/event-register.component';
import { PayMethodComponent } from './modules/pay-method/pay-method.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    pathMatch: 'prefix',
    children: [
      { path: 'register', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      { path: '', component: ListaEventosComponent },
      { path: 'event-register', component: EventRegisterComponent },
      { path: 'historico-eventos', component: HistoricoEventosComponent},
      { path: 'modificar-datos/updatepassword', component: UpdatepasswordComponent},
      { path: 'modificar-datos', component: ModificarDatosComponent},
      { path: 'registroanonimo', component: RegistroanonimoComponent},
      { path: 'pay-method', component: PayMethodComponent}
    ]
  }
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
