import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {Group} from './components/group.component';
import {GroupsComponent} from './components/groups.component';
import {GroupDetailComponent} from './components/group-detail.component';
import {MapComponent} from './components/map.component';
import {MessagesComponent} from './components/messages.component';
import {ProfileComponent} from './components/profile.component';
import {SignupComponent} from './components/signup.component';
import {LoginComponent} from './components/login.component';
import {Festival} from './components/festival.component';
import {FestivalsComponent} from './components/festivals.component';
import {FestivalDetailComponent} from './components/festival-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {StateService} from './services/state.service';
import {ActionService} from './services/action.service';
import {GroupService} from './services/group.service';
import {FestivalService} from './services/festival.service';

declare let io: any;
declare let _: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/my-app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, StateService, ActionService, GroupService, FestivalService]
})
@RouteConfig([
	{path: '/profile', name: 'Profile', component: ProfileComponent, useAsDefault: true},
	{path: '/messages', name: 'Messages', component: MessagesComponent},
    {path: '/festivals', name: 'Festivals', component: FestivalsComponent},
    {path: '/festivaldetail/:id', name: 'FestivalDetail', component: FestivalDetailComponent},
	{path: '/groups', name: 'Groups', component: GroupsComponent},
    {path: '/groupdetail/:id', name: 'GroupDetail', component: GroupDetailComponent},
	{path: '/map', name: 'Map', component: MapComponent},
    {path: '/signup', name: 'Signup', component: SignupComponent},
    {path: '/login', name: 'Login', component: LoginComponent},
])

export class AppComponent {

    constructor(
        public stateService: StateService,
        public actionService: ActionService
    ){}

}