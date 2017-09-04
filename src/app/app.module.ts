import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//modules
import { AppRoutingModule } from './app-routing.module';
// providers
import { ApiRequestsService } from './api/requests.service';
// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/'
// config settings
import { Config } from './app.config';
import { _Config } from './config';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    { provide: Config, useValue: _Config },
    ApiRequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
