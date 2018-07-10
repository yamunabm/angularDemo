import { Component } from '@angular/core';
import { USER_DATA } from "./data/mocks";
import { User } from "./model/user";
import { DataService } from './services/data.service';
import * as firebase from 'firebase';
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

  users: User[]; // import from other file

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //this.users = USER_DATA;
    //this.users = this.dataService.getUserData();

    // this.dataService.getJsonData().subscribe(
    //   data => this.users = data,
    //   err => console.log(err),
    //   () => console.log('COMPLETED'));

    firebase.initializeApp({
      apiKey: "AIzaSyDCsoL5_5lzp5vPh_SyjwWLSddscWOJVT0",
      authDomain: "fir-soc-gen.firebaseapp.com"
    });
    this.dataService.getApiData().subscribe(
      data => this.users = data
    );

  }
}
