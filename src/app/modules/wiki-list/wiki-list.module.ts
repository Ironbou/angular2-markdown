import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WikiListComponent } from './wiki-list.component';
import { WikiListRoutingModule } from './wiki-list.routing.module';
import { WikiListService } from './index'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    WikiListRoutingModule,
  ],
  exports: [
    WikiListComponent
  ],
  declarations: [
    WikiListComponent
  ],
  providers: [
    WikiListService,
  ],
})

export class WikiListModule { }