import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { of } from 'rxjs';

import { Tv, TvView } from '../models/tv';
import { TVS } from '../mock/mock-tvs';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  constructor(private http: HttpClient) { }

  getTvs(): Observable<Tv[]> {
    let url = "https://llemr0veyj.execute-api.us-east-1.amazonaws.com/alpha/tvs";

    return this.http.get<Tv[]>(url);
  }



  getTv(id: number): Observable<TvView> {
    let url = "https://llemr0veyj.execute-api.us-east-1.amazonaws.com/alpha/tvs";

    return this.http.get<TvView>(url);
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