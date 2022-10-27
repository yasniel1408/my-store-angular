import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, LayoutModule, QuicklinkModule],
  providers: [], //Ejecutamos los interceptores
  bootstrap: [AppComponent],
})
export class AppModule {}
