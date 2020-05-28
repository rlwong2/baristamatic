import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Coffee' },
      { id: 2, name: 'Decaf Coffee' },
      { id: 3, name: 'Sugar' },
      { id: 4, name: 'Cream' },
      { id: 5, name: 'Steamed Milk' }
    ];
    return {heroes};
  }

  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 11;
  }
}