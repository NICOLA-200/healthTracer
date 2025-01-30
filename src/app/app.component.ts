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

  workouts: { name: string, value: string }[] = [
    { name: 'All', value: 'All' },
    { name: 'Running', value: 'Running' },
    { name: 'Cycling', value: 'Cycling' },
    { name: 'Swimming', value: 'Swimming' },
    { name: 'Yoga', value: 'Yoga' }
  ];


  searchQuery: string = '';
  workoutFilter: string = 'All';
  




  constructor(private userDataService: UserDataService) {
  }

   get filteredUsers() {
    console.log(this.workoutFilter)
    return this.userData
    .filter(user =>
      this.workoutFilter === 'All' || user.workouts.some(w => w.type === this.workoutFilter)
    )
    .filter(user =>
       this.searchQuery === '' || user.name.toLocaleLowerCase().includes(this.searchQuery.toLocaleLowerCase())
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
