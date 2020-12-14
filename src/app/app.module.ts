import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AdminComponent } from './components/admin/admin.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { URLIntercepter } from './services/url.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: URLIntercepter, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
