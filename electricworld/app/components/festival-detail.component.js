System.register(['@angular/core', '@angular/router-deprecated', '../services/festival.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, festival_service_1;
    var FestivalDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (festival_service_1_1) {
                festival_service_1 = festival_service_1_1;
            }],
        execute: function() {
            FestivalDetailComponent = (function () {
                function FestivalDetailComponent(festivalService, routeParams) {
                    this.festivalService = festivalService;
                    this.routeParams = routeParams;
                }
                FestivalDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this.routeParams.get('id');
                    this.festivalService.getFestival(id.toString())
                        .then(function (festival) { return _this.festival = festival; });
                };
                FestivalDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                FestivalDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/templates/festival-detail.html',
                    }), 
                    __metadata('design:paramtypes', [festival_service_1.FestivalService, router_deprecated_1.RouteParams])
                ], FestivalDetailComponent);
                return FestivalDetailComponent;
            }());
            exports_1("FestivalDetailComponent", FestivalDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmVzdGl2YWwtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUdFLGlDQUNVLGVBQWdDLEVBQ2hDLFdBQXdCO29CQUR4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7b0JBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO2dCQUNsQyxDQUFDO2dCQUVELDBDQUFRLEdBQVI7b0JBQUEsaUJBSUM7b0JBSEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO3lCQUM1QyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVELHdDQUFNLEdBQU47b0JBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFuQkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxXQUFXLEVBQUUsb0NBQW9DO3FCQUNsRCxDQUFDOzsyQ0FBQTtnQkFrQkYsOEJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELDZEQWlCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZmVzdGl2YWwtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZVBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcblxuaW1wb3J0IHsgRmVzdGl2YWwgfSBmcm9tICcuL2Zlc3RpdmFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZXN0aXZhbFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mZXN0aXZhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnYXBwL3RlbXBsYXRlcy9mZXN0aXZhbC1kZXRhaWwuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEZlc3RpdmFsRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZmVzdGl2YWw6IEZlc3RpdmFsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmVzdGl2YWxTZXJ2aWNlOiBGZXN0aXZhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBpZCA9ICt0aGlzLnJvdXRlUGFyYW1zLmdldCgnaWQnKTtcbiAgICB0aGlzLmZlc3RpdmFsU2VydmljZS5nZXRGZXN0aXZhbChpZC50b1N0cmluZygpKVxuICAgICAgLnRoZW4oZmVzdGl2YWwgPT4gdGhpcy5mZXN0aXZhbCA9IGZlc3RpdmFsKTtcbiAgfVxuXG4gIGdvQmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
