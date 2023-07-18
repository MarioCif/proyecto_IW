import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  toggle:boolean = false;
  session:boolean = true;

  constructor () {

  }

  toggleMenu() {
    if(!this.toggle){
      this.toggle=true;
    }else{
      this.toggle=false;
    }
  }

  cerrarSesion(){
    if(this.session){
      this.session=false;
      localStorage.removeItem('sessionToken');
    }
  }
}
