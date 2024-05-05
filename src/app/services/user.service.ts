import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user$ = new BehaviorSubject<User>({
    name: 'Puki',
    coins: 100,
    // moves: []
  })
  public user$ = this._user$.asObservable()

  constructor() { }

  getUser(): User {
    return {
      name: 'Puki',
      coins: 100,
    }
  }

}
