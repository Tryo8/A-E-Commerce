import { Component, Input } from '@angular/core';
import { IProduct } from '../../../../../core/interface/products';
import { SharedModule } from '../../shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../../../core/service/cart/cart.service';
import { NotificationsService } from '../../../../../core/service/notifications/notifications.service';
import { EmptyComponent } from '../../../../empty/empty.component';
import { ProductsService } from '../../../../../core/service/product/products.service';
import { CategoryService } from '../../../../../core/service/category/category.service';
import { SkeletonModule } from 'primeng/skeleton';
import { CardSkeletonComponent } from '../../../../card-skeleton/card-skeleton.component';
@Component({
  selector: 'app-card',
  imports: [ SharedModule, EmptyComponent,SkeletonModule, CardSkeletonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  isCard:boolean = true;
  isAddedToCart: boolean = false;
    product: any;
  @Input() searchKey: string = '';
  categoryType: string = '';

  @Input() getCategoty: string = '';
  
  

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _cartService: CartService,
    private  _notificationService: NotificationsService,
    private _productService: ProductsService,
    private _category: CategoryService
  ){}

  @Input({required: true}) Products!:IProduct[];

 
  goToDetails(id: number) {
    this._router.navigate(['/user/product', id], { relativeTo: this._route });
  }

  addToCart(product: IProduct) {
    this._cartService.addToCart(product);
  } 




  
  


}
