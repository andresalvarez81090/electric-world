System.register(['@angular/core', '@angular/router-deprecated', './festival-detail.component', '../services/festival.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, festival_detail_component_1, festival_service_1;
    var FestivalsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (festival_detail_component_1_1) {
                festival_detail_component_1 = festival_detail_component_1_1;
            },
            function (festival_service_1_1) {
                festival_service_1 = festival_service_1_1;
            }],
        execute: function() {
            FestivalsComponent = (function () {
                function FestivalsComponent(router, festivalService) {
                    this.router = router;
                    this.festivalService = festivalService;
                }
                FestivalsComponent.prototype.getFestivals = function () {
                    var _this = this;
                    this.festivalService.getFestivals().then(function (festivals) { return _this.festivals = festivals; });
                };
                FestivalsComponent.prototype.ngOnInit = function () {
                    this.getFestivals();
                };
                FestivalsComponent.prototype.onSelect = function (festival) { this.selectedFestival = festival; };
                FestivalsComponent.prototype.gotoDetail = function () {
                    this.router.navigate(['FestivalDetail', { id: this.selectedFestival.id }]);
                };
                FestivalsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/templates/festivals.html',
                        directives: [festival_detail_component_1.FestivalDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, festival_service_1.FestivalService])
                ], FestivalsComponent);
                return FestivalsComponent;
            }());
            exports_1("FestivalsComponent", FestivalsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmVzdGl2YWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUlDLDRCQUNTLE1BQWMsRUFDZCxlQUFnQztvQkFEaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7Z0JBQUcsQ0FBQztnQkFFN0MseUNBQVksR0FBWjtvQkFBQSxpQkFFQztvQkFEQSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUExQixDQUEwQixDQUFDLENBQUM7Z0JBQ25GLENBQUM7Z0JBRUQscUNBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRUQscUNBQVEsR0FBUixVQUFTLFFBQWtCLElBQUksSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBRWxFLHVDQUFVLEdBQVY7b0JBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1RSxDQUFDO2dCQXpCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFdBQVcsRUFBRSw4QkFBOEI7d0JBQzNDLFVBQVUsRUFBRSxDQUFDLG1EQUF1QixDQUFDO3FCQUNyQyxDQUFDOztzQ0FBQTtnQkF1QkYseUJBQUM7WUFBRCxDQXJCQSxBQXFCQyxJQUFBO1lBckJELG1EQXFCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZmVzdGl2YWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5cbmltcG9ydCB7IEZlc3RpdmFsIH0gZnJvbSAnLi9mZXN0aXZhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmVzdGl2YWxEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2Zlc3RpdmFsLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmVzdGl2YWxTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmVzdGl2YWwuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlVXJsOiAnYXBwL3RlbXBsYXRlcy9mZXN0aXZhbHMuaHRtbCcsXG5cdGRpcmVjdGl2ZXM6IFtGZXN0aXZhbERldGFpbENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBGZXN0aXZhbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRmZXN0aXZhbHM6IEZlc3RpdmFsW107XG5cdHNlbGVjdGVkRmVzdGl2YWw6IEZlc3RpdmFsO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBmZXN0aXZhbFNlcnZpY2U6IEZlc3RpdmFsU2VydmljZSkge31cblxuXHRnZXRGZXN0aXZhbHMoKSB7XG5cdFx0dGhpcy5mZXN0aXZhbFNlcnZpY2UuZ2V0RmVzdGl2YWxzKCkudGhlbihmZXN0aXZhbHMgPT4gdGhpcy5mZXN0aXZhbHMgPSBmZXN0aXZhbHMpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5nZXRGZXN0aXZhbHMoKTtcblx0fVxuXG5cdG9uU2VsZWN0KGZlc3RpdmFsOiBGZXN0aXZhbCkgeyB0aGlzLnNlbGVjdGVkRmVzdGl2YWwgPSBmZXN0aXZhbDsgfVxuXG5cdGdvdG9EZXRhaWwoKSB7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydGZXN0aXZhbERldGFpbCcsIHsgaWQ6IHRoaXMuc2VsZWN0ZWRGZXN0aXZhbC5pZCB9XSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
