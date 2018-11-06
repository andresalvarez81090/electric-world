System.register(['../templates/mock-messages', '@angular/core'], function(exports_1, context_1) {
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
    var mock_messages_1, core_1;
    var MessageService;
    return {
        setters:[
            function (mock_messages_1_1) {
                mock_messages_1 = mock_messages_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MessageService = (function () {
                function MessageService() {
                }
                MessageService.prototype.getMessages = function () {
                    return Promise.resolve(mock_messages_1.MESSAGES);
                };
                MessageService.prototype.getMessage = function (id) {
                    return Promise.resolve(mock_messages_1.MESSAGES).then(function (messages) { return messages.filter(function (message) { return message.id === id; })[0]; });
                };
                MessageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MessageService);
                return MessageService;
            }());
            exports_1("MessageService", MessageService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQVVBLENBQUM7Z0JBVEMsb0NBQVcsR0FBWDtvQkFDRSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx3QkFBUSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsbUNBQVUsR0FBVixVQUFXLEVBQVU7b0JBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHdCQUFRLENBQUMsQ0FBQyxJQUFJLENBQ25DLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWhELENBQWdELENBQzdELENBQUM7Z0JBQ0osQ0FBQztnQkFWSDtvQkFBQyxpQkFBVSxFQUFFOztrQ0FBQTtnQkFXYixxQkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQsMkNBVUMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNRVNTQUdFUyB9IGZyb20gJy4uL3RlbXBsYXRlcy9tb2NrLW1lc3NhZ2VzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcbiAgZ2V0TWVzc2FnZXMoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShNRVNTQUdFUyk7XG4gIH1cblxuICBnZXRNZXNzYWdlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKE1FU1NBR0VTKS50aGVuKFxuICAgICAgbWVzc2FnZXMgPT4gbWVzc2FnZXMuZmlsdGVyKG1lc3NhZ2UgPT4gbWVzc2FnZS5pZCA9PT0gaWQpWzBdXG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
