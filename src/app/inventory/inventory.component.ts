import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  selectedItem: Item;
  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items)
  }

}
