import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaises } from './paises';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) {}

  getPaises(moneda: string): Observable<IPaises[]> {
    return this.http.get<IPaises[]>(`https://restcountries.com/v3.1/currency/${moneda}`);
  }

}
