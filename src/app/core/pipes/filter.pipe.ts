import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interface/products';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 transform(products: IProduct[], category?: string, rate?: number): any[] {
    if (!products) return [];

    return products.filter(product => {
      let match = true;

      if (category && category !== 'all') {
        match = match && product.category === category;
      }

      if (rate) {
        match = match && product.rating.rate >= rate;
      }

      return match;
    });
  }

}
