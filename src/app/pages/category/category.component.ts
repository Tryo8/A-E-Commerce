import { Component } from '@angular/core';
import { CategoryService } from '../../core/service/category/category.service';
import { IProduct } from '../../core/interface/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categories: string[] = [];
  ngOnInit(): void {

    this._categoryService.getAllCategory().subscribe((res) => {
      this.categories = res;
      console.log('Categories:', res);
    });
  }

  constructor(private _categoryService : CategoryService){}

  getImageCategory(type:string): string {
    return `./assets/imgs/${type}.jpg`
  }

  // allCategory:IProduct[] = [];
  // displayAllCategory() {
  //   this._categoryService.getAllCategory().subscribe((next) => this.allCategory = next)
  // }

}
