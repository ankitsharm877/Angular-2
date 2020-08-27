import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductService } from './product.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
