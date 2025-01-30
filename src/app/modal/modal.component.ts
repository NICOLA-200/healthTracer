import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../service/user-data.service';
import  { v4 as uuid4 } from 'uuid';
import { User } from '../data/type';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  
})
export class ModalComponent   {
  isOpen =  false;
  
  userName: string = '';
  workoutType: string = 'Cardio';
  workoutMinutes: number = 30;


  // Define the interface for a single workout
   
 

  

  constructor(private userDataService: UserDataService ) {
  }


  
  openModal() : void {
    this.isOpen = true;
  }

  closeModal(): void {
    this.isOpen = false;
       
  }

  confirmAction(): void {
    //validate user input
    if (!this.userName) {
      alert('Please enter your name.');
      return
    }

    
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
  
      // Close the modal
      this.closeModal();
      
      console.log('Confirmed:', {
        userName: this.userName,
        workoutType: this.workoutType,
        workoutMinutes: this.workoutMinutes,
      });
    } else {
      alert('Input correct data!') 
    }
  }
  


  
}
