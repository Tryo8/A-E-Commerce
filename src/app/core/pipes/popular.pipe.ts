import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interface/products';

@Pipe({
  name: 'popular'
})
export class PopularPipe implements PipeTransform {

  transform(products:IProduct[]): IProduct[] {
    return products.filter((product) => product?.rating.rate > 4);
  }

}
