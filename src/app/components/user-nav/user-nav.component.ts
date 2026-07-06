import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { Avatar } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';
import { SharedModule } from '../../shared/module/shared/shared.module';
import { UserService } from '../../core/service/user.service';
import { CartService } from '../../core/service/cart/cart.service';


@Component({
  selector: 'app-user-nav',
  imports: [MenubarModule, BadgeModule, ToolbarModule, ButtonModule, CommonModule, BadgeModule, InputTextModule, AvatarModule, RippleModule, RouterLink, RouterLinkActive, SharedModule],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.scss'
})
export class UserNavComponent {
  
  constructor(
    private auth: AuthService,
    private _router: Router,
    private _route: ActivatedRoute, 
    private _userData: UserService,
    private _cartService: CartService
  ) {}
  user: any;
  items: MenuItem[]|undefined;
  userItems: MenuItem[]|undefined;
  isTrue: boolean = false;
  userName:string = '';
  cartCount: number = 0;

  ngOnInit() {
    this.items = [
      {
        id: '1',
        label: 'Home',
        icon: 'pi pi-home',
        path: 'home',
        routerLinkActiveOptions: 's' 
      },
      {
        id: '2',
        label: 'Products',
        icon: 'pi pi-sparkles',
        path: 'products', 
      },
      {
        id: '3',
        label: 'Category',
        icon: 'pi pi-sitemap',
        path: 'category', 
      },
    ];
    this.userItems = [
      {
        id:'1',
        label: 'Profile',
        icon: 'pi pi-user',
        command: () => {
          this.profileLink();
        }
      },
      {
        id:'2',
        label: 'Logout',
        icon: 'pi pi-sign-out text-red-500',
        styleClass: "text-red-500",
        command: () => {
          
          this.logout();
        }
      }
    ];

    this.getUserName();

    const id = localStorage.getItem('id');
      if (id) {
        this.auth.getUserById(+id).subscribe({
        next: (res) => this.user = res,
        error: (err) => console.error(err)
      });
    };

    this._cartService.countOfCart.subscribe((next) => {
      this.cartCount = next;
    });

    const storedCart = localStorage.getItem('cartState');
    const cartState = storedCart ? JSON.parse(storedCart) : {};
    const count = Object.keys(cartState).length;
    this._cartService.countOfCart.next(count);
    this._cartService.countOfCart.subscribe(count => {
      this.cartCount = count;
    });
  }

  // getUserCartCount(): void {
  //   const id = localStorage.getItem('token') ?? ''
  //   this._cartService.countOfCart.subscribe((next) => this.cartCount =next)
  // }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.clear();
    this._router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  };

  profileLink(){
    this._router.navigate(['profile'], { relativeTo: this._route });
  };

  getUserName(): void {
    this._userData.userName.subscribe((next) => (this.userName = next));
  };

  // getUserCartCount(): void {
  //   const id = 3;
  //   this._cartService.getCartCount(id).subscribe({
  //     next: (res) => {
  //       console.log('Cart API response:', res);
  //       if (res) {
  //         // check what properties exist
  //         this.cartCount =
  //           res.cart?.length ??
  //           res.products?.length ??
  //           (Array.isArray(res) ? res.length : 0);
  //       } else {
  //         this.cartCount = 0;
  //       }
  //     },
  //     error: (err) => { 
  //       console.error('Error getting cart count:', err);
  //       this.cartCount = 0;
  //     }
  //   });
  // }








  


}
