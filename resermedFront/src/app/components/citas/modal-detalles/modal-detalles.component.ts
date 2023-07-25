import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalDetallesService } from 'src/app/services/modal-detalles.service';

@Component({
  selector: 'app-modal-detalles',
  templateUrl: './modal-detalles.component.html',
  styleUrls: ['./modal-detalles.component.scss']
})
export class ModalDetallesComponent implements OnInit{

  resul!: any[];
  proxCita!:any;
  citaActual!:any;
  img:string = ''
  tipo:string = '';
  
  constructor(public modalService: ModalDetallesService){
    
    
  }
  
  ngOnInit(): void {
    this.tipo = this.modalService.tipo;
    this.modalService.getCitaProx().subscribe(data=>{
      this.proxCita = data
      
    });

    this.citaActual = this.modalService.citaActual;
    console.log(this.citaActual);
  }
  
  ocultarModal(){
    this.modalService.ocultarModal();
  }
}
