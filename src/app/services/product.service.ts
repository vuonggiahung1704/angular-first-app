import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<Product[]>(this.url);
  }
  getProduct(id: Number) {
    return this.http.get<Product>(`${this.url}/${id}`);
  }
  saveProduct(data: Product) {
    return this.http.post<Product>(this.url, data);
  }
  updateProduct(data: Product) {
    return this.http.put<Product>(`${this.url}/${data.id}`, data);
  }
  deleteProduct(id: Number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
