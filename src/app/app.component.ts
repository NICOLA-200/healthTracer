import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDataService } from './service/user-data.service';
import { User } from './data/type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {
  title = 'healthTracer';
  userData: User[] = []

  searchQuery: string = '';
  workoutFilter: string = 'All';


  constructor(private userDataService: UserDataService) {
  }

  get filteredUsers() {
    return this.userData
    .filter(user =>
       this.searchQuery === '' || user.name.toLocaleLowerCase().includes(this.searchQuery.toLocaleLowerCase())
    )
    .filter(user =>
      this.workoutFilter === 'All' || user.workouts.some(w => w.type === this.workoutFilter)
    )
  }

  getWorkoutTypes(workouts: any[]) {
    return workouts.map(w => w.type).join(', ');
  }

  getWorkoutCount(workouts: any[]) {
    return workouts.length;
  }

  getTotalMinutes(workouts: any[]) {
    return workouts.reduce((sum, w) => sum + w.minutes, 0);
  }

  ngOnInit(): void {
    this.userData = this.userDataService.getUserData();
    console.log(this.userData)
  }


}
