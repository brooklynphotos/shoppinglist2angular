import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import {Item} from './shopping-list.item';

@Injectable()
export class ShoppingListService {
  private readonly listUrl = '/api/shopping/list';

  constructor(private http: Http) { }

  getShoppingList(): Observable<Item[]> {
    const items: Item[] = [{
      id: 1,
      name: 'name',
      frequency: 2,
      priority: 1,
      lastDateBought: new Date(),
      quantity: 2,
      location: {
        id: 2,
        shopId: 2,
        section: 'b'
      },
      description: "a",
      note: "b",
      favorite: false,
      price: {
        value: 2.99,
        unit: 'pound'
      },
      lastUsed: new Date()
    }];
    return Observable.of(items);
    // return this.http.get(this.listUrl)
    //                 .map(this.extractData)
    //                 .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  private handleError (error: Response | any) {
    return Observable.throw('error');
  }
}
