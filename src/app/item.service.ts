import { Injectable } from '@angular/core';

import { Item } from './item';
import { ITEMS } from './items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Item[] {
    return ITEMS;
  }
}
