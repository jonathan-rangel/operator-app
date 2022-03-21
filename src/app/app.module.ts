import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { SubComponent } from './sub/sub.component';
import { MulComponent } from './mul/mul.component';
import { DivComponent } from './div/div.component';
import { DisplayNumberComponent } from './display-number/display-number.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SubComponent,
    MulComponent,
    DivComponent,
    DisplayNumberComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
