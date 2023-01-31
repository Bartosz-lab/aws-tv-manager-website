import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Tv } from '../models/tv';
import { TVS } from '../mock/mock-tvs';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor() { }

  getTvs(): Observable<Tv[]> {
    return of(TVS);
  }

  getTv(id: number): Observable<Tv> {
    const tv = TVS.find(h => h.id === id)!;
    return of(tv);
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
