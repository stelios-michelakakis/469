import { MobileComponent } from './pages/mobile/mobile.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import {FormsModule} from '@angular/forms';
import { EnternameComponent } from './pages/mobile/create/entername/entername.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobileComponent,
    routingComponents,
    EnternameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
