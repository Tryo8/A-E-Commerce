import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrlProducts } from '../apiRoot/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _httpClient: HttpClient){}
  userName: BehaviorSubject<string> = new BehaviorSubject<string>('');



}
