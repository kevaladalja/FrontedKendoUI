"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.KendoComponent = void 0;
var core_1 = require("@angular/core");
var KendoComponent = /** @class */ (function () {
    function KendoComponent() {
        this.expandedKeys = ["0", "1"];
        this.checkedKeys = ["0_1"];
        this.data = [
            {
                text: "Furniture",
                items: [
                    { text: "Tables & Chairs" },
                    { text: "Sofas" },
                    { text: "Occasional Furniture" },
                ]
            },
            {
                text: "Decor",
                items: [
                    { text: "Bed Linen" },
                    { text: "Curtains & Blinds" },
                    { text: "Carpets" },
                ]
            },
        ];
    }
    KendoComponent = __decorate([
        core_1.Component({
            selector: 'app-kendo',
            templateUrl: './kendo.component.html',
            styleUrls: ['./kendo.component.css']
        })
    ], KendoComponent);
    return KendoComponent;
}());
exports.KendoComponent = KendoComponent;
