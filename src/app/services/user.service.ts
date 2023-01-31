import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models/user';
import { USERS } from '../mock/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUser(id: number): Observable<User> {
    const user = USERS.find(h => h.id === id)!;
    return of(user);
  }

  updateUser(user: User): Observable<number> {
    // if user id == -1 then add user
    // else edit user

    return of(user.id); // < 0 errors, > 0 user number
  }

  deleteUser(id: number): Observable<boolean> {
    return of(true);
  }
}
