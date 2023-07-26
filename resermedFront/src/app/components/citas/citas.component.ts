import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CitasService } from 'src/app/services/citas.Service';
import { ModalDetallesService } from 'src/app/services/modal-detalles.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit{
  
  resul!: any[];
  proxCita!:any;
  citaActual!:any;
  imgProx:string = '';
  direccion: string = '';
  constructor(public modalService: ModalDetallesService, private citaSer: CitasService){
    
    
      
  }
  

  abrirModal(){
    this.modalService.mostrarModal();
  }

  abrirModalItem(id:number,item:any){
    
    this.modalService.abrirModalItem(this.resul[id],'a');
  }

  abrirModalItemProx(item:any, tipo:string){
      this.modalService.abrirModalItem(item,tipo)
  }
  ngOnInit(): void {
    let user = localStorage.getItem("currentUser");
    let id;
    if(user){
      const tokenData = JSON.parse(user);
      id = tokenData.id;
    }
    
  
    this.citaSer.getCitasById(id).pipe(
      map(data => {
        this.resul = data;
        console.log(this.resul)
        this.modalService.citaProx = this.resul.shift();
        
        this.proxCita = this.modalService.citaProx;
        this.imgProx = this.modalService.citaProx.Medico.img_url;
        this.modalService.setCitaProx(this.proxCita);
        
        
      })
    ).subscribe(citas => {
      
    });


    this.modalService.getCitaProx().subscribe((data)=>{
      this.proxCita = data;
      console.log(this.proxCita);
    });
    
  }



}
