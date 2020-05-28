import { Component, OnInit } from '@angular/core';
import { menuItem } from '../menuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: menuItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
