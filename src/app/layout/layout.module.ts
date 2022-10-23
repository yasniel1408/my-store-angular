import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, PublicLayoutComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [NavbarComponent],
})
export class LayoutModule {}
