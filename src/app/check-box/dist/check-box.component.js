"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CheckBoxComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CheckBoxComponent = /** @class */ (function () {
    function CheckBoxComponent() {
        this.checkedKeys = ["1"];
        this.enableCheck = true;
        this.checkChildren = true;
        this.checkDisabledChildren = false;
        this.checkParents = true;
        this.checkOnClick = false;
        this.checkMode = "multiple";
        this.selectionMode = "single";
        this.data = [
            {
                text: "Furniture",
                items: [
                    { text: "Tables & Chairs" },
                    { text: "Sofas" },
                    {
                        text: "Occasional Furniture",
                        items: [
                            {
                                text: "Decor",
                                items: [{ text: "Bed Linen" }, { text: "Curtains & Blinds" }]
                            },
                        ]
                    },
                ]
            },
            { text: "Decor" },
            { text: "Outdoors" },
        ];
        this.children = function (dataItem) { return rxjs_1.of(dataItem.items); };
        this.hasChildren = function (dataItem) { return !!dataItem.items; };
    }
    Object.defineProperty(CheckBoxComponent.prototype, "checkableSettings", {
        get: function () {
            return {
                checkChildren: this.checkChildren,
                checkDisabledChildren: this.checkDisabledChildren,
                checkParents: this.checkParents,
                enabled: this.enableCheck,
                mode: this.checkMode,
                checkOnClick: this.checkOnClick
            };
        },
        enumerable: false,
        configurable: true
    });
    CheckBoxComponent = __decorate([
        core_1.Component({
            selector: 'app-check-box',
            templateUrl: './check-box.component.html',
            styleUrls: ['./check-box.component.css']
        })
    ], CheckBoxComponent);
    return CheckBoxComponent;
}());
exports.CheckBoxComponent = CheckBoxComponent;
