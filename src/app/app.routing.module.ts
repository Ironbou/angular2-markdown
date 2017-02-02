import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
//  { path: '', redirectTo: '/', pathMatch: 'full' },
//	{ path: "**", redirectTo: "", pathMatch: "full" }
  { path: '', component:HomeComponent },
  { path: 'wiki', loadChildren: './modules/wiki/wiki.module#WikiModule' },
  { path: 'wiki-list', loadChildren: './modules/wiki-list/wiki-list.module#WikiListModule' },
  { path: 'markdown', loadChildren: './modules/markdown/markdown.module#markdownModule' },
  { path: 'about', component:HomeComponent },
  { path: '**', component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

