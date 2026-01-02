import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { ProductModel } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class Customer {
  http = inject(HttpClient);
  constructor() {}
  getNewProducts() {
    return this.http.get<[ProductModel]>(environment.apiUrl + '/customer/new-products');
  }
  getFeaturedProducts() {
    return this.http.get<[ProductModel]>(environment.apiUrl + '/customer/featured-products');
  }
}
