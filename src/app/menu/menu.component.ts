import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menuItem';
import { MenuService } from '../menu.service';
import { PriceService } from '../price.service';
import { MENUITEMS } from '../menuItems';
import { INGREDIENTS } from '../ingredients';
import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = MENUITEMS;
  menuWithPrices: object;
  ingredients: any = INGREDIENTS;
  selectedItem: MenuItem;
  message: string = '';

  constructor(
    private menuService: MenuService,
    private priceService: PriceService,
    private ingredientService: IngredientService
  ) { }

  ngOnInit(): void {
    this.getMenu();
  }

  onSelect(menuItem: MenuItem): void {
    console.log('selected menu item')
    this.selectedItem = menuItem;

    let result = this.priceService.buyItem(this.ingredients, menuItem);
    this.ingredients = result[1];

    // display error message if not enough inventory
    if (result[0] === false) {
      this.message = 'Not enough ingredients in inventory.  Please select another drink or ask attendant to restock.'
      setTimeout(() => this.message = '', 3000)
    }
  }

  getIngredients(): void {
    this.ingredientService.getItems().subscribe(ingredients => this.ingredients = ingredients);
  }

  getMenu(): void {
    this.menuService.getMenu().subscribe(menuItems => {
      this.menuItems = menuItems;
    })
    let menu =  this.menuItems === undefined ? MENUITEMS : this.menuItems;
      this.menuWithPrices = this.priceService.calcPrices(menu)
      console.log(this.menuWithPrices)
  }
}
