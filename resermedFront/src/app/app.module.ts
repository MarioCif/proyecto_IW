import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { CitasComponent } from './components/citas/citas.component';
import { ModalDetallesComponent } from './components/citas/modal-detalles/modal-detalles.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdminModule } from './components/admin/admin.module';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { SetHorarioComponent } from './components/set-horario/set-horario.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ReservarComponent,
    CitasComponent,
    ModalDetallesComponent,
    RegistroComponent,
    CalendarioComponent,
    ResultadosComponent,
    SetHorarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FullCalendarModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
