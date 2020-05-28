import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menuItem';
import { MENUITEMS } from '../menuItems';
import { PriceService } from '../price.service';
import { MenuService } from '../menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems = MENUITEMS;

  constructor() { }

  ngOnInit(): void {
  }

  selectedItem: MenuItem;
  onSelect(menuItem: MenuItem): void {
    this.selectedItem = menuItem;
  }

  getMenu(): void {
    this.MenuService.getMenu().subscribe(menuItems => this.menuItems = menuItems)
  }
}
