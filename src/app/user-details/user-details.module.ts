import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserDetailsComponent} from './user-details';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: UserDetailsComponent,
        data: {
          shouldDetach: true,
        }
      }
    ]),
  ]
})
export class UserDetailsModule { }
