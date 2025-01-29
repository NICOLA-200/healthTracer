import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent  {
  isOpen =  false;

  
  openModal() : void {
    this.isOpen = true;
  }

  closeModal(): void {
    this.isOpen = false;
       
  }

  
}
