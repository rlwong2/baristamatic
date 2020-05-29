import { Injectable } from '@angular/core';
import { INGREDIENTS } from './ingredients';
import { MENUITEMS } from './menuItems';
import { MenuItem } from './menuItem';
import { IngredientService } from './ingredient.service';
@Injectable({
  providedIn: 'root'
})
export class PriceService {
  menuItems: MenuItem[] = MENUITEMS;

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

    return prices;
  }

  buyItem(inventory: Array<any>, menuItem: any ) {
    let recipe = {};
    for (let i of this.menuItems) {
      if (i.name === menuItem.name) {
        recipe = i.recipe;
      }
    }

    let inventoryCopy = inventory.slice()

    for (let item of inventoryCopy) {
      if (item.quantity - recipe[item.name] < 0) {
        console.log('cannot make drink')
        return [false, inventory];
      }
      item.quantity -= recipe[item.name]
    }

    return [true, inventoryCopy];
  }
}
