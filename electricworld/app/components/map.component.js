System.register(['@angular/core', '../services/state.service'], function(exports_1, context_1) {
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
    var core_1, state_service_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (state_service_1_1) {
                state_service_1 = state_service_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent(_StateService) {
                    this._StateService = _StateService;
                }
                MapComponent.prototype.ngAfterViewInit = function () {
                    // set up the map
                    this.map = new L.map('map-container');
                    // create the tile layer with correct attribution
                    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
                    var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
                    var osm = new L.TileLayer(osmUrl, { minZoom: 8, maxZoom: 12, attribution: osmAttrib });
                    // start the map in South-East England
                    this.map.setView(new L.LatLng(51.3, 0.7), 9);
                    this.map.addLayer(osm);
                };
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'map',
                        templateUrl: 'app/templates/map.html'
                    }), 
                    __metadata('design:paramtypes', [state_service_1.StateService])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUlJLHNCQUFvQixhQUEyQjtvQkFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7Z0JBRS9DLENBQUM7Z0JBRUQsc0NBQWUsR0FBZjtvQkFFSSxpQkFBaUI7b0JBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUV0QyxpREFBaUQ7b0JBQ2pELElBQUksTUFBTSxHQUFDLG1EQUFtRCxDQUFDO29CQUMvRCxJQUFJLFNBQVMsR0FBQyw4RUFBOEUsQ0FBQztvQkFDN0YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztvQkFFckYsc0NBQXNDO29CQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFM0IsQ0FBQztnQkEzQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsS0FBSzt3QkFDZixXQUFXLEVBQUUsd0JBQXdCO3FCQUN4QyxDQUFDOztnQ0FBQTtnQkEwQkYsbUJBQUM7WUFBRCxDQXhCQSxBQXdCQyxJQUFBO1lBeEJELHVDQXdCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3RhdGVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9zdGF0ZS5zZXJ2aWNlJztcblxuXG5kZWNsYXJlIGxldCBMOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWFwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC90ZW1wbGF0ZXMvbWFwLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgIEFmdGVyVmlld0luaXQge1xuICAgIFxuICAgIG1hcDogYW55O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX1N0YXRlU2VydmljZTogU3RhdGVTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICAgICAgICAvLyBzZXQgdXAgdGhlIG1hcFxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBMLm1hcCgnbWFwLWNvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIHRoZSB0aWxlIGxheWVyIHdpdGggY29ycmVjdCBhdHRyaWJ1dGlvblxuICAgICAgICB2YXIgb3NtVXJsPSdodHRwOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJztcbiAgICAgICAgdmFyIG9zbUF0dHJpYj0nTWFwIGRhdGEgwqkgPGEgaHJlZj1cImh0dHA6Ly9vcGVuc3RyZWV0bWFwLm9yZ1wiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycyc7XG4gICAgICAgIHZhciBvc20gPSBuZXcgTC5UaWxlTGF5ZXIob3NtVXJsLCB7bWluWm9vbTogOCwgbWF4Wm9vbTogMTIsIGF0dHJpYnV0aW9uOiBvc21BdHRyaWJ9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIHN0YXJ0IHRoZSBtYXAgaW4gU291dGgtRWFzdCBFbmdsYW5kXG4gICAgICAgIHRoaXMubWFwLnNldFZpZXcobmV3IEwuTGF0TG5nKDUxLjMsIDAuNyksOSk7XG4gICAgICAgIHRoaXMubWFwLmFkZExheWVyKG9zbSk7XG4gICAgICAgIFxuICAgIH1cbiBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
