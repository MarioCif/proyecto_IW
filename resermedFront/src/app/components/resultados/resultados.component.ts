import { Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { medicos } from 'src/app/interfaces/interfaces';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit, OnDestroy{

  medicos: medicos [] = [
    {
      "Nombre": 'Charles Frayer Hamilton',
      "Ubicacion": 'Chillan',
      "Especialidad": 'Oftalmologo',
      "Valoracion": 5,
      "Foto": "../../../assets/img/img-doctores/p1.png",
      "Costo": 20000  
    },
    {
      "Nombre": 'Eduardo Contreras Esparza',
      "Ubicacion": 'Chillan Viejo',
      "Especialidad": 'Urologo',
      "Valoracion": 3,
      "Foto": "../../../assets/img/img-doctores/p11.png",
      "Costo": 23000
    },
    {
      "Nombre": 'Valeria Ideal Sanhueza',
      "Ubicacion": 'Lota',
      "Especialidad": 'Neurologa',
      "Valoracion": 4,
      "Foto": "../../../assets/img/img-doctores/p4.png",
      "Costo": 35000
    },
    { 
      "Nombre": 'Miguel Poblete Quintana',
      "Ubicacion": 'Atacama',
      "Especialidad": 'Dentista',
      "Valoracion": 5,
      "Foto": "../../../assets/img/img-doctores/p7.jpg",
      "Costo": 45000
    }
  ];

  message!:string;
  subs!:Subscription;
  vacio:boolean = false;

  constructor(private data: RegistroService){}

  ngOnInit(): void {
    this.subs = this.data.current.subscribe(message => this.message = message)
    if(this.message == ""){
      this.vacio = true;
    }else{
      this.vacio = false;
    }
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }

  onClick(message:string){
    this.message = message;
    this.data.updateAmessage(this.message);
    if(this.message == ""){
      this.vacio = true;
    }else{
      this.vacio = false;
    }
  }

  onEnter(message:string){
    this.message = message;
    this.data.updateAmessage(this.message);
    if(this.message == ""){
      this.vacio = true;
    }else{
      this.vacio = false;
    }
  }

  compare(val1:string, val2:string): boolean {
    if(val1.includes(val2) && val2 != ""){
      return true;
    }else{
      return false;
    }
  }
}