import { Component } from '@angular/core';
import { ModalDetallesService } from 'src/app/services/modal-detalles.service';

@Component({
  selector: 'app-modal-detalles',
  templateUrl: './modal-detalles.component.html',
  styleUrls: ['./modal-detalles.component.scss']
})
export class ModalDetallesComponent {
  constructor(public modalService: ModalDetallesService){}

  ocultarModal(){
    this.modalService.ocultarModal();
  }
}
