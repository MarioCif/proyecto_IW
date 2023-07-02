import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AdminComponent } from './components/admin/admin.component';
import { MedicosComponent } from './components/medicos/medicos.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
    declarations: [
        AdminComponent,
        MedicosComponent,
        PacientesComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    exports: [AdminComponent],
    providers: [],
    bootstrap: [AdminComponent]
  })
export class AdminModule{}