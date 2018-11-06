System.register(['@angular/core', '../services/action.service', '@angular/router-deprecated', '../services/state.service', '../services/auth.service'], function(exports_1, context_1) {
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
    var core_1, action_service_1, router_deprecated_1, state_service_1, auth_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (action_service_1_1) {
                action_service_1 = action_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (state_service_1_1) {
                state_service_1 = state_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(actionService, stateService, authService, router) {
                    this.actionService = actionService;
                    this.stateService = stateService;
                    this.authService = authService;
                    this.router = router;
                    if (stateService.isAuthorized())
                        this.router.navigate(['Map']);
                }
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.authService
                        .loginUser(this.email, this.password)
                        .then(function (withData) {
                        _this.actionService.addUser(withData.json());
                        _this.router.navigate(['Map']);
                    })
                        .catch(function (errData) { return alertify.alert('Error', errData.json().msg || 'Server Not Running'); });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/templates/login.html',
                        providers: [auth_service_1.AuthService]
                    }), 
                    __metadata('design:paramtypes', [action_service_1.ActionService, state_service_1.StateService, auth_service_1.AuthService, router_deprecated_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBS0Msd0JBQ1MsYUFBNEIsRUFDNUIsWUFBMEIsRUFDMUIsV0FBd0IsRUFDeEIsTUFBZTtvQkFIZixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFDNUIsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFTO29CQUd2QixFQUFFLENBQUEsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMvRCxDQUFDO2dCQUVNLGlDQUFRLEdBQWY7b0JBQUEsaUJBWUM7b0JBVkEsSUFBSSxDQUFDLFdBQVc7eUJBQ2QsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQzt5QkFDcEMsSUFBSSxDQUFDLFVBQUEsUUFBUTt3QkFFYixLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzt3QkFDNUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUUvQixDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxFQUFuRSxDQUFtRSxDQUFDLENBQUM7Z0JBRXpGLENBQUM7Z0JBaENGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsV0FBVyxFQUFFLDBCQUEwQjt3QkFDdkMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztxQkFDeEIsQ0FBQzs7a0NBQUE7Z0JBK0JGLHFCQUFDO1lBQUQsQ0E3QkEsQUE2QkMsSUFBQTtZQTdCRCwyQ0E2QkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvYWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHtTdGF0ZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL3N0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcblxuZGVjbGFyZSBsZXQgYWxlcnRpZnk6IGFueTtcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlVXJsOiAnYXBwL3RlbXBsYXRlcy9sb2dpbi5odG1sJyxcblx0cHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXG5cdHByaXZhdGUgZW1haWw6IFN0cmluZztcblx0cHJpdmF0ZSBwYXNzd29yZDogU3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZSxcblx0XHRwcml2YXRlIHN0YXRlU2VydmljZTogU3RhdGVTZXJ2aWNlLFxuXHRcdHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVyIDogUm91dGVyXG5cdCl7XG5cblx0XHRpZihzdGF0ZVNlcnZpY2UuaXNBdXRob3JpemVkKCkpIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnTWFwJ10pO1xuXHR9XG5cblx0cHVibGljIG9uU3VibWl0KCl7XG5cblx0XHR0aGlzLmF1dGhTZXJ2aWNlXG5cdFx0XHQubG9naW5Vc2VyKHRoaXMuZW1haWwsIHRoaXMucGFzc3dvcmQpXG5cdFx0XHQudGhlbih3aXRoRGF0YSA9PiB7XG5cblx0XHRcdFx0dGhpcy5hY3Rpb25TZXJ2aWNlLmFkZFVzZXIod2l0aERhdGEuanNvbigpKTtcblx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydNYXAnXSk7XG5cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZXJyRGF0YSA9PiBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBlcnJEYXRhLmpzb24oKS5tc2cgfHwgJ1NlcnZlciBOb3QgUnVubmluZycpKTtcblxuXHR9XG5cdFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
