import { NgModule } from '@angular/core';

import { markdownRoutingModule } from './markdown.routing.module';
import { markdownComponent } from './markdown.component';
import { EditModule } from '../../components/edit.module';

@NgModule({
  imports: [
    markdownRoutingModule,
    EditModule,
  ],
  exports: [
  ],
  declarations: [
    markdownComponent,
  ],
})
export class markdownModule {
}
