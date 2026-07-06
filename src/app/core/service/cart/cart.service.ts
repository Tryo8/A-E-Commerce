import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrlProducts } from '../../apiRoot/baseUrl';
import { IProduct } from '../../interface/products';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _httpClient: HttpClient, private _notificationService: NotificationsService) { }

  // getCartCount(id:string): Observable<any> {
  //   return this._httpClient.get(`${baseUrlProducts}/carts/${id}`);
  // };

  // addToCart(userData:{userId:string, productId:number}): Observable<any> {
  //   return this._httpClient.post(`${baseUrlProducts}/carts/`,userData)
  // };



  countOfCart: BehaviorSubject<number> = 
  new BehaviorSubject((JSON.parse(localStorage.getItem('cartState') ?? '[]')as IProduct[]).length);

  // addToCart(product:IProduct) {
  //   const storedCart = localStorage.getItem('cartState');
  //   const cart: IProduct[] = storedCart? JSON.parse(storedCart) : []

  //   if(!product.isAddedToCart){
  //     product.isAddedToCart = true
  //     cart.push(product)
  //     localStorage.setItem('cartState',JSON.stringify(cart))
  //     this._notificationService.showSuccess('Sucess','Product was added to cart successfully')
  //     this.countOfCart.next(cart.length)

  //   } else {}
  // }

  addToCart(product: IProduct) {
    const storedCart = localStorage.getItem('cartState');

    let cart: IProduct[] = [];
    try {
      const parsed = storedCart ? JSON.parse(storedCart) : [];
      // ✅ only accept arrays
      cart = Array.isArray(parsed) ? parsed : [];
    } catch {
      cart = []; // fallback if JSON is broken
    }

    if (!product.isAddedToCart) {
      product.isAddedToCart = true;
      cart.push(product);
      localStorage.setItem('cartState', JSON.stringify(cart));
      this._notificationService.showSuccess('Success', 'Product was added to cart successfully');
      this.countOfCart.next(cart.length);
    }
  }



  isAddedToCart(product:IProduct): boolean {
      const storedCart = localStorage.getItem('cartState')
    const cartState = storedCart? JSON.parse(storedCart) : []
    const isAdded = cartState.some((item:IProduct) => item.id === product.id)
    return isAdded;
  }

  // isAddedToCart(product: IProduct): boolean {
  //   const storedCart = localStorage.getItem('cartState');

  //   let cartState: IProduct[] = [];
  //   try {
  //     const parsed = storedCart ? JSON.parse(storedCart) : [];
  //     cartState = Array.isArray(parsed) ? parsed : []; // ✅ only arrays allowed
  //   } catch {
  //     cartState = []; // ✅ fallback if JSON is invalid
  //   }

  //   return cartState.some((item: IProduct) => item.id === product.id);
  // }

}
