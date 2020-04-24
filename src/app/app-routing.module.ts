import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserDetailsPath, UsersListPath} from './constants';
import { PreloadAllModules } from '@angular/router';

const MainPagePath = UsersListPath;

const routes: Routes = [
  {
    path: '',
    redirectTo: MainPagePath,
    pathMatch: 'full'
  },
  {
    path: UsersListPath,
    loadChildren: () => import('./users-list').then(m => m.UsersListModule),
  },
  {
    path: UserDetailsPath + '/:id',
    loadChildren: () => import('./user-details').then(m => m.UserDetailsModule),
  },
  {
    path: '**',
    redirectTo: MainPagePath
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
