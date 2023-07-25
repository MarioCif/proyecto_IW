import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICita, IMedico } from 'src/app/interfaces/interfaces';
import { CitasService } from 'src/app/services/citas.Service';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent implements OnInit {
  precio: number = 0;
  filtroFecha!: Date;
  citasDisponibles: ICita[] = [];
  medicoId: number = 0;
  medico!: IMedico;
 


  constructor(private citas: CitasService, private route: ActivatedRoute, private medicoService: MedicoService, private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.medicoId = this.route.snapshot.params['id'];

    this.medicoService.getMedicoById(this.medicoId).subscribe((res) => {
      this.medico = res;
    })

    this.citas.getCitas().subscribe((res) => {
      this.citasDisponibles = res;

    });


  }

  get citasRecientes(): any[] {

    return this.citasDisponibles.slice(0, 20);

  }

  get currentUserId(){
    const tokenDataString = localStorage.getItem('currentUser');
    if(tokenDataString){
      const tokenData = JSON.parse(tokenDataString);
      const id = tokenData.id;

      return id;
    }
  }

  showSuccess(){
    this.toastr.success('Éxito', 'Cita reservada correctamente');
  }

  showError(){
    this.toastr.error('Fracaso', 'Hubo un error al reservar');
  }

  reservarCita(cita: ICita, observacion: string) {
    console.log(observacion)
    let userId = this.currentUserId;
    console.log(userId)
    console.log(cita)
    
    cita.UsuarioId = userId;
    cita.libre = false;
    if(observacion != null){
      cita.observacion = observacion
    }

    this.citas.updateCita(cita, cita.id).subscribe((res)=>{
      this.showSuccess();
    },
    (error)=>{
      this.showError();
    })
    

  }

  reservarPagarCita(cita: ICita, observacion: string) {
    //redireccionar a pagos y luego actualizar estado de pago en cita si es exitoso 
  }
}
