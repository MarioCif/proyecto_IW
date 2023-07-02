import { Component } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  showFooter: boolean;
  constructor(footerS:FooterService){
    this.showFooter = footerS.showFooter;
    console.log(this.showFooter);
  }
}
