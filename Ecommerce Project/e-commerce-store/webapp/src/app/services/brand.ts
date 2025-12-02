import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BrandModel } from '../types/brand';
@Injectable({
  providedIn: 'root',
})
export class Brand {
  http = inject(HttpClient);
  constructor() {}
  getBrands() {
    return this.http.get<BrandModel[]>(environment.apiUrl + '/brand');
  }
  getBrandById(id: string) {
    return this.http.get<BrandModel>(environment.apiUrl + '/brand/' + id);
  }
  addBrand(name: string) {
    return this.http.post(environment.apiUrl + '/brand', {
      name: name,
    });
  }
  updateBrand(id: string, name: string) {
    return this.http.put(environment.apiUrl + '/brand/' + id, {
      name: name,
    });
  }
  deleteBrandById(id: string) {
    return this.http.delete(environment.apiUrl + '/brand/' + id);
  }
}
