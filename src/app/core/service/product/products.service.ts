import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl, baseUrlProducts } from '../../apiRoot/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this._httpClient.get(`${baseUrlProducts}/products`);
  };

  getProduct(id:number): Observable<any> {
    return this._httpClient.get(`${baseUrlProducts}/products/${id}`);
  };

  getDetails(id:string): Observable<any> {
    return this._httpClient.get(`${baseUrlProducts}/products/${id}`);
  }


}
