import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserDetailsComponent} from './user-details';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '**',
        component: UserDetailsComponent,
      }
    ]),
  ]
})
export class UserDetailsModule { }
