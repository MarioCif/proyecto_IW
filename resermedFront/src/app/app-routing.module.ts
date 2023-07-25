import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { CitasComponent } from './components/citas/citas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { AdminComponent } from './components/admin/components/admin/admin.component';
import { MedicosComponent } from './components/admin/components/medicos/medicos.component';
import { PacientesComponent } from './components/admin/components/pacientes/pacientes.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { SetHorarioComponent } from './components/set-horario/set-horario.component';
import { MedicoGuard } from './guards/medico-guard.guard';
import { SharedGuard } from './guards/shared.guard';
import { UserGuard } from './guards/user-guard.guard';
import { MantenedorGuard } from './guards/mantenedor.guard';
import { AuthGuard } from './guards/auth.guard';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'resultados', component: ResultadosComponent},
  { path:'login',component: LoginComponent},
  {path:'nosotros',component:NosotrosComponent},
  { path:'admin',component:AdminComponent, children:[
    {path:'medicos',component: MedicosComponent},
    {path: 'pacientes', component: PacientesComponent}
  ], canActivate: [MantenedorGuard, AuthGuard]},
  { path: 'reservar/:id', component: ReservarComponent, canActivate: [UserGuard, AuthGuard]},
  { path: 'citas', component: CitasComponent, canActivate: [SharedGuard, AuthGuard]},
  { path: 'registro', component: RegistroComponent},
  { path: 'calendario', component: CalendarioComponent, canActivate: [SharedGuard, AuthGuard]},
  { path: 'nuevo-horario', component: SetHorarioComponent, canActivate: [MedicoGuard, AuthGuard]},
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]

})
export class AppRoutingModule { }
