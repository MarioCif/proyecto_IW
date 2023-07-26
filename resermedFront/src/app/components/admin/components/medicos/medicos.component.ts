import { Component, OnInit } from '@angular/core';
import { IMedico } from 'src/app/interfaces/interfaces';
import { MedicoService } from 'src/app/services/medico.service';
import { ShowModalService } from '../service/show-modal.service';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit{

  arrayMedicos!:IMedico[];
  //medicos!:IMedico[];
  modal:boolean = false;
  
  constructor(public medicoS:MedicoService,private modalShow: ShowModalService,private toast:ToastrService){
    
  }

  ngOnInit(): void {
    let user = localStorage.getItem("currentUser");
    let id;
    if(user){
      const tokenData = JSON.parse(user);
      id = tokenData.id;
      let tipo = tokenData.userType;
      if(tipo == "mantenedor"){
        this.medicoS.obtenerMedicosByMant(id);
        
      }
      

    }

    

  }
  nuevoDoctor(){
    
    this.abrirModal();
    this.medicoS.obtenerMedicoslibres();
    
    /* let user = localStorage.getItem("currentUser");
    let id;
    if(user){
      const tokenData = JSON.parse(user);
      id = tokenData.id;
    } */
    
 
  }

  quitarMedico(id:number){
     this.medicoS.updateIdMantenedorMedicoNull(id).subscribe(res=>{
        this.success();
        this.ngOnInit();
     });
  }

  abrirModal(){
    this.modal = true
    this.modalShow.mostrarModal();
  }
  cerrarModal(){
    this.modalShow.ocultarModal();
  }

  success(){
    this.toast.success("se ha desvinculado de un médico","desvincular medico",{timeOut: 5000});
  }
}
