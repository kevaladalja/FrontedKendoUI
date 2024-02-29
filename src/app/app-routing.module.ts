import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KendoComponent } from './kendo/kendo.component';
import { FilterComponent } from './filter/filter.component';
import { GridComponent } from '@progress/kendo-angular-grid';
import { CheckBoxComponent } from './check-box/check-box.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: ' ', redirectTo:'/app-component', pathMatch: 'full'},
  { path: 'kendo', component: KendoComponent},
  { path: 'filter', component: FilterComponent},
  { path: 'grid', component: GridComponent},
  { path: 'check-box', component: CheckBoxComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
