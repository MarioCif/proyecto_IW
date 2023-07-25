import { Component, Input, OnChanges } from '@angular/core';
import { IMedico } from 'src/app/interfaces/interfaces';
import { CitasService } from 'src/app/services/citas.Service';
import { MedicoService } from 'src/app/services/medico.service';
import { ModalDetallesService } from 'src/app/services/modal-detalles.service';

@Component({
  selector: 'app-modal-calendario',
  templateUrl: './modal-calendario.component.html',
  styleUrls: ['./modal-calendario.component.scss']
})
export class ModalCalendarioComponent implements OnChanges{

  constructor(public modalService: ModalDetallesService, public MService: MedicoService, public citaService: CitasService){}

  @Input() data: any = [];

  id: number = 0;
  cita:any = {};
  paciente:any = {};
  medico:any = {}


  ngOnChanges(): void {
    this.id = this.data.id
    console.log(this.id)
    this.citaService.getCitaById(this.id).subscribe( (res) => {
      this.cita = res
      this.MService.getMedicoById(res.MedicoId).subscribe( (res) => {
        this.medico = res
      })

      
    })


  }

  ocultarModal(){
    console.log(this.data)
    this.modalService.ocultarModal();
  }
}
