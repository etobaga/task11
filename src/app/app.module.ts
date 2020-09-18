import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AddCommand} from '@angular/cli/commands/add-impl';
import {AddComponent} from './add/add.component';
import {ListComponent} from './list/list.component';
import {LayoutComponent} from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddComponent,
    ListComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
