import { Injectable } from '@angular/core';
import { INGREDIENTS } from './ingredients'

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  calcPrices(menuItems: Array<any>) {
    let prices = {}
    menuItems.forEach((item) => {
      let total = 0;
      for (var k of INGREDIENTS) {
        total += k.price * item.ingredients[k.name]
      }
      prices[k.name] = total;
    })

    console.log(prices);
    return prices;
  }
}
