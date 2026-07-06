import { Component, model } from '@angular/core';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

import { GalleriaModule } from 'primeng/galleria';
import { UserService } from '../../core/service/user.service';
import { IProduct } from '../../core/interface/products';
import { CardComponent } from "../../shared/module/shared/uiElements/card/card.component";
import { PopularPipe } from '../../core/pipes/popular.pipe';
import { SharedModule } from '../../shared/module/shared/shared.module';
import { ProductsService } from '../../core/service/product/products.service';
import { CartService } from '../../core/service/cart/cart.service';
import { NotificationsService } from '../../core/service/notifications/notifications.service';
@Component({
  selector: 'app-home',
  imports: [GalleriaModule, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private _userData: UserService, 
    private _router:Router,
    private _route: ActivatedRoute,
    private _productService: ProductsService,
    private _cartService: CartService,
    private _notificationService: NotificationsService
  ){}
  isCard:boolean = true;
  images :any[] | undefined;
  cardProducts: IProduct[] = [];
  isAddedToCart: boolean = false;

  

  responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4
    },
    {
      breakpoint: '575px',
      numVisible: 1
    }
  ];


  ngOnInit() {
    this.images = [
      {
        itemImageSrc: 'https://cdn.pixabay.com/photo/2015/12/07/14/11/shopping-cart-1080840_1280.jpg',
        title: 'Shopping Carts',
        offer: '40%',
      },
      {
        itemImageSrc: 'https://cdn.pixabay.com/photo/2017/03/07/23/33/technology-2125547_1280.jpg',
        offer: '36%',
        title: 'Cameras'
      },
      {
        itemImageSrc: 'https://cdn.pixabay.com/photo/2016/11/20/09/06/laptop-1842297_1280.jpg',
        offer: '70%',
        title: 'laptob'
      },
      {
        itemImageSrc: 'https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_1280.jpg',
        offer: '33%',
        title: 'Headset'
      },
      {
        itemImageSrc: 'https://cdn.pixabay.com/photo/2019/05/18/17/03/chicken-eggs-4212132_1280.jpg',
        offer: '66%',
        title: 'Eggs'
      },
      this.getAllProducts()

    ];
  }

  goToDetails(id: number) {
    this._router.navigate(['/user/details', id], { relativeTo: this._route });
  }
    



  getAllProducts(): void {
  
    this._productService.getAllProducts()
    .subscribe((res:IProduct[]) => {
      this.cardProducts = res.map((product) => {
        
        return{
          ...product,
          isAddedToCart: this._cartService.isAddedToCart(product) || false       //cartState[product.id]
        }
      })
      console.log(this.cardProducts)
    });
  };

   addToCart(product: IProduct) {
    this._cartService.addToCart(product);

  }

// addToCart(productId: number) {
//   const userId = localStorage.getItem('id') ?? '';

//   this._cartService.addToCart({ userId, productId }).subscribe((next) => {
//     console.log(next);
//     this._notificationService.showSuccess('success','Added to cart successfully');

//     this.isAddedToCart = true;

//     // ✅ Update local cart state
//     const storedCart = localStorage.getItem('cartState');
//     const cartState = storedCart ? JSON.parse(storedCart) : {};

//     cartState[productId] = true;
//     localStorage.setItem('cartState', JSON.stringify(cartState));

//     // ✅ Update cart count based on localStorage
//     const count = Object.keys(cartState).length;
//     this._cartService.countOfCart.next(count);
//   });
// }


  



}
