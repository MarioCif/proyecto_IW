import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { IMantenedor, IMedico } from '../interfaces/interfaces';

const base_url = environment.url_api;

@Injectable({
  providedIn: 'root'
})
export class MedicoService{

  private readonly api_url = `${base_url}/medicos`;
  doctoresLibres!:IMedico[];
  medicos!:IMedico[];
  medicosSubject = new BehaviorSubject<IMedico[]>(this.medicos);
  libresSubject =  new BehaviorSubject<IMedico[]>(this.doctoresLibres);
  constructor(private http: HttpClient) { }


  obtenerMedicosByMant(id:any): void {
    this.getMedicosByMantenedor(id).subscribe(data=>{
      this.medicos = data;
      //this.libresSubject.next(this.medicos);
    })
  }
  obtenerMedicoslibres(){
    this.getMedicosLibres().subscribe(data=>{
      this.doctoresLibres = data
      //this.libresSubject.next(this.doctoresLibres);
    })
  }

  

  getMedicos(): Observable<IMedico[]>{
    return this.http.get<any>(this.api_url);
  }

  getMedicoById(id: number): Observable<IMedico>{
    return this.http.get<any>(`${this.api_url}/${id}`);
  }

  getMedicosByMantenedor(id:number): Observable<IMedico[]>{
    return this.http.get<any>(`${base_url}/medicosByM/${id}`);
  }
  getMedicosLibres(): Observable<IMedico[]>{
    return this.http.get<any>(`${base_url}/medicosLibres`);
  }

  updateIdMantenedorMedico(idMedico:number,idMantenedor:number):Observable<any>{
    return this.http.put<any>(`${base_url}/medicoIdMant/${idMedico}/${idMantenedor}`,{});
  }
  updateIdMantenedorMedicoNull(idMedico:number):Observable<any>{
    return this.http.put<any>(`${base_url}/medicoIdMant/${idMedico}`,{});
  }
  updateArray(newArray: IMedico[]) {
    this.medicosSubject.next(newArray);
  }
  updateArraylibres(newArray: IMedico[]){
    this.libresSubject.next(newArray);
  }
  getArrayObservable() {
    return this.medicosSubject.asObservable();
  }
}
