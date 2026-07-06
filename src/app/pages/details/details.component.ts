import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/service/user.service';
import { SharedModule } from '../../shared/module/shared/shared.module';
import { ProductsService } from '../../core/service/product/products.service';
import { CartService } from '../../core/service/cart/cart.service';
import { NotificationsService } from '../../core/service/notifications/notifications.service';
import { IProduct } from '../../core/interface/products';

@Component({
  selector: 'app-details',
  imports: [ SharedModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  isAddedToCart: boolean = false;
  product: any;

  constructor(
    private _route: ActivatedRoute,
    private _product: ProductsService,
    private _cartService: CartService,
    private  _notificationService: NotificationsService
  ) {}

  // ngOnInit(): void {
  //   const id = this._route.snapshot.paramMap.get('id');
  //   if (id) {
  //     this._product.getProduct(+id).subscribe((res) => {
  //       this.product = res;
  //     });

  //     this._route.data.subscribe((data:any) => {
  //       this.product = {
  //         ...data.details.product,
  //         isAddedToCart: this._cartService.isAddedToCart(data.details.product)
  //       }
  //     })
  //   }
  // }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if (id) {
      this._product.getProduct(+id).subscribe((res: IProduct) => {
        this.product = {
          ...res,
          isAddedToCart: this._cartService.isAddedToCart(res)
        };
      });
    }
  }


  addToCart(product: IProduct) {
    this._cartService.addToCart(product);
    product.isAddedToCart = true;
  
  }
  

  // addToCart(productId: number) {
  //   const userId = localStorage.getItem('id') ?? '';
  //   this._cartService.addToCart({ userId, productId }).subscribe((next) => {
  //     console.log(next);
  //     this._notificationService.showSuccess('success','Added to cart successfully');

  //     this.isAddedToCart = true;
  //     const storedCart = localStorage.getItem('cartState');
  //     const cartState = storedCart ? JSON.parse(storedCart) : {};

  //     cartState[productId] = true;
  //     localStorage.setItem('cartState', JSON.stringify(cartState));

  //     // Update cart count based on localStorage
  //     const count = Object.keys(cartState).length;
  //     this._cartService.countOfCart.next(count);
  //   });
  // }

}
