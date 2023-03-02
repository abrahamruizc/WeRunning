import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { ListaEventosComponent } from './modules/lista-eventos/lista-eventos.component';
import { UpdatepasswordComponent } from './modules/updatepassword/updatepassword.component';
import { HistoricoEventosComponent } from './modules/historico-eventos/historico-eventos.component';
import { PayMethodComponent } from './modules/pay-method/pay-method.component';

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
      { path: 'pay-method', component: PayMethodComponent}
    ]
  }
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
