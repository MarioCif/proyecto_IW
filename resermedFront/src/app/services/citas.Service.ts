import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environments";
import { ICita, ParamCitas } from "../interfaces/interfaces";

const base_url = environment.url_api;

@Injectable({
    providedIn: 'root'
})
export class CitasService {

    private readonly api_url = base_url;

    constructor(private http: HttpClient){}

    crearCita(newCit = {}): Observable<ICita>{
        return this.http.post<any>(`${this.api_url}/citas`, newCit);
    }

    crearCitaSema(newParams = {}, id:number): Observable<ParamCitas>{
        return this.http.post<any>(`${this.api_url}/citasSem/${id}`, newParams);
    }

    getCitas(): Observable<ICita[]>{
        return this.http.get<any>(`${this.api_url}/citas`);
    }

    updateCita(newCit = {}, id: number): Observable<ICita>{
        return this.http.put<any>(`${this.api_url}/citas/${id}`, newCit);
    }
    getCitasById(id:number):Observable<any>{
        return this.http.get<any>(`${this.api_url}/citasMed/${id}`);
    }

    getCitaById(id: number): Observable<any>{
        return this.http.get<any>(`${this.api_url}/citas/${id}`);
    }

    deleteCita(id:number): Observable<any>{
        return this.http.delete<any>(`${this.api_url}/citas/${id}`);
    }
}