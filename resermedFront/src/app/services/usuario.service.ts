import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { IUsuario } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

const base_url = environment.url_api;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly api_url = `${base_url}/usuarios`;


  constructor(private http: HttpClient) { }

  getUsuarioById(id: number): Observable<IUsuario>{
    return this.http.get<any>(`${this.api_url}/${id}`);
  }
}
