import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule, QuicklinkModule],
  exports: [],
})
export class HomeModule {}
