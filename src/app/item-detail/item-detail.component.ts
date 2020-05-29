import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../ingredient';
import { MenuItem } from '../menuItem';
import { MENUITEMS } from '../menuItems';

import { MenuService } from '../menu.service';
import { PriceService } from '../price.service';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent implements OnInit {
  @Input() menuItem: any;
  menuItems: any = MENUITEMS;

  message: string = '';

  constructor(
    private menuService: MenuService,
    private priceService: PriceService,
    private ingredientService: IngredientService,
  ) { }

  ngOnInit(): void {
    this.getMenu();
  }

  onSelect(menuItem: MenuItem): void {
    console.log(this.menuItems)
    let result = this.priceService.buyItem(this.menuItems, menuItem);
    console.log(result)
    this.menuItems = result[1];

    // display error message if not enough inventory
    if (result[0] === false) {
      this.message = 'Not enough ingredients in inventory.  Please select another drink or ask attendant to restock.'
      setTimeout(() => this.message = '', 3000)
    }
  }

  getMenu(): void {
    this.menuService.getMenu().subscribe(menuItems => {
      this.menuItems = menuItems;
    })
  }

}
