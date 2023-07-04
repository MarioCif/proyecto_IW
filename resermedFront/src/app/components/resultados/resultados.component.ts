import { Component, OnDestroy, OnInit } from '@angular/core';
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
      "Foto": "../../../assets/img/p1.png",
      "Costo": 20000  
    },
    {
      "Nombre": 'Eduardo Contreras Esparza',
      "Ubicacion": 'Chillan Viejo',
      "Especialidad": 'Urologo',
      "Valoracion": 3,
      "Foto": "",
      "Costo": 23000
    },
    {
      "Nombre": 'Valeria Ideal Sanhueza',
      "Ubicacion": 'Lota',
      "Especialidad": 'Neurologa',
      "Valoracion": 4,
      "Foto": "",
      "Costo": 35000
    },
    { 
      "Nombre": 'Miguel Poblete ',
      "Ubicacion": 'Ciudad Sexo',
      "Especialidad": 'Sexologo',
      "Valoracion": 5,
      "Foto": "",
      "Costo": 450000
    }
  ];

  message!:string;
  subs!:Subscription;

  constructor(private data: RegistroService, private router: Router){}

  ngOnInit(): void {
    this.subs = this.data.current.subscribe(message => this.message = message)
  }
  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }

  onClick(message:string){
    this.message = message;
    this.data.updateAmessage(this.message);
  }
}
