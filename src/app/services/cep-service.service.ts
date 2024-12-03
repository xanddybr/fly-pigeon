import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cep } from '../models/cep';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  constructor(private http:HttpClient) { }
  url:string ='https://viacep.com.br/ws/21730000/json/'

  getCep(): Observable<Cep[]>{
    return this.http.get<Cep[]>(this.url)
  }

}