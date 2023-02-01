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

  updateTv(tv: Tv): Observable<number> {
    // if tv id == -1 then add tv
    // else edit tv

    return of(tv.id); // < 0 errors, > 0 tv number
  }

  deleteTv(id: number): Observable<boolean> {
    return of(true);
  }
}

export interface Config {
  result: string;
  tvs: string;
}