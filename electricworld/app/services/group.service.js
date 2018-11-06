System.register(['../templates/mock-groups', '@angular/core'], function(exports_1, context_1) {
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
    var mock_groups_1, core_1;
    var GroupService;
    return {
        setters:[
            function (mock_groups_1_1) {
                mock_groups_1 = mock_groups_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GroupService = (function () {
                function GroupService() {
                }
                GroupService.prototype.getGroups = function () {
                    return Promise.resolve(mock_groups_1.GROUPS);
                };
                GroupService.prototype.getGroup = function (id) {
                    return Promise.resolve(mock_groups_1.GROUPS).then(function (groups) { return groups.filter(function (group) { return group.id === id; })[0]; });
                };
                GroupService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GroupService);
                return GroupService;
            }());
            exports_1("GroupService", GroupService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2dyb3VwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQTtnQkFVQSxDQUFDO2dCQVRDLGdDQUFTLEdBQVQ7b0JBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVELCtCQUFRLEdBQVIsVUFBUyxFQUFVO29CQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDLENBQUMsSUFBSSxDQUNqQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBMUMsQ0FBMEMsQ0FDckQsQ0FBQztnQkFDSixDQUFDO2dCQVZIO29CQUFDLGlCQUFVLEVBQUU7O2dDQUFBO2dCQVdiLG1CQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCx1Q0FVQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2dyb3VwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IEdST1VQUyB9IGZyb20gJy4uL3RlbXBsYXRlcy9tb2NrLWdyb3Vwcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcm91cFNlcnZpY2Uge1xuICBnZXRHcm91cHMoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShHUk9VUFMpO1xuICB9XG5cbiAgZ2V0R3JvdXAoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoR1JPVVBTKS50aGVuKFxuICAgICAgZ3JvdXBzID0+IGdyb3Vwcy5maWx0ZXIoZ3JvdXAgPT4gZ3JvdXAuaWQgPT09IGlkKVswXVxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
