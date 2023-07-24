import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICita, ParamCitas } from 'src/app/interfaces/interfaces';
import { CitasService } from 'src/app/services/citas.Service';

@Component({
  selector: 'app-set-horario',
  templateUrl: './set-horario.component.html',
  styleUrls: ['./set-horario.component.scss']
})
export class SetHorarioComponent implements OnInit {

  cantC:number = 0;
  inicio: any;
  termino: any;
  user: string | any = "";
  newCita:ICita = {
    id: 0,
    fecha: "",
    hora_inicio: "",
    hora_termino: "",
    observacion: "",
    asiste: false,
    pagada: false,
    libre: true,
    UsuarioId: null,
    MedicoId: 1
  };

  newParams: ParamCitas = {
    duracion: 0,
    intervalo: 0,
    protegido1: "",
    protegido2: "",
    jornadaI: "",
    jornadaT: ""
  }

  constructor(public citaS: CitasService, private toastr: ToastrService){}

  ngOnInit(): void {}

  citaDia(fecha:any, inicio:any, termino:any){
    
    this.user = localStorage.getItem("currentUser");
    if(this.user){
      const tokenData = JSON.parse(this.user);
      const id = tokenData.id;
      this.newCita.MedicoId = parseInt(id);
    }

    this.newCita.fecha = fecha;
    this.newCita.hora_inicio = inicio;
    this.newCita.hora_termino = termino;

    this.citaS.crearCita(this.newCita).subscribe((res) => {
      this.showSuccess();
    }, (error) => {
      this.showError();
    });
  }

  showSuccess(){
    this.toastr.success('Éxito', 'Cita creada correctamente');
  }

  showError(){
    this.toastr.error('Fracaso', 'Rut y/o email ya están registrados');
  }

  citaSemana(duracion: any, intervalo:any, protegido1:any, protegido2: any, jornadaI:any, jornadaT:any){
    this.newParams.duracion = duracion;
    this.newParams.intervalo = intervalo;
    this.newParams.protegido1 = protegido1;
    this.newParams.protegido2 = protegido2;
    this.newParams.jornadaI = jornadaI;
    this.newParams.jornadaT = jornadaT;

    this.citaS.crearCitaSema(this.newParams).subscribe( (res) => {
      this.showSuccess();
    }, (error) => {
      this.showError();
    })
  }
}