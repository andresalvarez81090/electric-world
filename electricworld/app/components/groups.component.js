System.register(['@angular/core', '@angular/router-deprecated', './group-detail.component', '../services/group.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, group_detail_component_1, group_service_1;
    var GroupsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (group_detail_component_1_1) {
                group_detail_component_1 = group_detail_component_1_1;
            },
            function (group_service_1_1) {
                group_service_1 = group_service_1_1;
            }],
        execute: function() {
            GroupsComponent = (function () {
                function GroupsComponent(router, groupService) {
                    this.router = router;
                    this.groupService = groupService;
                }
                GroupsComponent.prototype.getGroups = function () {
                    var _this = this;
                    this.groupService.getGroups().then(function (groups) { return _this.groups = groups; });
                };
                GroupsComponent.prototype.ngOnInit = function () {
                    this.getGroups();
                };
                GroupsComponent.prototype.onSelect = function (group) { this.selectedGroup = group; };
                GroupsComponent.prototype.gotoDetail = function () {
                    this.router.navigate(['GroupDetail', { id: this.selectedGroup.id }]);
                };
                GroupsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/templates/groups.html',
                        directives: [group_detail_component_1.GroupDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, group_service_1.GroupService])
                ], GroupsComponent);
                return GroupsComponent;
            }());
            exports_1("GroupsComponent", GroupsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JvdXBzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUlDLHlCQUNTLE1BQWMsRUFDZCxZQUEwQjtvQkFEMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBYztnQkFBRyxDQUFDO2dCQUV2QyxtQ0FBUyxHQUFUO29CQUFBLGlCQUVDO29CQURBLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQXBCLENBQW9CLENBQUMsQ0FBQztnQkFDcEUsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbEIsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSLFVBQVMsS0FBWSxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFFdEQsb0NBQVUsR0FBVjtvQkFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEUsQ0FBQztnQkF6QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixXQUFXLEVBQUUsMkJBQTJCO3dCQUN4QyxVQUFVLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztxQkFDbEMsQ0FBQzs7bUNBQUE7Z0JBdUJGLHNCQUFDO1lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtZQXJCRCw2Q0FxQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2dyb3Vwcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4vZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IEdyb3VwRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9ncm91cC1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IEdyb3VwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2dyb3VwLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZVVybDogJ2FwcC90ZW1wbGF0ZXMvZ3JvdXBzLmh0bWwnLFxuXHRkaXJlY3RpdmVzOiBbR3JvdXBEZXRhaWxDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgR3JvdXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0Z3JvdXBzOiBHcm91cFtdO1xuXHRzZWxlY3RlZEdyb3VwOiBHcm91cDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgZ3JvdXBTZXJ2aWNlOiBHcm91cFNlcnZpY2UpIHt9XG5cblx0Z2V0R3JvdXBzKCkge1xuXHRcdHRoaXMuZ3JvdXBTZXJ2aWNlLmdldEdyb3VwcygpLnRoZW4oZ3JvdXBzID0+IHRoaXMuZ3JvdXBzID0gZ3JvdXBzKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZ2V0R3JvdXBzKCk7XG5cdH1cblxuXHRvblNlbGVjdChncm91cDogR3JvdXApIHsgdGhpcy5zZWxlY3RlZEdyb3VwID0gZ3JvdXA7IH1cblxuXHRnb3RvRGV0YWlsKCkge1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnR3JvdXBEZXRhaWwnLCB7IGlkOiB0aGlzLnNlbGVjdGVkR3JvdXAuaWQgfV0pO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
