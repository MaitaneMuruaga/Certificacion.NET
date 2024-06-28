import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGif } from '../interfaces/actividad';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  
  constructor(private http: HttpClient) {}

  getGif(data: string): Observable<IGif[]> {
    return this.http.get<IGif[]>(`https://api.giphy.com/v1/gifs/search?q=${data}ck11gaWbHVnGqcWILyTMjUH7aHdsDoVP`);
  }

}
