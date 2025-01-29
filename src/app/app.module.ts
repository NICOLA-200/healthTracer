import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    ModalComponent

  ],
  imports: [
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
