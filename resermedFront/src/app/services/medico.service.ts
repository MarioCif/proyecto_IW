import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { IMantenedor, IMedico } from '../interfaces/interfaces';

const base_url = environment.url_api;

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private readonly api_url = `${base_url}/medicos`;


  constructor(private http: HttpClient) { }

  getMedicos(): Observable<IMedico[]>{
    return this.http.get<any>(this.api_url);
  }

  getMedicoById(id: number): Observable<IMedico>{
    return this.http.get<any>(`${this.api_url}/${id}`);
  }
}
