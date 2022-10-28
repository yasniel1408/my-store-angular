import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, SharedModule, UsersRoutingModule],
})
export class UserModule {}
