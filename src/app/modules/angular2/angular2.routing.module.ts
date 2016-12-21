import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { angular2Component } from './angular2.component';

const routes: Routes = [
  { path: '', component: angular2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class angular2RoutingModule { }