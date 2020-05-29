import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Ingredient } from './ingredient';
import { INGREDIENTS } from './ingredients';
import { RESTOCK } from './restock';

import { PriceService } from './price.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private inventorySource = new BehaviorSubject(INGREDIENTS);
  inventory: any = this.inventorySource.asObservable();

  private ingredientsUrl = 'api/ingredients';
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
    private PriceService: PriceService,
  ) { }

  getItems(): Observable<Ingredient[]> {
    let ingredients = this.http.get<Ingredient[]>(this.ingredientsUrl)
      .pipe(
        tap(_ => console.log('fetched items')),
        catchError(this.handleError<Ingredient[]>('getItems', []))
      );
    console.log(ingredients)
    return ingredients;
  }

  setInventory(): void {
    this.getItems().subscribe(inventory => {
      this.inventory = inventory;
    })
  }

  changeInventory(inventory: Array<any>) {
    this.inventorySource.next(inventory)
  }

  restockItems(restock: Array<any>): void {
    console.log(restock)
    this.changeInventory(restock);
  }
}
