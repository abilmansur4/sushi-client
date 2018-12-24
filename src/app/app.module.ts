import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import {ProductsService} from './products/products.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule, NgbModule, HttpClientModule],
  declarations: [ AppComponent, ProductsComponent, OrdersComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductsService]
})
export class AppModule { }


