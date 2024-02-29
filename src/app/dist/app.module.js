"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var animations_1 = require("@angular/platform-browser/animations");
var kendo_angular_buttons_1 = require("@progress/kendo-angular-buttons");
var kendo_angular_inputs_1 = require("@progress/kendo-angular-inputs");
var forms_1 = require("@angular/forms");
var kendo_component_1 = require("./kendo/kendo.component");
var kendo_angular_treeview_1 = require("@progress/kendo-angular-treeview");
var filter_component_1 = require("./filter/filter.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                kendo_component_1.KendoComponent,
                filter_component_1.FilterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                kendo_angular_grid_1.GridModule,
                animations_1.BrowserAnimationsModule,
                kendo_angular_buttons_1.ButtonsModule,
                kendo_angular_inputs_1.InputsModule,
                forms_1.FormsModule,
                kendo_angular_treeview_1.TreeViewModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
