import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Tv } from './tv';
import { TVS } from './mock-tvs';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor() { }

  getTvs(): Observable<Tv[]> {
    const tvs = of(TVS);
    return tvs;
  }
}
