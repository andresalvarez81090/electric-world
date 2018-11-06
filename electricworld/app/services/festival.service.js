System.register(['../templates/mock-festivals', '@angular/core'], function(exports_1, context_1) {
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
    var mock_festivals_1, core_1;
    var FestivalService;
    return {
        setters:[
            function (mock_festivals_1_1) {
                mock_festivals_1 = mock_festivals_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FestivalService = (function () {
                function FestivalService() {
                }
                FestivalService.prototype.getFestivals = function () {
                    return Promise.resolve(mock_festivals_1.FESTIVALS);
                };
                FestivalService.prototype.getFestival = function (id) {
                    return Promise.resolve(mock_festivals_1.FESTIVALS).then(function (festivals) { return festivals.filter(function (festival) { return festival.id === id; })[0]; });
                };
                FestivalService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FestivalService);
                return FestivalService;
            }());
            exports_1("FestivalService", FestivalService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zlc3RpdmFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQTtnQkFVQSxDQUFDO2dCQVRDLHNDQUFZLEdBQVo7b0JBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsMEJBQVMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELHFDQUFXLEdBQVgsVUFBWSxFQUFVO29CQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQywwQkFBUyxDQUFDLENBQUMsSUFBSSxDQUNwQyxVQUFBLFNBQVMsSUFBSSxPQUFBLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFuRCxDQUFtRCxDQUNqRSxDQUFDO2dCQUNKLENBQUM7Z0JBVkg7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBV2Isc0JBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELDZDQVVDLENBQUEiLCJmaWxlIjoic2VydmljZXMvZmVzdGl2YWwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZlc3RpdmFsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9mZXN0aXZhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRkVTVElWQUxTIH0gZnJvbSAnLi4vdGVtcGxhdGVzL21vY2stZmVzdGl2YWxzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZlc3RpdmFsU2VydmljZSB7XG4gIGdldEZlc3RpdmFscygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEZFU1RJVkFMUyk7XG4gIH1cblxuICBnZXRGZXN0aXZhbChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShGRVNUSVZBTFMpLnRoZW4oXG4gICAgICBmZXN0aXZhbHMgPT4gZmVzdGl2YWxzLmZpbHRlcihmZXN0aXZhbCA9PiBmZXN0aXZhbC5pZCA9PT0gaWQpWzBdXG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
