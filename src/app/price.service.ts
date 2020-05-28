import { Injectable } from '@angular/core';
import { INGREDIENTS } from './ingredients'

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  calcPrices(menuItems: Array<any>) {
    let prices = []
    menuItems.forEach((item) => {
      let total = 0;
      
      for (var k of INGREDIENTS) {
        total += k.price * item.ingredients[k.name]
      }
      let obj = {
        name: item.name,
        price: total,
      }
      prices.push(obj);
    })

    console.log(prices);
    return prices;
  }

  buyItem(menuItem: string, menuItems: Array<any>) {
    for (var k of menuItems) {
      if (k.name === menuItem) {
        
      }
    }
  }
}
