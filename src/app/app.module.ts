import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { accueilComponent } from './accueil.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    accueilComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }