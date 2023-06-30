import { Component } from '@angular/core';
import { ModalDetallesService } from 'src/app/services/modal-detalles.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent {

  constructor(public modalService: ModalDetallesService){}

  abrirModal(){
    this.modalService.mostrarModal();
  }
}
