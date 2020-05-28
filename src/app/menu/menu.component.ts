import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menuItem';
import { MenuService } from '../menu.service';
import { MENUITEMS } from '../menuItems'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = MENUITEMS;
  menuWithPrices: object;

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.getMenu();
  }

  selectedItem: MenuItem;
  onSelect(menuItem: MenuItem): void {
    this.selectedItem = menuItem;
  }

  getMenu(): void {
    this.menuService.getMenu().subscribe(menuItems => {
      this.menuItems = menuItems;
    })
    let menu =  this.menuItems === undefined ? MENUITEMS : this.menuItems;
      this.menuWithPrices = this.menuService.calcPrices(menu)
      console.log(this.menuWithPrices)
  }
}
