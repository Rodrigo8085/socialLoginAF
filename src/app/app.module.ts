import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ButtonAlertModule } from "@rodrigo8085/button-alert";
// import { ButtonAlertModule } from "test-libreria/projects/button-alert/src/lib/button-alert.module"
// import { ButtonAlertModule } from "test-libreria/projects/button-alert/src/public-api";
import { ButtonAlertModule } from '@rodrigo8085/button-alert';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonAlertModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
