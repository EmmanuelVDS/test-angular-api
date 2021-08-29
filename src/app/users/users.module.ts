import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UsersComponent} from "./users/users.component";
import {FormsModule} from "@angular/forms";
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
