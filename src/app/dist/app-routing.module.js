"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var kendo_component_1 = require("./kendo/kendo.component");
var filter_component_1 = require("./filter/filter.component");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var check_box_component_1 = require("./check-box/check-box.component");
var form_component_1 = require("./form/form.component");
var routes = [
    { path: ' ', redirectTo: '/app-component', pathMatch: 'full' },
    { path: 'kendo', component: kendo_component_1.KendoComponent },
    { path: 'filter', component: filter_component_1.FilterComponent },
    { path: 'grid', component: kendo_angular_grid_1.GridComponent },
    { path: 'check-box', component: check_box_component_1.CheckBoxComponent },
    { path: 'form', component: form_component_1.FormComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
