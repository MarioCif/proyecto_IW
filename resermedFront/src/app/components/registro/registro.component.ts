import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMantenedor, IMedico, IUsuario } from 'src/app/interfaces/interfaces';
import { RegistroService } from 'src/app/services/registro.service';
import { CloudinaryService } from 'src/app/services/subir-imgs/cloudinary.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  esMedico: boolean = false;
  newUser: IUsuario;
  newMedico: IMedico;
  newMantenedor: IMantenedor;
  addUser: FormGroup;

  img_url: string = "";
  widget:any;

  onChangeUserType(value: any) {
    let especialidadControl = this.addUser.get('especialidad');
    if (value.target.value == "Profesional") {
      this.esMedico = true;
      especialidadControl?.setValidators([Validators.required]);

    } else {
      this.esMedico = false;
      especialidadControl?.clearValidators();
    }

    especialidadControl?.updateValueAndValidity();

  }
  constructor(private registroS: RegistroService, private cloudinary: CloudinaryService, private router: Router) {
    this.addUser = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      rut: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      especialidad: new FormControl(''),
      
    });

    this.newUser = {
      id: 0,
      nombre: '',
      apellido: '',
      rut: '',
      email: '',
      password: '',
      img_url: '',
      telefono: 0

    }

    this.newMedico = {
      id: 0,
      nombre: '',
      apellido: '',
      rut: '',
      email: '',
      password: '',
      especialidad: '',
      img_url: '',
      telefono: 0
    }

    this.newMantenedor = {
      id: 0,
      nombre: '',
      apellido: '',
      rut: '',
      email: '',
      password: '',
      img_url: '',
      telefono: 0
    }
  }
  ngOnInit(): void {
    this.cloudinary.createUploadWidget(
      {
        cloudName: 'dpmqqisma',
        uploadPreset: 'resermed',
        clientAllowedFormats: ["jpg", "png", "jpeg"]
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          this.img_url = result.info.secure_url;
        }
      }
    ).subscribe(widget => this.widget = widget);
  }

  registroUser() {

    switch(this.addUser.get('tipo')?.value){
      case 'Paciente':
        this.newUser.nombre = this.addUser.get('nombre')?.value;
        this.newUser.apellido = this.addUser.get('apellido')?.value;
        this.newUser.rut = this.addUser.get('rut')?.value;
        this.newUser.email = this.addUser.get('email')?.value;
        this.newUser.password = this.addUser.get('password')?.value;
        this.newUser.telefono = this.addUser.get('telefono')?.value;
        this.newUser.img_url = this.img_url;

        this.registroS.registroUsuario(this.newUser).subscribe((res)=>{
          console.log('paciente registrado');
          this.router.navigate(['/login']);
        },
        (error)=>{
          console.log('paciente no registrado');
          console.log(error);
          
        });

        break;
      case 'Profesional':
        this.newMedico.nombre = this.addUser.get('nombre')?.value;
        this.newMedico.apellido = this.addUser.get('apellido')?.value;
        this.newMedico.rut = this.addUser.get('rut')?.value;
        this.newMedico.email = this.addUser.get('email')?.value;
        this.newMedico.password = this.addUser.get('password')?.value;
        this.newMedico.telefono = this.addUser.get('telefono')?.value;
        this.newMedico.especialidad = this.addUser.get('especialidad')?.value;
        this.newMedico.img_url = this.img_url;

        this.registroS.registroMedico(this.newMedico).subscribe((res)=>{
          console.log('medico registrado');
          this.router.navigate(['/login']);

        },
        (error)=>{
          console.log('medico no registrado');
          console.log(error);

        });

        break;
      
      case 'Mantenedor':
        this.newMantenedor.apellido = this.addUser.get('apellido')?.value;
        this.newMantenedor.nombre = this.addUser.get('nombre')?.value;
        this.newMantenedor.rut = this.addUser.get('rut')?.value;
        this.newMantenedor.email = this.addUser.get('email')?.value;
        this.newMantenedor.password = this.addUser.get('password')?.value;
        this.newMantenedor.telefono = this.addUser.get('telefono')?.value;
        this.newMantenedor.img_url = this.img_url;

        this.registroS.registroMantenedor(this.newMantenedor).subscribe((res)=>{
          console.log('mantenedor registrado');
          this.router.navigate(['/login']);
        },
        (error)=>{
          console.log('mantenedor no registrado');
          console.log(error);

        });


        break;
    }




  }

  openWidget() {
    if (this.widget) {
      this.widget.open();
    }
  }




}
