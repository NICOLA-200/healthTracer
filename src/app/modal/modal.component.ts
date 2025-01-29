import { Component } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  
})
export class ModalComponent  {
  isOpen =  false;
  
  userName: string = '';
  workoutType: string = 'Cardio';
  workoutMinutes: number = 30;

  
  openModal() : void {
    this.isOpen = true;
  }

  closeModal(): void {
    this.isOpen = false;
       
  }

  confirmAction() {
    console.log("Confirmed: ", { userName: this.userName, workoutType: this.workoutType, workoutMinutes: this.workoutMinutes });
    this.closeModal();
  }

  
}
