import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IMedico } from 'src/app/interfaces/interfaces';
import { MedicoService } from 'src/app/services/medico.service';
import { ShowModalService } from '../../service/show-modal.service';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nuevo-doctor',
  templateUrl: './nuevo-doctor.component.html',
  styleUrls: ['./nuevo-doctor.component.scss']
})
export class NuevoDoctorComponent implements OnInit,OnChanges{

  //doctoresLibres!:IMedico[];
  @Input('modal') modal!:boolean;
  idMant:number = 0;
  mostrar!:boolean;
  data:string = '';
  constructor(public medicoService: MedicoService,public modalShow: ShowModalService, private toast:ToastrService){
    console.log(this.modalShow.mostrar)
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.mostrar = changes.modal.currentValue;
    
  }

  ngOnInit(): void {
    
    this.medicoService.obtenerMedicoslibres();
    
  }

  cerrarModal(){
    this.modalShow.ocultarModal();

    let user = localStorage.getItem("currentUser");
    let id;
    if(user){
      const tokenData = JSON.parse(user);
      id = tokenData.id;
      let tipo = tokenData.userType;
      if(tipo == "mantenedor"){
        this.medicoService.obtenerMedicosByMant(id);
        
      }
      

    }
    
    
  }
  abrirModal(){
    this.modal = true;
  }
  addMedico(idDoc:number){
    let user = localStorage.getItem("currentUser");
    let id;
    if(user){
      const tokenData = JSON.parse(user);
      id = tokenData.id;
      this.idMant = id;
      console.log(idDoc, " ",id);
      this.medicoService.updateIdMantenedorMedico(idDoc,id).subscribe(res=>{
        this.success();
        this.medicoService.obtenerMedicoslibres();
        
      }, error =>{
        console.log(error);
      }
      );
      
    }
    
  }

  success(){
    this.toast.success("Se a añadido el médico correctamente","AgregarMedico",{timeOut: 5000});
  }
}
