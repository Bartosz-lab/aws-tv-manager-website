import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  url = 'https://llemr0veyj.execute-api.us-east-1.amazonaws.com/alpha';

  getLocations(): Observable<{statusCode: number; body: Location[]}> {
    return this.http.get<{statusCode: number; body: Location[]}>(`${this.url}/locations`);
  }

  getLocation(id: number): Observable<{statusCode: number; body: Location}> {
    return this.http.get<{statusCode: number; body: Location}>(`${this.url}/location/${id}`);
  }

  updateLocation(location: Location): Observable<{statusCode: number; id: number}> {
    if(location.id == -1) {
      return this.http.post<{statusCode: number; id: number}>(`${this.url}/location`, location);
    } else {
      return this.http.put<{statusCode: number; id: number}>(`${this.url}/location/${location.id}`, location);
    }
  }

  deleteLocation(id: number): Observable<{statusCode: number; body: number}> {
    return this.http.delete<{statusCode: number; body: number}>(`${this.url}/location/${id}`);
  }
}
