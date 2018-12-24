import { Component} from '@angular/core';
import { ProductsService } from './products.service';
import {ProductModel} from './productmodel';
import {HttpParams} from '@angular/common/http';
import set = Reflect.set;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent {

  constructor(
    private productsService: ProductsService
  ) { }

  productDetails = new ProductModel();
  currentJustify = 'justified';
  product: any;
  product2: any;

  onSubmitGetProductById(prodId) {
    this.productsService.getProductById(prodId).subscribe((res) => {
      this.product = res;
    });
  }

  onSubmitGetProductById2(prodId) {
    this.productsService.getProductById(prodId).subscribe((res) => {
      this.product2 = res;
    });
  }

  onSubmitUpdateProductById(productId, productName, productCategory, productPrice, productWeight, productAmount, productDescription){
    this.productDetails.productName = productName;
    this.productDetails.productCategory = productCategory;
    this.productDetails.productPrice = productPrice;
    this.productDetails.productWeight = productWeight;
    this.productDetails.productAmount = productAmount;
    this.productDetails.productDescription = productDescription;
    this.productsService.updateProduct(productId, this.productDetails).subscribe(
      res => {}
    );
  }

  onSubmitDeleteProductById(prodId){
    this.productsService.deleteById(prodId).subscribe((res) => {
    });
    this.display2 = 'block';
    setTimeout(() => {this.display2 = 'none'; }, 1200);

  }



  display2: string = 'none';



  onSubmitAddProduct(productName, productCategory, productPrice, productWeight, productAmount, productDescription){
    this.productDetails.productName = productName;
    this.productDetails.productCategory = productCategory;
    this.productDetails.productPrice = productPrice;
    this.productDetails.productWeight = productWeight;
    this.productDetails.productAmount = productAmount;
    this.productDetails.productDescription = productDescription;
    this.productsService.addProduct(this.productDetails).subscribe(
      res => {}
    );


  }



}
