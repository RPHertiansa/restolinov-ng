import { Injectable } from '@angular/core';
import axios from 'axios'
import {AxiosInstance} from 'axios'
import { Observable, of } from 'rxjs'
import { Product } from './product'
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];
  product: Product

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  

  constructor(private http: HttpClient
  ) { }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products')
  }
  
  getDetail(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`)
  }
  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/keranjangs',  product, this.httpOptions)
  }
}
