"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GridComponent = void 0;
var core_1 = require("@angular/core");
var GridComponent = /** @class */ (function () {
    function GridComponent() {
        this.gridData = [
            {
                ProductID: 1,
                ProductName: "Chai",
                UnitPrice: 18,
                Category: {
                    CategoryID: 1,
                    CategoryName: "Beverages"
                }
            },
            {
                ProductID: 2,
                ProductName: "Chang",
                UnitPrice: 19,
                Category: {
                    CategoryID: 1,
                    CategoryName: "Beverages"
                }
            },
            {
                ProductID: 3,
                ProductName: "Aniseed Syrup",
                UnitPrice: 10,
                Category: {
                    CategoryID: 2,
                    CategoryName: "Condiments"
                }
            },
        ];
    }
    GridComponent = __decorate([
        core_1.Component({
            selector: 'app-grid',
            templateUrl: './grid.component.html',
            styleUrls: ['./grid.component.css']
        })
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
