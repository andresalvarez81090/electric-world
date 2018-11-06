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
    var StateService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StateService = (function () {
                function StateService() {
                    this.user = false;
                }
                StateService.prototype.isAuthorized = function () {
                    return this.user !== false;
                };
                StateService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], StateService);
                return StateService;
            }());
            exports_1("StateService", StateService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3N0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQTtvQkFFVyxTQUFJLEdBQUcsS0FBSyxDQUFDO2dCQVN4QixDQUFDO2dCQUpHLG1DQUFZLEdBQVo7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDO2dCQUMvQixDQUFDO2dCQVZMO29CQUFDLGlCQUFVLEVBQUU7O2dDQUFBO2dCQVliLG1CQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCx1Q0FXQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3N0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RhdGVTZXJ2aWNlIHtcblxuICAgIHB1YmxpYyB1c2VyID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgY3VycmVudEdyb3VwOiBhbnk7XG5cblxuICAgIGlzQXV0aG9yaXplZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyICE9PSBmYWxzZTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
