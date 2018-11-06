import {Injectable} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {Http, Headers, RequestOptions} from '@angular/http';
import {StateService} from './state.service';


@Injectable()
export class ActionService {

    constructor(
        private stateService: StateService,
        private router : Router,
        private http: Http
    ){}
    
    public removeUser(){
        this.stateService.user = false;
    }
    
    public addUser(user){
        this.stateService.user = user;
        this.router.navigate(['Login']);
    }
    
    public getUser(token){
        return this.http.get('http://localhost:8080/api/user?token='+token).toPromise();
    }

}