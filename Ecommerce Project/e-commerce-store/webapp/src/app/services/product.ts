import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ProductModel } from '../types/product';
@Injectable({
  providedIn: 'root',
})
export class Product {
  http = inject(HttpClient);
  constructor() {}
  getAllProducts() {
    return this.http.get<ProductModel[]>(environment.apiUrl + '/product');
  }
  getProductById(id: string) {
    return this.http.get<ProductModel>(environment.apiUrl + '/product/' + id);
  }
  addProduct(product: ProductModel) {
    return this.http.post(environment.apiUrl + '/product', product);
  }
  updateProduct(id: string, name: string) {
    return this.http.put(environment.apiUrl + '/product/' + id, {
      name: name,
    });
  }
  deleteProductById(id: string) {
    return this.http.delete(environment.apiUrl + '/product/' + id);
  }
}
