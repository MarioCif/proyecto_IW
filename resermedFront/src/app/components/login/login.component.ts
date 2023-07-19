import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router){
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }
  ngOnInit(): void {

  }

  onLoginSubmit(){
    if(this.loginForm.valid){
      let email = this.loginForm.get('email')?.value;
      let pass = this.loginForm.get('password')?.value;

      let cuenta = {
        email: email,
        password: pass
      }

      this.loginService.login(cuenta).subscribe({
        next: (res) => {
          let rolUser = res.sessionToken;
          localStorage.setItem('sessionToken', rolUser);
          this.router.navigate(['/home']);
          

        },
        error: (err) => {
          console.log('Error al iniciar sesión:', err);
        }
      })
    }
  }

}
