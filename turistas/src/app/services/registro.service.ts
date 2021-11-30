import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  url = 'http://localhost:4000/api/registros/';
  

  constructor(private http: HttpClient) { }
  

  getRegistros(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarRegistro(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarRegistro(registro: Registro): Observable<any> {
    return this.http.post(this.url, registro);
  }

  obtenerRegistro(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarRegistro(id: string, registro: Registro): Observable<any> {
    return this.http.put(this.url + id, registro);
  }
  
  // formatDate(date: Date): string{
  //   const day = date.getDate();
  //   const month = date.getMonth() + 1;
  //   const year = date.getFullYear();

  //   return `${year}-${month}-${day}`;
  // }


}