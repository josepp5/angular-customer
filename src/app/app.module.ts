import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerFormListComponent } from './customer-form-list/customer-form-list.component';
import { FastapiService } from './services/fastapi.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsiveLoginComponent } from './responsive-login/responsive-login.component';
import { NavbarComponent } from './UI/navbar/navbar.component';
import { CreateFormComponentComponent } from './UI/create-form-component/create-form-component.component';
import { CustomerListComponentComponent } from './UI/customer-list-component/customer-list-component.component';
import { DetailComponentComponent } from './UI/detail-component/detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormListComponent,
    UpdateComponentComponent,
    LoginComponentComponent,
    ResponsiveLoginComponent,
    NavbarComponent,
    CreateFormComponentComponent,
    CustomerListComponentComponent,
    DetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [FastapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
