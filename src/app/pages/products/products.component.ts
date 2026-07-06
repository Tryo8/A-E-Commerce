import { Component } from '@angular/core';
import { ProductsService } from '../../core/service/product/products.service';
import { IProduct } from '../../core/interface/products';
import { CardComponent } from "../../shared/module/shared/uiElements/card/card.component";
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SearchNamePipe } from '../../core/pipes/search-name.pipe';
import { CartService } from '../../core/service/cart/cart.service';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { FilterPipe } from '../../core/pipes/filter.pipe';
@Component({
  selector: 'app-products',
  imports: [
    CardComponent,
    InputIcon,
    IconField,
    InputTextModule,
    FormsModule, SearchNamePipe,
    CommonModule,
    DialogModule,
    ButtonModule,
    DropdownModule,InputNumberModule ,FilterPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(
    private _productService:ProductsService,
    private _cart:CartService
  ) {};

  allProducts:IProduct[] = [];
  searchKey:string = '';
  getCategory: string = 'all';
  rateFilter!: number ;
  

  ngOnInit(): void {
    this.getAllProducts();
  }

  // getAllProducts(): void {
  //   this._productService.getAllProducts().subscribe((next) => this.allProducts = next)

  // }

  getAllProducts(): void {
    
    this._productService.getAllProducts()
    .subscribe((res:any) => {
      this.allProducts = res.map((product:IProduct) => {
        
        return{
          ...product,
          isAddedToCart: this._cart.isAddedToCart(product) || false   //cartState[product.id]
        }
      })
    });
  }

   visible: boolean = false;

  // Example filter fields
  categories = [
    { label: 'All', value: 'all' },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Man\'s Clothing', value: 'men\'s clothing' },
    { label: 'Women\'s Clothing', value: 'women\'s clothing' },
    { label: 'Jewelery', value: 'jewelery' }
  ];

  selectedCategory: string = 'all';
  keyword: string = '';

  showDialog() {
    this.visible = true;
  }

  applyFilters() {
    console.log('Filters applied:', {
      category: this.selectedCategory,
      keyword: this.keyword
    });
    this.visible = false; // close dialog after applying filters
  }

  
  applyFilter() {
    this.visible = false;
  }



}
