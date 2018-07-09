import { Component } from '@angular/core';
import { USER_DATA } from "./data/mocks";
import { User } from "./model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //   user ={
  //     firstName : "Bill",
  //     lastName : "Gates",
  //     dob : new Date("Dec 21, 1963"),
  //     income : 30000,
  //     votes : 14,
  //     image : "assets/image/bill.jpg"
  // }

  user: User; // import from other file

  ngOnInit() {
this.user = USER_DATA;
  }
}
