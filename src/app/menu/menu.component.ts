import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menuItem';
import { MenuService } from '../menu.service';
import { PriceService } from '../price.service';
import { MENUITEMS } from '../menuItems';
import { INGREDIENTS } from '../ingredients';
import { IngredientService } from '../ingredient.service';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = MENUITEMS;
  menuWithPrices: object;
  ingredients: any = INGREDIENTS;
  selectedDrink: MenuItem;
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
    console.log('selected menu item', menuItem)
    this.selectedDrink = menuItem;
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
  }
}
