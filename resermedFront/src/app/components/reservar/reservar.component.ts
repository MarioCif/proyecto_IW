import { Component, OnInit } from '@angular/core';
import { ICita } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent implements OnInit {
  precio: number = 20000;
  citasDisponibles: ICita[] = [];

  constructor() {

  }
  ngOnInit(): void {

  }
}
