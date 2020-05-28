import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ingredient } from './ingredient';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const ingredients = [
      { id: 1, name: 'Coffee', price: 0.75 },
      { id: 2, name: 'Decaf Coffee', price: 0.75 },
      { id: 3, name: 'Expresso', price: 0.75 },
      { id: 4, name: 'Sugar', price: 0.25 },
      { id: 5, name: 'Cream', price: 0.25 },
      { id: 6, name: 'Steamed Milk', price: 0.35 },
      { id: 7, name: 'Foamed Milk', price: 0.35 },
      { id: 8, name: 'Cocoa', price: 0.25 },
      { id: 9, name: 'Whipped Cream', price: 0.25 }
    ];
    return {ingredients};
  }

  genId(ingredients: Ingredient[]): number {
    return ingredients.length > 0 ? Math.max(...ingredients.map(ingredients => ingredients.id)) + 1 : 11;
  }
}