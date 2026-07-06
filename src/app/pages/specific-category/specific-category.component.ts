import { Component } from '@angular/core';
import { CategoryService } from '../../core/service/category/category.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../core/interface/products';
import { CardComponent } from '../../shared/module/shared/uiElements/card/card.component';
import { ProductsService } from '../../core/service/product/products.service';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SearchNamePipe } from '../../core/pipes/search-name.pipe';

@Component({
  selector: 'app-specific-category',
  imports: [CardComponent, CardComponent, InputIcon, IconField,  InputTextModule, FormsModule, SearchNamePipe],
  templateUrl: './specific-category.component.html',
  styleUrl: './specific-category.component.scss'
})
export class SpecificCategoryComponent {
  searchKey:string = '';
  
  categoryType:string = '';

  products:IProduct[] = [];

  constructor(
    private _categoryService: CategoryService, 
    private _activateRoute: ActivatedRoute,
    private _product: ProductsService,
    
  ){}

  ngOnInit() : void {
     this.categoryType = this._activateRoute.snapshot.paramMap.get('type') ?? '';
    this.getSpecifiCategory(this.categoryType);

  }



  // getSpecifiCategory(type:string) {
  //   this._categoryService.getSpecificCategory(type).subscribe((next) => 
  //   this.products = next.products)
  // }

  // getSpecifiCategory(type: string) {
  //   this._categoryService.getSpecificCategory(type).subscribe({
  //     next: (res: any) => {
  //       this.products = res; 
  //       console.log('Category products:', this.products);
  //     },
  //     error: (err) => console.error('Error loading category:', err)
  //   });
  // }

  getSpecifiCategory(type: string) {
  this._categoryService.getSpecificCategory(type).subscribe({
    next: (res: IProduct[]) => {
      // ✅ Load cart from localStorage
      const storedCart = localStorage.getItem('cartState');
      const cart: IProduct[] = storedCart ? JSON.parse(storedCart) : [];

      // ✅ Mark products already in cart
      this.products = res.map((p) => ({
        ...p,
        isAddedToCart: cart.some((item) => item.id === p.id)
      }));

      console.log('Category products with cart state:', this.products);
    },
    error: (err) => console.error('Error loading category:', err)
  });
}


}
