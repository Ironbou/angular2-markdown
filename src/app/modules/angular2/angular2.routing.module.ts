import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Angular2Component } from './angular2.component';

const routes: Routes = [
  { path: '', component: Angular2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Angular2RoutingModule { }