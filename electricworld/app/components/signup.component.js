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
    var SignupComponent;
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
            SignupComponent = (function () {
                function SignupComponent(actionService, stateService, authService, router) {
                    this.actionService = actionService;
                    this.stateService = stateService;
                    this.authService = authService;
                    this.router = router;
                    if (stateService.isAuthorized())
                        this.router.navigate(['Map']);
                }
                SignupComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.authService
                        .signUpUser(this.email, this.username, this.password)
                        .then(function (withData) {
                        _this.actionService.addUser(withData.json());
                        _this.router.navigate(['Map']);
                    })
                        .catch(function (errData) { return alertify.alert('Error', errData.json().msg || 'Server Not Running'); });
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        selector: 'signup',
                        templateUrl: 'app/templates/signup.html',
                        providers: [auth_service_1.AuthService]
                    }), 
                    __metadata('design:paramtypes', [action_service_1.ActionService, state_service_1.StateService, auth_service_1.AuthService, router_deprecated_1.Router])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQU1JLHlCQUNZLGFBQTRCLEVBQzVCLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3hCLE1BQWU7b0JBSGYsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUztvQkFHdkIsRUFBRSxDQUFBLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFFTSxrQ0FBUSxHQUFmO29CQUFBLGlCQVlDO29CQVZHLElBQUksQ0FBQyxXQUFXO3lCQUNYLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQzt5QkFDcEQsSUFBSSxDQUFDLFVBQUEsUUFBUTt3QkFFVixLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzt3QkFDNUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUVsQyxDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxFQUFuRSxDQUFtRSxDQUFDLENBQUM7Z0JBRS9GLENBQUM7Z0JBbkNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFdBQVcsRUFBRSwyQkFBMkI7d0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7cUJBRTNCLENBQUM7O21DQUFBO2dCQWdDRixzQkFBQztZQUFELENBOUJBLEFBOEJDLElBQUE7WUE5QkQsNkNBOEJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zaWdudXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5pbXBvcnQge1N0YXRlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvc3RhdGUuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5kZWNsYXJlIGxldCBhbGVydGlmeTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpZ251cCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvdGVtcGxhdGVzL3NpZ251cC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZV1cblxufSlcblxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHVzZXJuYW1lOiBTdHJpbmc7XG4gICAgcHJpdmF0ZSBlbWFpbDogU3RyaW5nO1xuICAgIHByaXZhdGUgcGFzc3dvcmQ6IFN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc3RhdGVTZXJ2aWNlOiBTdGF0ZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlciA6IFJvdXRlclxuICAgICl7XG4gICAgICAgIFxuICAgICAgICBpZihzdGF0ZVNlcnZpY2UuaXNBdXRob3JpemVkKCkpIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnTWFwJ10pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblN1Ym1pdCgpe1xuXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgICAgIC5zaWduVXBVc2VyKHRoaXMuZW1haWwsIHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQpXG4gICAgICAgICAgICAudGhlbih3aXRoRGF0YSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvblNlcnZpY2UuYWRkVXNlcih3aXRoRGF0YS5qc29uKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnTWFwJ10pO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyckRhdGEgPT4gYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgZXJyRGF0YS5qc29uKCkubXNnIHx8ICdTZXJ2ZXIgTm90IFJ1bm5pbmcnKSk7XG4gICAgICAgIFxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
