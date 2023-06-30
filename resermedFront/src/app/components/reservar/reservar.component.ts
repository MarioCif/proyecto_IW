import { Component, OnInit } from '@angular/core';
import { ICita } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent implements OnInit {
  precio: number = 20000;
  citasDisponibles: ICita[] = [
    {
      "fecha": "29/06/2023",
      "horaInicio": "10:00",
      "horaTermino": "10:30"
    }, {
      "fecha": "29/06/2023",
      "horaInicio": "10:30",
      "horaTermino": "11:00"
    }, {
      "fecha": "30/06/2023",
      "horaInicio": "15:00",
      "horaTermino": "15:30"
    }, {
      "fecha": "06/07/2023",
      "horaInicio": "16:40",
      "horaTermino": "17:10"
    },

  ];

  constructor() {

  }
  ngOnInit(): void {

  }
}
