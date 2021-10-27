import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  productsUrl = 'https://ds-ecom.azurewebsites.net/products';

  getProducts() {
    return this.http.get(this.productsUrl);
  }

  getProductDetails(definitionUrl: string) {
    return this.http.get(definitionUrl);
  }
}
