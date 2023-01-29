import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvListComponent } from './tv-list/tv-list.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TvListComponent,
    TvDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
