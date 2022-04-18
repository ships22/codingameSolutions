import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { VoterComponent } from './display/voter/voter.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
