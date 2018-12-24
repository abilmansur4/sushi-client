import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ProductsService implements OnInit {
  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {

  }

  getProductById(prodId) {
    return this.http.get('/api/products/' + prodId);
  }

  deleteById(prodId) {
    return this.http.delete('/api/products/' + prodId);
  }

  // addProduct(model: any) {
  //   return this.http.post('/api/products/', {
  //     productName
  //   });
  // }
}
