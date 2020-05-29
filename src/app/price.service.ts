import { Injectable } from '@angular/core';
import { INGREDIENTS } from './ingredients';
import { MENUITEMS } from './menuItems';
import { MenuItem } from './menuItem';
@Injectable({
  providedIn: 'root'
})
export class PriceService {
  menuItems: MenuItem[] = MENUITEMS;
  ingredients: any = INGREDIENTS;

  calcPrices(menuItems: Array<any>) {
    let prices = []
    menuItems.forEach((item) => {
      let total = 0;
      
      for (var k of INGREDIENTS) {
        total += k.price * item.recipe[k.name]
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

  buyItem(inventory: Array<any>, menuItem: any ) {
    let recipe = {};
    for (let i of this.menuItems) {
      if (i.name === menuItem.name) {
        console.log('---', i.recipe)
        recipe = i.recipe;
      }
    }

    let original = inventory.slice()

    for (let item of inventory) {
      item.quantity -= recipe[item.name]
      if (item.quantity < 0) {
        console.log('cannot make drink')
        inventory = original;
        return false;
      }
    }

    return inventory;
  }
}
