System.register(['@angular/core', '@angular/router-deprecated', './state.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, state_service_1;
    var ActionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (state_service_1_1) {
                state_service_1 = state_service_1_1;
            }],
        execute: function() {
            ActionService = (function () {
                function ActionService(stateService, router) {
                    this.stateService = stateService;
                    this.router = router;
                }
                ActionService.prototype.removeUser = function () {
                    this.stateService.user = false;
                };
                ActionService.prototype.addUser = function (user) {
                    this.stateService.user = user;
                    this.router.navigate(['Login']);
                };
                ActionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [state_service_1.StateService, router_deprecated_1.Router])
                ], ActionService);
                return ActionService;
            }());
            exports_1("ActionService", ActionService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBRUksdUJBQ1ksWUFBMEIsRUFDMUIsTUFBZTtvQkFEZixpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUztnQkFDekIsQ0FBQztnQkFFSSxrQ0FBVSxHQUFqQjtvQkFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ25DLENBQUM7Z0JBR00sK0JBQU8sR0FBZCxVQUFlLElBQUk7b0JBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBaEJMO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQW1CYixvQkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQseUNBa0JDLENBQUEiLCJmaWxlIjoic2VydmljZXMvYWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHtTdGF0ZVNlcnZpY2V9IGZyb20gJy4vc3RhdGUuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGlvblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc3RhdGVTZXJ2aWNlOiBTdGF0ZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyIDogUm91dGVyXG4gICAgKXt9XG4gICAgXG4gICAgcHVibGljIHJlbW92ZVVzZXIoKXtcbiAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2UudXNlciA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBwdWJsaWMgYWRkVXNlcih1c2VyKXtcbiAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2UudXNlciA9IHVzZXI7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnTG9naW4nXSk7XG4gICAgfVxuICAgIFxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
