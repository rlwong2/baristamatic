import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MenuItem } from './menuItem';
import { PriceService } from './price.service'

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: Array<any>;
  menuWithPrices: Array<any>;
  private menuUrl = 'api/menuItems';

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
    private prices: PriceService,
  ) { }

  getMenu(): Observable<MenuItem[]> {
    let menu = this.http.get<MenuItem[]>(this.menuUrl)
      .pipe(
        tap(_ => console.log('fetched menu')),
        catchError(this.handleError<MenuItem[]>('getMenu', []))
      );
    
    return menu;
  }

  calcPrices(menuItems: Array<any>): Array<any> {
    this.getMenu().subscribe(menuItems => {
      this.menuItems = menuItems;
    })
    this.menuWithPrices = this.prices.calcPrices(this.menuItems);
    return this.menuWithPrices;
  }
}
