import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatPaginatorModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '**',
        component: UsersListComponent
      }
    ])
  ],
})
export class UsersListModule { }
