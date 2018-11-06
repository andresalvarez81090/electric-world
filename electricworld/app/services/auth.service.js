System.register(['@angular/core', '@angular/http', './action.service'], function(exports_1, context_1) {
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
    var core_1, http_1, action_service_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (action_service_1_1) {
                action_service_1 = action_service_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(http, actionService) {
                    this.http = http;
                    this.actionService = actionService;
                }
                AuthService.prototype.signUpUser = function (email, username, password) {
                    var postData = { email: email, username: username, password: password };
                    console.log(postData);
                    var body = JSON.stringify(postData);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post('http://localhost:8080/auth/signup', body, options)
                        .toPromise();
                };
                AuthService.prototype.loginUser = function (email, password) {
                    var postData = { email: email, password: password };
                    var body = JSON.stringify(postData);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post('http://localhost:8080/auth', body, options)
                        .toPromise();
                };
                AuthService.prototype.logoutUser = function () {
                    this.actionService.removeUser();
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, action_service_1.ActionService])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUVJLHFCQUNZLElBQVUsRUFDVixhQUE0QjtvQkFENUIsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFDVixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtnQkFDdEMsQ0FBQztnQkFFSSxnQ0FBVSxHQUFqQixVQUFrQixLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVE7b0JBRXZDLElBQUksUUFBUSxHQUFHLEVBQUMsT0FBQSxLQUFLLEVBQUUsVUFBQSxRQUFRLEVBQUUsVUFBQSxRQUFRLEVBQUMsQ0FBQztvQkFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFFckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFcEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO29CQUVoRSxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7eUJBQzdELFNBQVMsRUFBRSxDQUFDO2dCQUU1QixDQUFDO2dCQUVNLCtCQUFTLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxRQUFRO29CQUU1QixJQUFJLFFBQVEsR0FBRyxFQUFDLE9BQUEsS0FBSyxFQUFFLFVBQUEsUUFBUSxFQUFDLENBQUM7b0JBRWpDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBRXBDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztvQkFFaEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBRXZELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO3lCQUM3RCxTQUFTLEVBQUUsQ0FBQztnQkFFckIsQ0FBQztnQkFFTSxnQ0FBVSxHQUFqQjtvQkFFSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dCQUVuQyxDQUFDO2dCQTVDTDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkE4Q2Isa0JBQUM7WUFBRCxDQTdDQSxBQTZDQyxJQUFBO1lBN0NELHFDQTZDQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2F1dGguc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7QWN0aW9uU2VydmljZX0gZnJvbSAnLi9hY3Rpb24uc2VydmljZSc7XG5cbmRlY2xhcmUgbGV0IF86IGFueTtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgICAgIHByaXZhdGUgYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZVxuICAgICl7fVxuXG4gICAgcHVibGljIHNpZ25VcFVzZXIoZW1haWwsIHVzZXJuYW1lLCBwYXNzd29yZCl7XG5cbiAgICAgICAgbGV0IHBvc3REYXRhID0ge2VtYWlsLCB1c2VybmFtZSwgcGFzc3dvcmR9O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3REYXRhKVxuXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpO1xuXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9zaWdudXAnLCBib2R5LCBvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBsb2dpblVzZXIoZW1haWwsIHBhc3N3b3JkKXtcblxuICAgICAgICBsZXQgcG9zdERhdGEgPSB7ZW1haWwsIHBhc3N3b3JkfTtcblxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKTtcblxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgnLCBib2R5LCBvcHRpb25zKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dFVzZXIoKXtcblxuICAgICAgICB0aGlzLmFjdGlvblNlcnZpY2UucmVtb3ZlVXNlcigpXG5cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
