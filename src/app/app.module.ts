import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Grid12Component } from './grid12/grid12.component';
import { UiSlackComponent } from './ui-slack/ui-slack.component';

@NgModule({
  declarations: [AppComponent, Grid12Component, UiSlackComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
