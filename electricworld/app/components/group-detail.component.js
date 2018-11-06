System.register(['@angular/core', '@angular/router-deprecated', '../services/group.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, group_service_1;
    var GroupDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (group_service_1_1) {
                group_service_1 = group_service_1_1;
            }],
        execute: function() {
            GroupDetailComponent = (function () {
                function GroupDetailComponent(groupService, routeParams) {
                    this.groupService = groupService;
                    this.routeParams = routeParams;
                }
                GroupDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this.routeParams.get('id');
                    this.groupService.getGroup(id.toString())
                        .then(function (group) { return _this.group = group; });
                };
                GroupDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                GroupDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/templates/group-detail.html',
                    }), 
                    __metadata('design:paramtypes', [group_service_1.GroupService, router_deprecated_1.RouteParams])
                ], GroupDetailComponent);
                return GroupDetailComponent;
            }());
            exports_1("GroupDetailComponent", GroupDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JvdXAtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUdFLDhCQUNVLFlBQTBCLEVBQzFCLFdBQXdCO29CQUR4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7Z0JBQ2xDLENBQUM7Z0JBRUQsdUNBQVEsR0FBUjtvQkFBQSxpQkFJQztvQkFIQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7eUJBQ3RDLElBQUksQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRUQscUNBQU0sR0FBTjtvQkFDRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4QixDQUFDO2dCQW5CSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFdBQVcsRUFBRSxpQ0FBaUM7cUJBQy9DLENBQUM7O3dDQUFBO2dCQWtCRiwyQkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsdURBaUJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ncm91cC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4vZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IEdyb3VwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2dyb3VwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAvdGVtcGxhdGVzL2dyb3VwLWRldGFpbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBncm91cDogR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBncm91cFNlcnZpY2U6IEdyb3VwU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGlkID0gK3RoaXMucm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuICAgIHRoaXMuZ3JvdXBTZXJ2aWNlLmdldEdyb3VwKGlkLnRvU3RyaW5nKCkpXG4gICAgICAudGhlbihncm91cCA9PiB0aGlzLmdyb3VwID0gZ3JvdXApO1xuICB9XG5cbiAgZ29CYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
