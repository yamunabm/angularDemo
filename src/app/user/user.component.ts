import { Component, Input } from '@angular/core';
import { User } from '../model/User';

@Component({
    selector : 'app-user',
    //template : `<h1> User Component loaded </h1>`,
    // styles :[`
    // h1 {
    //     color : leghtblue;
    // }
    // `]
    templateUrl : './user.component.html',
    styleUrls : [`./user.component.css`]
})

export class UserComponent {
    title = 'User-Demo-App';

    @Input('user') user : User;

    constructor(){
        console.log("copnstrructor");
    }

    ngOnInit(){
        console.log("ng On Init*********************")
    }

    ngOnChanges(){
        console.log("on changes*************");
    }
    ngAfterContentInit(){
        console.log("on ngAfterContentInit*************");
    }

     ngAfterContentChecked(){
        console.log("on ngAfterContentchecked*************");
    }
}
