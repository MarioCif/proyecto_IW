import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICita, IUsuario } from 'src/app/interfaces/interfaces';
import { CitasService } from 'src/app/services/citas.Service';
import { MailService } from 'src/app/services/mail.service';
import { ModalDetallesService } from 'src/app/services/modal-detalles.service';
import { PagoService } from 'src/app/services/pago.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-modal-detalles',
  templateUrl: './modal-detalles.component.html',
  styleUrls: ['./modal-detalles.component.scss']
})
export class ModalDetallesComponent implements OnInit {

  resul!: any[];
  proxCita!: any;
  citaActual!: any;
  img: string = ''
  tipo: string = '';
  citaReal!: ICita;

  constructor(
    public modalService: ModalDetallesService, 
    private pago: PagoService, 
    private citas: CitasService, 
    private toastr: ToastrService, 
    private mail: MailService
    ) {


  }

  ngOnInit(): void {
    this.tipo = this.modalService.tipo;
    this.modalService.getCitaProx().subscribe(data => {
      this.proxCita = data

    });

    this.citaActual = this.modalService.citaActual;
    console.log(this.citaActual);

    this.citas.getCitaById(this.citaActual.id).subscribe((res)=>{
      this.citaReal = res;

    });


  }

  ocultarModal() {
    this.modalService.ocultarModal();
  }

  showError() {
    this.toastr.error('Error', 'Hubo un error al pagar');
  }

  pagarCita(cita: any, id:number) {

    let redirection = 'http://localhost:4200/#/citas';
    //let redirection = 'http://pacheco.chillan.ubiobio.cl:81/#/citas'; 

    
    this.citaReal.libre = false;
    this.citaReal.pagada = true;
    this.citaReal.UsuarioId = id;

    this.citas.updateCita(this.citaReal, this.citaReal.id).subscribe((res) => {

      this.pago.pagar(id, cita.id, redirection).subscribe((res) => {


        window.location.href = res.body;


      },
        (error) => {
          console.log(error);
          this.showError();


        })

    },
      (error) => {
        this.showError();
      })

  }

  cancelarCita(cita: any, nomMed:string, apMed: string, emailMed:string , nomUs:string, apUs:string, emailUs:string ) {


    this.citas.deleteCita(cita.id).subscribe((res)=>{
      this.mail.correoCancelar({nombre1: nomUs, apellido1: apUs, nombre2: nomMed, apellido2: apMed, email1: emailUs, email2: emailMed, fecha: cita.fecha, hora1: cita.hora_inicio, hora2: cita.hora_termino}).subscribe((res)=>{
        
      })
    })
  }
}
