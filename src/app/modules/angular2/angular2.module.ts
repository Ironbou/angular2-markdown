import { NgModule } from '@angular/core';

import { angular2Component } from './angular2.component';
import { angular2RoutingModule } from './angular2.routing.module';
import { EditModule } from '../../components/edit.module';

@NgModule({
  imports: [
    angular2RoutingModule,
    EditModule,
  ],
  exports: [
  ],
  declarations: [
    angular2Component,
  ],
  providers: [],
})

export class angular2Module {
}
