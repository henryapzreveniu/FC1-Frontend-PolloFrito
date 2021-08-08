import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './shared/component/table/table.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './shared/services/data-service.service';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './shared/component/sign-up/sign-up.component';
import { PaymentComponent } from './shared/component/payment/payment.component';

@NgModule({
  declarations: [AppComponent, TableComponent, SignUpComponent, PaymentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
