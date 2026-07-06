import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../apiRoot/baseUrl';
import { IRegister } from '../interface/iregister';
import { ILogin } from '../interface/ilogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) { }

  register(registerData:IRegister): Observable<any> {
    return this._httpClient.post(`${baseUrl}/api/users`, registerData)
  }

  login(loginData: ILogin): Observable<any> {
    return this._httpClient.post(`${baseUrl}/api/login`, loginData);
  }

  
  getUserById(id: number): Observable<any> {
    return this._httpClient.get(`${baseUrl}/api/users/${id}`);
  }

  authorized(): boolean {
    if( localStorage.getItem('token') != null ) {
      return true
    } else return false
  };

  logout(): Observable<any> {
    return this._httpClient.post(`${baseUrl}/api/users`,{});
  }
}
