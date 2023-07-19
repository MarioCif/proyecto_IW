import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  toggle:boolean = false;
  sessionToken:any;

  constructor () {
    if(localStorage.getItem('sessionToken')){
      this.sessionToken = localStorage.getItem('sessionToken');
    }else{
      this.sessionToken = '';
    }
  }

  toggleMenu() {
    if(!this.toggle){
      this.toggle=true;
    }else{
      this.toggle=false;
    }
  }


  cerrarSesion(){
    localStorage.setItem('sessionToken', '');

  }
}
