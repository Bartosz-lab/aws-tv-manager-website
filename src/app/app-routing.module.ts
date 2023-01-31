import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TvListComponent } from './tv-list/tv-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/tvs', pathMatch: 'full' },
  { path: 'tvs', component: TvListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user-add', component: UserAddComponent },
  { path: 'tv/:id', component: TvDetailComponent },
  { path: 'user/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
