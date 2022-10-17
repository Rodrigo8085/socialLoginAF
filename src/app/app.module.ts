import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonAlertModule } from "@rodrigo8085/button-alert";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
