import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Location } from '../models/location';
import { LOCATIONS } from '../mock/mock-locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getLocations(): Observable<Location[]> {
    return of(LOCATIONS);
  }

  getLocation(id: number): Observable<Location> {
    const user = LOCATIONS.find(h => h.id === id)!;
    return of(user);
  }

  updateLocation(location: Location): Observable<number> {
    // if Location id == -1 then add Location
    // else edit Location

    return of(location.id); // < 0 errors, > 0 Location number
  }

  deleteLocation(id: number): Observable<boolean> {
    return of(true);
  }
}
