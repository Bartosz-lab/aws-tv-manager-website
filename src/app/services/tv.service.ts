import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { of } from 'rxjs';

import { Tv, TvView } from '../models/tv';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  constructor(private http: HttpClient) { }

  url = 'https://llemr0veyj.execute-api.us-east-1.amazonaws.com/alpha';

  getTvs(): Observable<{statusCode: number; body: Tv[]}> {
    return this.http.get<{statusCode: number; body: Tv[]}>(`${this.url}/tvs`);
  }



  getTv(id: number): Observable<{statusCode: number; body: TvView}> {
    return this.http.get<{statusCode: number; body: TvView}>(`${this.url}/tv/${id}`);
  }

  updateTv(tv: Tv): Observable<{statusCode: number; id: number}> {
    const body = {
      id: tv.id,
      name: tv.name,
      ip: tv.ip,
      config: tv.config,
      supervisor: tv.supervisor,
      location: tv.location

    }
    return this.http.put<{statusCode: number; id: number}>(
      `${this.url}/tv/${tv.id}`, tv);
  }

  deleteTv(id: number): Observable<{statusCode: number; body: string}> {
    return this.http.delete<{statusCode: number; body: string}>(`${this.url}/tv/${id}`);
  }
}