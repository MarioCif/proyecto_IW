import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { CitasComponent } from './components/citas/citas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdminComponent } from './components/admin/components/admin/admin.component';
import { MedicosComponent } from './components/admin/components/medicos/medicos.component';
import { PacientesComponent } from './components/admin/components/pacientes/pacientes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path:'login',component: LoginComponent},
  {path:'admin',component:AdminComponent, children:[
    {path:'medicos',component: MedicosComponent},
    {path: 'pacientes', component: PacientesComponent}
  ]},
  { path: 'reservar', component: ReservarComponent },
  { path: 'citas', component: CitasComponent},
  { path: 'registro', component: RegistroComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]

})
export class AppRoutingModule { }
