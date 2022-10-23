import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { UserListItemsComponent } from './user-list-items/user-list-items.component';
import { UserService } from './user.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserBoxComponent,
    UserListItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{
    provide: UserService,
    useClass: UserService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
