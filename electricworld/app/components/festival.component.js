System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var Festival;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Festival = (function () {
                function Festival(id, name, city, country, url, catagory, startAt) {
                    this.id = id;
                    this.name = name;
                    this.location = { city: city, country: country };
                    this.image = { url: url };
                    this.catagory = catagory;
                    this.startAt = new Date(startAt);
                }
                Festival = __decorate([
                    core_1.Component({}), 
                    __metadata('design:paramtypes', [String, String, String, String, String, String, String])
                ], Festival);
                return Festival;
            }());
            exports_1("Festival", Festival);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmVzdGl2YWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBU0Msa0JBQWEsRUFBVSxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsT0FBZSxFQUFFLEdBQVcsRUFBRSxRQUFnQixFQUFFLE9BQWU7b0JBQ25ILElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO29CQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQXBCRjtvQkFBQyxnQkFBUyxDQUFDLEVBRVYsQ0FBQzs7NEJBQUE7Z0JBb0JGLGVBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELCtCQWtCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZmVzdGl2YWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgSW1hZ2Uge1xuXHR1cmw6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIExvY2F0aW9uIHtcblx0Y2l0eTogc3RyaW5nO1xuXHRjb3VudHJ5OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuXG59KVxuXG5leHBvcnQgY2xhc3MgRmVzdGl2YWwge1xuXHRpZDogc3RyaW5nO1xuICBcdG5hbWU6IHN0cmluZztcbiAgXHRsb2NhdGlvbjogTG9jYXRpb247XG4gIFx0aW1hZ2U6IEltYWdlO1xuICBcdGNhdGFnb3J5OiBzdHJpbmc7XG4gIFx0c3RhcnRBdDogRGF0ZTtcblxuXG5cdGNvbnN0cnVjdG9yIChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGNpdHk6IHN0cmluZywgY291bnRyeTogc3RyaW5nLCB1cmw6IHN0cmluZywgY2F0YWdvcnk6IHN0cmluZywgc3RhcnRBdDogc3RyaW5nKXtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmxvY2F0aW9uID0ge2NpdHk6IGNpdHksIGNvdW50cnk6IGNvdW50cnl9O1xuXHRcdHRoaXMuaW1hZ2UgPSB7dXJsOiB1cmx9O1xuXHRcdHRoaXMuY2F0YWdvcnkgPSBjYXRhZ29yeTtcblx0XHR0aGlzLnN0YXJ0QXQgPSBuZXcgRGF0ZShzdGFydEF0KTtcblx0fVxuXHRcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
