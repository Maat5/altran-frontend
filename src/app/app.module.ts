import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// config settings
import { Config } from './app.config';
import { _Config } from './config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    { provide: Config, useValue: _Config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
