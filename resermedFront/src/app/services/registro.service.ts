import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

const base_url = environment.url_api;

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  
    private Amessage = new BehaviorSubject('');
    current = this.Amessage.asObservable();

    private readonly api_crear = `${base_url}/usuarios`;

    constructor(private http: HttpClient) { }

    updateAmessage(message: string){
        this.Amessage.next(message);
    }


    registro(newUser:any):Observable<any>{
      return this.http.post<any>(this.api_crear,newUser);
    }

}
