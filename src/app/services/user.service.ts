import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _loggedInUser$ = new BehaviorSubject<User>({
    name: 'Puki',
    coins: 100,
    moves: []
  })
  public loggedInUser$ = this._loggedInUser$.asObservable();

  constructor() { }

  getUser(): User {
    return this._loggedInUser$.value
  }

}
