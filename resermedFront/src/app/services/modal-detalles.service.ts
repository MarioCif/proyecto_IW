import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalDetallesService {
  resul!: any[];
  public citaProx!:any;
  public oculto:string = '';
  public citaActual!:any;
  tipo:string = '';
  modal:boolean = false;
  img:string = '';
  private proxCitaSubject = new BehaviorSubject<any>(null);

  

  constructor(
  ) { 
      
  }

  ocultarModal(){
    this.oculto = '';
    this.modal = false;
  }

  mostrarModal(){
    this.oculto = 'block';
    this.modal = true;
  }
  abrirModalItem(item:any,tipo:string){
    if(tipo == 'p'){
      this.tipo = 'p';
      this.citaProx = item;
      console.log(this.citaProx);
      this.img = this.citaProx.Medico.img_url;
    }{
      this.tipo = 'a';
      this.citaActual = item;
      this.img = this.citaActual.Medico.img_url;
      console.log(this.citaActual);
    }
    
    
    this.mostrarModal();
  }
  getCitaProx(){
    return this.proxCitaSubject.asObservable();
  }

  setCitaProx(data:any){
    this.proxCitaSubject.next(data);
  }
  
  
}
