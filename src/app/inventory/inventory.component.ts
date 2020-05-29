import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';
import { INGREDIENTS } from '../ingredients';
import { RESTOCK } from '../restock';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  ingredients: Ingredient[];
  restock: Ingredient[] = RESTOCK;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    // live updates inventory
    this.ingredientService.inventory.subscribe(inventory => 
      this.ingredients = inventory
    )
  }

  onSelect(): void {
    // Updates inventory on click
    this.ingredientService.restockItems(this.restock);
  }
}
