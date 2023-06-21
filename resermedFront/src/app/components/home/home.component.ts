import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  toggle:boolean = false;

  constructor (){}

  toggleList(){
    if(!this.toggle){
      this.toggle=true;
    }else{
      this.toggle=false;
    }
  }
}
