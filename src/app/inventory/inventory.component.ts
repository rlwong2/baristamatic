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

  getItems(): void {
    this.ingredientService.inventory.subscribe(inventory => 
      this.ingredients = inventory
    )
  }

}
