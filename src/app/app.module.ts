import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerFormListComponent } from './customer-form-list/customer-form-list.component';
import { FastapiService } from './services/fastapi.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponentComponent } from './update-component/update-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormListComponent,
    UpdateComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FastapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
