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
    const tvs = of(TVS);
    return tvs;
  }

  getTv(id: number): Observable<Tv> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const tv = TVS.find(h => h.id === id)!;
    return of(tv);
  }
}
