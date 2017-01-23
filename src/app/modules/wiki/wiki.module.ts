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

export module LayoutEngine {

    export enum DocumentFormat {
        Bold = 0,
        Italic = 1,
        Strikethrough = 2
    };

    export class DocHeader {

        public format : DocumentFormat;
    }
}