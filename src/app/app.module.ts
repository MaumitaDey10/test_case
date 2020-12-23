import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookMasterComponent } from './book-master/book-master.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NewMasterComponent } from './new-master/new-master.component';

@NgModule({
  declarations: [
    AppComponent,
    BookMasterComponent,
    BookDetailComponent,
    NewMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
