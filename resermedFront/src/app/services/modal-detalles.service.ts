import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalDetallesService {

  public oculto:string = '';

  constructor() { }

  ocultarModal(){
    this.oculto = '';
  }

  mostrarModal(){
    this.oculto = 'block';
  }
}