import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = 'https://llemr0veyj.execute-api.us-east-1.amazonaws.com/alpha';

  getUsers(): Observable<{statusCode: number; body: User[]}> {
    return this.http.get<{statusCode: number; body: User[]}>(`${this.url}/employees`);
  }

  getUser(id: number): Observable<{statusCode: number; body: User}> {
    return this.http.get<{statusCode: number; body: User}>(`${this.url}/employee/${id}`);
  }

  updateUser(user: User): Observable<{statusCode: number; id: number}> {
    if(user.id == -1) {
      return this.http.post<{statusCode: number; id: number}>(`${this.url}/employee`, user);
    } else {
      return this.http.put<{statusCode: number; id: number}>(`${this.url}/employee/${user.id}`, user);
    }
  }

  deleteUser(id: number): Observable<{statusCode: number; body: string}> {
    return this.http.delete<{statusCode: number; body: string}>(`${this.url}/employee/${id}`);
  }
}
