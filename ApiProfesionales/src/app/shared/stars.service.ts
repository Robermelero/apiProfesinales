import { Observable } from 'rxjs';
import { Star } from '../models/star';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarsService {

  private url = "http://localhost:4000";

  constructor(private http: HttpClient) {}

  getStars(): Observable<any> {
    return this.http.get(`${this.url}/profesionales/${name}}`);
  }

  getByNameAndSurname(name: string, surname: string): Observable<any> {
    return this.http.get(`${this.url}/profesionales/${name}/${surname}`);
  }

  addStar(star: Star): Observable<Star> {
    return this.http.post<Star>(`${this.url}/profesionales`, star);
  }

  updateStar(star: Star): Observable<Star> {
    return this.http.put<Star>(`${this.url}/profesionales/${star.name}`, star);
  }
  

  deleteStar(name: string): Observable<any> {
    console.log(name)
    return this.http.delete(`${this.url}/profesionales/${name}`);
  }
}