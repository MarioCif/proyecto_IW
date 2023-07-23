import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { usuario } from 'src/app/interfaces/interfaces';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  esMedico: boolean = false;
  formulario !: FormGroup;
  newUsuario!: usuario;
  onChangeUserType(value: any) {
    if (value.target.value == "Profesional") {
      this.esMedico = true;

    } else {
      this.esMedico = false;
    }

  }
  constructor(private registroS: RegistroService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.buildForm();
  }

  registroUser() {
    this.newUsuario = {
      nombre: this.formulario.get('nombre')?.value,
      apellido: this.formulario.get('apellido')?.value,
      rut: this.formulario.get('rut')?.value,
      email: this.formulario.get('email')?.value,
      password: this.formulario.get('password')?.value,
      img_url: ''
    }


    console.log(this.newUsuario)

    this.registroS.registro(this.newUsuario).subscribe(res=>{
      
    },error=>{
      
    });

  }

  buildForm() {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      rut: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      password: ['', Validators.required]
    });



  }
}
