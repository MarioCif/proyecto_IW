import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  
    private Amessage = new BehaviorSubject('');
    current = this.Amessage.asObservable();

    constructor() { }

    updateAmessage(message: string){
        this.Amessage.next(message);
    }

}
