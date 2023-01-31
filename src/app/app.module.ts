import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvListComponent } from './tv-list/tv-list.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserAddComponent } from './user-add/user-add.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { LocationAddComponent } from './location-add/location-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TvListComponent,
    TvDetailComponent,
    UserListComponent,
    UserDetailComponent,
    UserFormComponent,
    UserAddComponent,
    LocationListComponent,
    LocationDetailComponent,
    LocationFormComponent,
    LocationAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
