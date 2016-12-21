import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { markdownComponent } from './markdown.component';

const routes: Routes = [
  { path: '', component: markdownComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class markdownRoutingModule { }