import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {accueilComponent} from './accueil.component';

const routes: Routes = [
//  { path: '', redirectTo: '/', pathMatch: 'full' },
//	{ path: "**", redirectTo: "", pathMatch: "full" }
  { path: '', component:accueilComponent },
  { path: 'angular2', loadChildren: './modules/angular2/angular2.module#angular2Module' },
  { path: 'markdown', loadChildren: './modules/markdown/markdown.module#markdownModule' },
  { path: 'about', component:accueilComponent },
  { path: '**', component:accueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

