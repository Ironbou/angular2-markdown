import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Angular2Component } from './angular2.component';
import { Angular2RoutingModule } from './angular2.routing.module';
import { EditModule } from '../../components/edit.module';
import { Autosize } from './angular2.autosize';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Angular2RoutingModule,
    EditModule,
  ],
  exports: [
  ],
  declarations: [
    Autosize,
    Angular2Component
  ],
  providers: [],
})

export class angular2Module { }
