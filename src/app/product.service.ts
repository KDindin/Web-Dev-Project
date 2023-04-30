import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://example.com/api/products'; // replace with your API endpoint

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  searchProducts(term: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products?q=${term}`);
  }

  getProductById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  getProductsByCategory(category: string): Observable<any> {
    const url = `${this.apiUrl}?category=${category}`;
    return this.http.get<any>(url);
  }
}
