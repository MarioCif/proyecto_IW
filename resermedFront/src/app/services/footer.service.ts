import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  showFooter: boolean = true;

  constructor() { }

  changeShowFooter(){
    this.showFooter = !this.showFooter;
  }
}
