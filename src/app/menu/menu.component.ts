import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menuItem';
import { MENUITEMS } from '../menuItems';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
