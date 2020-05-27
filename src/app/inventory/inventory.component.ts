import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../items';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  items = ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

  selectedItem: Item;
  onSelect(item: Item): void {
    this.selectedItem = item;
  }

}
