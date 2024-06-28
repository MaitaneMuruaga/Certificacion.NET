import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  
  constructor(private http: HttpClient) {}

  getPaises(continente: string): Observable<IPais[]> {
    return this.http.get<IPais[]>(`https://restcountries.com/v3.1/region/${continente}`);
  }
}

//Desarrollar la interface 
    //Entrar a la url, ver el json y desarrollar la interface

//Crear y desarrollar el servicio
    //Tomar como ejemplo uno ya hecho y cambiar el método get (importaciones e inyección de dependencia del httpclient)
    //Vigilar si en app.module está importado el módulo HttpClientModule

//Crear y desarrollar el componente
    //Tomar como modelo un componente que use un servicio (inyectar el servicio en el constructor)
    //Desarrollar los métodos de acceso a datos llamando al servicio (tomar como modelo un método ya hecho)