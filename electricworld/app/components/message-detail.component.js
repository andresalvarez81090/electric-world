System.register(['@angular/core', '@angular/router-deprecated', '../services/message.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, message_service_1;
    var MessageDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
            }],
        execute: function() {
            MessageDetailComponent = (function () {
                function MessageDetailComponent(messageService, routeParams) {
                    this.messageService = messageService;
                    this.routeParams = routeParams;
                }
                MessageDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this.routeParams.get('id');
                    this.messageService.getMessage(id.toString())
                        .then(function (message) { return _this.message = message; });
                };
                MessageDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                MessageDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/templates/message-detail.html',
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof message_service_1.MessageService !== 'undefined' && message_service_1.MessageService) === 'function' && _a) || Object, router_deprecated_1.RouteParams])
                ], MessageDetailComponent);
                return MessageDetailComponent;
                var _a;
            }());
            exports_1("MessageDetailComponent", MessageDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVzc2FnZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBR0UsZ0NBQ1UsY0FBOEIsRUFDOUIsV0FBd0I7b0JBRHhCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7Z0JBQ2xDLENBQUM7Z0JBRUQseUNBQVEsR0FBUjtvQkFBQSxpQkFJQztvQkFIQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7eUJBQzFDLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBRUQsdUNBQU0sR0FBTjtvQkFDRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4QixDQUFDO2dCQXBCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFdBQVcsRUFBRSxtQ0FBbUM7cUJBQ2pELENBQUM7OzBDQUFBO2dCQW1CRiw2QkFBQzs7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELDJEQWlCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbWVzc2FnZS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ2FwcC90ZW1wbGF0ZXMvbWVzc2FnZS1kZXRhaWwuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1lc3NhZ2U6IE1lc3NhZ2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBpZCA9ICt0aGlzLnJvdXRlUGFyYW1zLmdldCgnaWQnKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2UoaWQudG9TdHJpbmcoKSlcbiAgICAgIC50aGVuKG1lc3NhZ2UgPT4gdGhpcy5tZXNzYWdlID0gbWVzc2FnZSk7XG4gIH1cblxuICBnb0JhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
