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
  constructor(private userDataService: UserDataService) {
  }

  ngOnInit(): void {
    this.userData = this.userDataService.getUserData();
  }


}
