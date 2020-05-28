import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MenuItem } from './menuItem';
import { MENUITEMS } from './menuItems';
import { PriceService } from './price.service'

@Injectable({
  providedIn: 'root'
})
export class MenuService {
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
    return this.http.get<MenuItem[]>(this.menuUrl)
      .pipe(
        tap(_ => console.log('fetched menu')),
        catchError(this.handleError<MenuItem[]>('getMenu', []))
      );
  }

  calcPrices(menuItems: Array<any>): object {
    return this.prices.calcPrices(menuItems)
  }
}
