import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../service/user-data.service';
import  { v4 as uuid4 } from 'uuid';


interface Workout {
  type: string;
  minutes: number;
}

// Define the interface for a user
interface User {
  id: number;
  name: string;
  workouts: Workout[];
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  
})
export class ModalComponent implements OnInit  {
  isOpen =  false;
  
  userName: string = '';
  workoutType: string = 'Cardio';
  workoutMinutes: number = 30;


  // Define the interface for a single workout
   
 

   userData: User[] = []

  constructor(private userDataService: UserDataService ) {
  }

  ngOnInit(): void {
    this.userData = this.userDataService.getUserData();
  }
  
  openModal() : void {
    this.isOpen = true;
  }

  closeModal(): void {
    this.isOpen = false;
       
  }

  confirmAction(): void {
    // Ensure that the workout type and minutes are valid
    if (this.workoutType && !isNaN(this.workoutMinutes)) {
      
      // Build the user object
      const user: User = {
        id: Number(uuid4()),  // Assuming userId is already defined in your component
        name: this.userName,
        workouts: [
          {
            type: this.workoutType,
            minutes: this.workoutMinutes
          }
        ]
      };
      
      // Call the addWorkout method from your userDataService
      this.userDataService.addWorkout(user);
  
      // Refresh the user data from the service
      this.userData = this.userDataService.getUserData();
  
      // Close the modal
      this.closeModal();
      
      console.log('Confirmed:', {
        userName: this.userName,
        workoutType: this.workoutType,
        workoutMinutes: this.workoutMinutes,
      });
    }
  }
  


  
}
