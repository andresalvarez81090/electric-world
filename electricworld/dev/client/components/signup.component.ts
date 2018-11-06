import {Component} from '@angular/core';
import {ActionService} from '../services/action.service';
import { Router } from '@angular/router-deprecated';
import {StateService} from '../services/state.service';
import {AuthService} from '../services/auth.service';

declare let alertify: any;

@Component({
    selector: 'signup',
    templateUrl: 'app/templates/signup.html',
    providers: [AuthService]

})

export class SignupComponent {

    private username: String;
    private email: String;
    private password: String;

    constructor(
        private actionService: ActionService,
        private stateService: StateService,
        private authService: AuthService,
        private router : Router
    ){
        
        if(stateService.isAuthorized()) this.router.navigate(['Map']);
    }

    public onSubmit(){

        this.authService
            .signUpUser(this.email, this.username, this.password)
            .then(withData => {

                this.actionService.addUser(withData.json().user);
                this.router.navigate(['Map']);

            })
            .catch(errData => alertify.alert('Error', errData.json().msg || 'Server Not Running'));
        
    }

}