import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.getItems();
  }

  selectedItem: Ingredient;
  onSelect(ingredient: Ingredient): void {
    this.selectedItem = ingredient;
  }

  getItems(): void {
    this.ingredientService.getItems().subscribe(ingredients => this.ingredients = ingredients)
  }

}
