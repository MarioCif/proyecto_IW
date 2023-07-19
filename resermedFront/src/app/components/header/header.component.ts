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
  sessionToken: any;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('sessionToken')) {
      this.sessionToken = localStorage.getItem('sessionToken');
    } else {
      localStorage.setItem('sessionToken', '');
      this.sessionToken = '';
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
    localStorage.setItem('sessionToken', '');
    window.location.reload();
  }
}
