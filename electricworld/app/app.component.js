System.register(['@angular/core', '@angular/http', './components/groups.component', './components/group-detail.component', './components/map.component', './components/messages.component', './components/profile.component', './components/signup.component', './components/login.component', './components/festivals.component', './components/festival-detail.component', '@angular/router-deprecated', './services/state.service', './services/action.service', './services/group.service', './services/festival.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, groups_component_1, group_detail_component_1, map_component_1, messages_component_1, profile_component_1, signup_component_1, login_component_1, festivals_component_1, festival_detail_component_1, router_deprecated_1, state_service_1, action_service_1, group_service_1, festival_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (groups_component_1_1) {
                groups_component_1 = groups_component_1_1;
            },
            function (group_detail_component_1_1) {
                group_detail_component_1 = group_detail_component_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (messages_component_1_1) {
                messages_component_1 = messages_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (festivals_component_1_1) {
                festivals_component_1 = festivals_component_1_1;
            },
            function (festival_detail_component_1_1) {
                festival_detail_component_1 = festival_detail_component_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (state_service_1_1) {
                state_service_1 = state_service_1_1;
            },
            function (action_service_1_1) {
                action_service_1 = action_service_1_1;
            },
            function (group_service_1_1) {
                group_service_1 = group_service_1_1;
            },
            function (festival_service_1_1) {
                festival_service_1 = festival_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(stateService, actionService) {
                    this.stateService = stateService;
                    this.actionService = actionService;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/my-app.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [router_deprecated_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, state_service_1.StateService, action_service_1.ActionService, group_service_1.GroupService, festival_service_1.FestivalService]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/profile', name: 'Profile', component: profile_component_1.ProfileComponent, useAsDefault: true },
                        { path: '/messages', name: 'Messages', component: messages_component_1.MessagesComponent },
                        { path: '/festivals', name: 'Festivals', component: festivals_component_1.FestivalsComponent },
                        { path: '/festivaldetail/:id', name: 'FestivalDetail', component: festival_detail_component_1.FestivalDetailComponent },
                        { path: '/groups', name: 'Groups', component: groups_component_1.GroupsComponent },
                        { path: '/groupdetail/:id', name: 'GroupDetail', component: group_detail_component_1.GroupDetailComponent },
                        { path: '/map', name: 'Map', component: map_component_1.MapComponent },
                        { path: '/signup', name: 'Signup', component: signup_component_1.SignupComponent },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                    ]), 
                    __metadata('design:paramtypes', [state_service_1.StateService, action_service_1.ActionService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5Q0E7Z0JBRUksc0JBQ1csWUFBMEIsRUFDMUIsYUFBNEI7b0JBRDVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUMxQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtnQkFDckMsQ0FBQztnQkF2QlA7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsV0FBVyxFQUFFLDJCQUEyQjt3QkFDeEMsVUFBVSxFQUFFLENBQUMscUNBQWlCLENBQUM7d0JBQy9CLFNBQVMsRUFBRSxDQUFDLG9DQUFnQixFQUFFLHFCQUFjLEVBQUUsNEJBQVksRUFBRSw4QkFBYSxFQUFFLDRCQUFZLEVBQUUsa0NBQWUsQ0FBQztxQkFDNUcsQ0FBQztvQkFDRCwrQkFBVyxDQUFDO3dCQUNaLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUNwRixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUM7d0JBQ2hFLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBQzt3QkFDdEUsRUFBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxtREFBdUIsRUFBQzt3QkFDNUYsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7d0JBQzFELEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFDO3dCQUNuRixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsNEJBQVksRUFBQzt3QkFDakQsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7d0JBQzdELEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO3FCQUM3RCxDQUFDOztnQ0FBQTtnQkFTRixtQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsdUNBT0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBIVFRQX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge0dyb3VwfSBmcm9tICcuL2NvbXBvbmVudHMvZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7R3JvdXBzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZ3JvdXBzLmNvbXBvbmVudCc7XG5pbXBvcnQge0dyb3VwRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZ3JvdXAtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQge01hcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHtNZXNzYWdlc0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL21lc3NhZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9wcm9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3NpZ251cC5jb21wb25lbnQnO1xuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zlc3RpdmFsfSBmcm9tICcuL2NvbXBvbmVudHMvZmVzdGl2YWwuY29tcG9uZW50JztcbmltcG9ydCB7RmVzdGl2YWxzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZmVzdGl2YWxzLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zlc3RpdmFsRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZmVzdGl2YWwtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5cbmltcG9ydCB7U3RhdGVTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3N0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHtBY3Rpb25TZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7R3JvdXBTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2dyb3VwLnNlcnZpY2UnO1xuaW1wb3J0IHtGZXN0aXZhbFNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZmVzdGl2YWwuc2VydmljZSc7XG5cbmRlY2xhcmUgbGV0IGlvOiBhbnk7XG5kZWNsYXJlIGxldCBfOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC90ZW1wbGF0ZXMvbXktYXBwLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbUk9VVEVSX1BST1ZJREVSUywgSFRUUF9QUk9WSURFUlMsIFN0YXRlU2VydmljZSwgQWN0aW9uU2VydmljZSwgR3JvdXBTZXJ2aWNlLCBGZXN0aXZhbFNlcnZpY2VdXG59KVxuQFJvdXRlQ29uZmlnKFtcblx0e3BhdGg6ICcvcHJvZmlsZScsIG5hbWU6ICdQcm9maWxlJywgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuXHR7cGF0aDogJy9tZXNzYWdlcycsIG5hbWU6ICdNZXNzYWdlcycsIGNvbXBvbmVudDogTWVzc2FnZXNDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2Zlc3RpdmFscycsIG5hbWU6ICdGZXN0aXZhbHMnLCBjb21wb25lbnQ6IEZlc3RpdmFsc0NvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvZmVzdGl2YWxkZXRhaWwvOmlkJywgbmFtZTogJ0Zlc3RpdmFsRGV0YWlsJywgY29tcG9uZW50OiBGZXN0aXZhbERldGFpbENvbXBvbmVudH0sXG5cdHtwYXRoOiAnL2dyb3VwcycsIG5hbWU6ICdHcm91cHMnLCBjb21wb25lbnQ6IEdyb3Vwc0NvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvZ3JvdXBkZXRhaWwvOmlkJywgbmFtZTogJ0dyb3VwRGV0YWlsJywgY29tcG9uZW50OiBHcm91cERldGFpbENvbXBvbmVudH0sXG5cdHtwYXRoOiAnL21hcCcsIG5hbWU6ICdNYXAnLCBjb21wb25lbnQ6IE1hcENvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvc2lnbnVwJywgbmFtZTogJ1NpZ251cCcsIGNvbXBvbmVudDogU2lnbnVwQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9sb2dpbicsIG5hbWU6ICdMb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnR9LFxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHN0YXRlU2VydmljZTogU3RhdGVTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZVxuICAgICl7fVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
