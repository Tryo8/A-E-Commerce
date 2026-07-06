import { Component } from '@angular/core';
import { IProduct } from '../../core/interface/products';
import { DataView, DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { Tag, TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { PaginatorModule } from 'primeng/paginator';
import { NotificationsService } from '../../core/service/notifications/notifications.service';
@Component({
  selector: 'app-cart',
  imports: [DataViewModule, ButtonModule,PaginatorModule, TagModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(private _notificationService: NotificationsService){}
  rows = 5; // how many items per page
  first = 0;

  allCartProducts: IProduct[] = [];
  pagedCart: IProduct[] = [];

  ngOnInit(): void {
    try {
      const storedCart = localStorage.getItem('cartState');
      this.allCartProducts = storedCart ? JSON.parse(storedCart) : [];
    } catch {
      this.allCartProducts = []; // fallback in case of invalid JSON
    }
    console.log('Loaded cart:', this.allCartProducts);
    const savedCart = localStorage.getItem('cartState');
    if (savedCart) {
      this.allCartProducts = JSON.parse(savedCart);
      this.updatePage();
    }

  }

  onPageChange(event: PaginatorState): void {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 5;
    this.updatePage();
  }

  updatePage(): void {
    const start = this.first;
    const end = this.first + this.rows;
    this.pagedCart = this.allCartProducts.slice(start, end);
    console.log(`Showing items ${start}–${end}`, this.pagedCart);
  }
  

  removeFromCart(id: number): void {
    this.allCartProducts = this.allCartProducts.filter(p => p.id !== id);
    localStorage.setItem('cartState', JSON.stringify(this.allCartProducts));

    // Update pagination so page adjusts when items are removed
    if (this.first >= this.allCartProducts.length) {
      this.first = Math.max(0, this.first - this.rows);
    }
    this.updatePage();
    this._notificationService.showError('Item removed from cart', '');
  }

  clearCart(): void {
    localStorage.removeItem('cartState');
    this.allCartProducts = [];
    
    setTimeout(() => {
       this._notificationService.showError('Removed item from cart', '');

    }, 2000)
   
  }


}
