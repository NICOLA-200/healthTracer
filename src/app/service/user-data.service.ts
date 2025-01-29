import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private defaultUserData = [
    {
      id: 1,
      name: 'John Doe',
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 45 }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      workouts: [
        { type: 'Swimming', minutes: 60 },
        { type: 'Running', minutes: 20 }
      ]
    },
    {
      id: 3,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 }
      ]
    },
  ];

  private userData  = this.defaultUserData;

  constructor() { 
    this.initializeUserData();
  }

  private initializeUserData() : void {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      // Parse and store in a class property
      this.userData = JSON.parse(storedData);
  } else {
      this.userData = this.defaultUserData;
      this.saveUserData();
    }
  }

  
  saveUserData() {
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }

}
