"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilterComponent = void 0;
var core_1 = require("@angular/core");
var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        this.flatItems = [
            { id: 1, name: "Andrew Fuller", reportsTo: null },
            { id: 2, name: "Nancy Davolio", reportsTo: 1 },
            { id: 3, name: "Janet Leverling", reportsTo: 1 },
            { id: 4, name: "Margaret Peacock", reportsTo: 1 },
            { id: 5, name: "Steven Buchanan", reportsTo: 1 },
            { id: 6, name: "Laura Callahan", reportsTo: 1 },
            { id: 7, name: "Michael Suyama", reportsTo: 5 },
            { id: 8, name: "Robert King", reportsTo: 5 },
            { id: 9, name: "Anne Dodsworth", reportsTo: 5 },
            { id: 10, name: "Michael King", reportsTo: 7 },
            { id: 11, name: "Nige Davolio", reportsTo: 7 },
            { id: 12, name: "Robert Dodsworth", reportsTo: 7 },
            { id: 13, name: "Steven Fuller", reportsTo: null },
            { id: 14, name: "Margaret Davolio", reportsTo: 13 },
            { id: 15, name: "Nige Fuller", reportsTo: 13 },
            { id: 16, name: "Steven Dodsworth", reportsTo: 13 },
            { id: 17, name: "Robert Peacock", reportsTo: 13 },
            { id: 18, name: "Margaret King", reportsTo: 13 },
            { id: 19, name: "Nige Leverling", reportsTo: 15 },
            { id: 20, name: "Nancy White", reportsTo: 15 },
            { id: 21, name: "Robert Callahan", reportsTo: 15 },
            { id: 22, name: "Nige Peacock", reportsTo: 17 },
            { id: 23, name: "Janet Peacock", reportsTo: 17 },
            { id: 24, name: "Anne Callahan", reportsTo: 17 },
        ];
        this.always = function () { return true; };
    }
    FilterComponent = __decorate([
        core_1.Component({
            selector: 'app-filter',
            templateUrl: './filter.component.html',
            styleUrls: ['./filter.component.css']
        })
    ], FilterComponent);
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;
