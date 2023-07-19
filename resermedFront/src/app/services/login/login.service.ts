import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environments';

const base_url = environment.url_api;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private readonly api_url = `${base_url}/login`;

  login(cuenta = {}): Observable<any>{
    return this.http.post<any>(`${this.api_url}`, cuenta)
  }


}
