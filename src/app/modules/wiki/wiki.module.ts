import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WikiComponent } from './wiki.component';
import { WikiRoutingModule } from './wiki.routing.module';
import { EditModule } from '../../components/edit.module';
import { Autosize } from './wiki.autosize';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WikiRoutingModule,
    EditModule,
  ],
  exports: [
  ],
  declarations: [
    Autosize,
    WikiComponent
  ],
  providers: [],
})

export class WikiModule { }
