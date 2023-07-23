import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggle: boolean = false;
  userType: any;

  constructor(private router: Router, private loginService: LoginService) {

  }

  ngOnInit(): void {

    const tokenDataString = localStorage.getItem('currentUser');

    if (tokenDataString) {
      const tokenData = JSON.parse(tokenDataString);
      this.userType = tokenData.userType;

      console.log('User Type:', this.userType);
    } else {
      this.userType = '';
    }

  }

  toggleMenu() {
    if (!this.toggle) {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }


  cerrarSesion() {
    this.loginService.logout();
  }
}
