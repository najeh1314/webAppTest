import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponHomeComponent } from './compon-home/compon-home.component';
import { ComponProductsComponent } from './compon-products/compon-products.component';
import { ComponServicesComponent } from './compon-services/compon-services.component';
import { ComponContactComponent } from './compon-contact/compon-contact.component';
import { Product } from './product/product';
import { LogInComponent } from './log-in/log-in.component';
import { HttpClientModule } from '@angular/common/http';
import { UserHelloComponent } from './user-hello/user-hello.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponHomeComponent,
    ComponProductsComponent,
    ComponServicesComponent,
    ComponContactComponent,
    Product,
    LogInComponent,
    UserHelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
