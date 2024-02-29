import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';
import { KendoComponent } from './kendo/kendo.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { FilterComponent } from './filter/filter.component';
import { GridComponent } from './grid/grid.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { FormComponent } from './form/form.component'

@NgModule({
  declarations: [
    AppComponent,
    KendoComponent,
    FilterComponent,
    GridComponent,
    CheckBoxComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    ButtonsModule,
    InputsModule,
    FormsModule,
    TreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
