import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {ActionService} from './action.service';

declare let _: any;


@Injectable()
export class AuthService {
    
    constructor(
        private http: Http,
        private actionService: ActionService
    ){}

    public signUpUser(email, username, password){

        let postData = {email, username, password};

        console.log(postData)

        let body = JSON.stringify(postData);

        let headers = new Headers({'Content-Type': 'application/json'});

        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:8080/auth/signup', body, options)
                   .toPromise();

    }

    public loginUser(email, password){

        let postData = {email, password};

        let body = JSON.stringify(postData);

        let headers = new Headers({'Content-Type': 'application/json'});

        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:8080/auth', body, options)
            .toPromise();

    }

    public logoutUser(){

        this.actionService.removeUser()

    }

}