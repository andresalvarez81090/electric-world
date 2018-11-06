import {Component, OnInit} from '@angular/core';
import {ActionService} from '../services/action.service';
import { Router } from '@angular/router-deprecated';
import {StateService} from '../services/state.service';

declare let alertify: any;

@Component({
	templateUrl: 'app/templates/profile.html'
})

export class ProfileComponent implements OnInit {

	private user: any;

	constructor(
		private actionService: ActionService,
		private stateService: StateService,
		private router : Router
	){

		if(!stateService.isAuthorized()) this.router.navigate(['Login']);
	}

	setUser(user){

		this.user = user

		console.log(this.user);

	}


	ngOnInit() {


		this.actionService
			.getUser(this.stateService.user.token)
			.then(res => {
				this.setUser(res.json());
			})
			.catch(errData => alertify.alert('Error', 'Error'));

	}



}