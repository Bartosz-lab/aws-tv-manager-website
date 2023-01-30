import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TvListComponent } from './tv-list/tv-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/tvs', pathMatch: 'full' },
  { path: 'tvs', component: TvListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'tv/:id', component: TvDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
