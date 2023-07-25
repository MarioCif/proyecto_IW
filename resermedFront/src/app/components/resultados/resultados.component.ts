import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMedico } from 'src/app/interfaces/interfaces';
import { MedicoService } from 'src/app/services/medico.service';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit, OnDestroy {

  medicos: IMedico[] = [];
  searchTerm: string = '';
  message!: string;
  subs!: Subscription;
  vacio: boolean = false;

  constructor(private data: RegistroService, private medicoService: MedicoService) { }

  ngOnInit(): void {
    this.subs = this.data.current.subscribe(message => this.message = message)
    if (this.message == "") {
      this.vacio = true;
    } else {
      this.vacio = false;
    }

    this.medicoService.getMedicos().subscribe((res) => {
      this.medicos = res;
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onClick(message: string) {
    this.message = message;
    this.data.updateAmessage(this.message);
    if (this.message == "") {
      this.vacio = true;
    } else {
      this.vacio = false;
    }
  }

  onEnter(message: string) {
    this.message = message;
    this.data.updateAmessage(this.message);
    if (this.message == "") {
      this.vacio = true;
    } else {
      this.vacio = false;
    }
  }

  compare(val1: string, val2: string): boolean {
    if (val1.includes(val2) && val2 != "") {
      return true;
    } else {
      return false;
    }
  }
}