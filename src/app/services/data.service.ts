import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';

@Injectable()
export class DataService {

    constructor(public http: Http, public httpclient : HttpClient) { }
    getJsonData() {
        return this.http.get('assets/data/user-data.json').map(response => <User[]>response.json().userdata);
    }

    getApiData() {
        return this.httpclient.get<User[]>("https://fir-demo-angular-3248d.firebaseio.com/userdata.json"); //"https://fir-soc-gen.firebaseio.com/userdata.json"
    }

    getUserData() {
        return USER_DATA;
    }
}