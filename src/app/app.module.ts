import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    ModalComponent

  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
   
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
