import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
// used for forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// used for apicalls
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
 import { customeInterceptor } from './custome.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UseridService } from './userid.service';


 
@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:customeInterceptor,
    multi:true
  },Form1Component,Form2Component,UseridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
