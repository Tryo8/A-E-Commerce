import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrlProducts } from '../../apiRoot/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient:HttpClient) { }

  // getAllCategory(): Observable<any> {
  //   return this._httpClient.get(`${baseUrlProducts}/products/categories`)

  // }

  getAllCategory() {
    return this._httpClient.get<string[]>(`${baseUrlProducts}/products/categories`);
  }

  // getSpecificCategory(category: string): Observable<any> {
  //   return this._httpClient.get(`${baseUrlProducts}/products/category/`, {params: {type:category}}); 
  // }

  getSpecificCategory(category: string): Observable<any[]> {
    const encoded = encodeURIComponent(category);
    return this._httpClient.get<any[]>(`${baseUrlProducts}/products/category/${encoded}`);
  }
}
