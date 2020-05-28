import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ingredient } from './ingredient';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const ingredients = [
      { id: 1, name: 'Coffee' },
      { id: 2, name: 'Decaf Coffee' },
      { id: 3, name: 'Sugar' },
      { id: 4, name: 'Cream' },
      { id: 5, name: 'Steamed Milk' }
    ];
    return {ingredients};
  }

  genId(ingredients: Ingredient[]): number {
    return ingredients.length > 0 ? Math.max(...ingredients.map(ingredients => ingredients.id)) + 1 : 11;
  }
}