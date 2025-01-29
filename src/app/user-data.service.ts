import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  getUserData(): never[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
