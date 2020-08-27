import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// after angular.json is called from where main.ts is load
// then from there app.module.ts(AppModule) file will be load
@NgModule({
  // declarations is used to declare all components, custom directives and custom pipes 
  declarations: [
    AppComponent
  ],
  //import is used to include all support module and custom module
  imports: [
    BrowserModule
  ],
  //provide is used to inject all services required by components, directives and pipes.
  providers: [],
  //bootstrap is used to tell the starting component of angular application
  bootstrap: [AppComponent]
})
export class AppModule { }
