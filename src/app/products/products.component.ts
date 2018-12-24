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

  onSubmitGetProductById(prodId) {
    this.productsService.getProductById(prodId).subscribe((res) => {
      this.product = res;
    });
  }

  onSubmitDeleteProductById(prodId){
    this.productsService.deleteById(prodId).subscribe((res) => {
    });
    this.display2 = 'block';
    setTimeout(() => {this.display2 = 'none'; }, 1200);

  }

  display2: string = 'none';



  onSubmitAddProduct(productName, productCategory, productPrice, productWeight, productAmount, productDescription){
    // this.productDetails.name = productName;
    // this.productDetails.category = productCategory;
    // this.productDetails.price = productPrice;
    // this.productDetails.weight = productWeight;
    // this.productDetails.amount = productAmount;
    // this.productDetails.description = productDescription;
    // this.productsService.addProduct(this.productDetails).subscribe(
    //   res => {}
    // );
    // this.prodObj = {
    //   "productName" : productName,
    //   "productCategory" : productCategory,
    //   "productPrice" : productPrice,
    //   "productWeight" : productWeight,
    //   "productAmount" : productAmount,
    //   "productDescription" : productDescription
    // };
    // this.productsService.addProduct(this.prodObj).subscribe(
    //   res => {}
    // )

  }



}
