import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ModalComponent

  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    PaginatorModule,
    BrowserAnimationsModule
   
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
