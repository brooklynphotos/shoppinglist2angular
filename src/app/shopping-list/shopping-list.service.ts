import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import {Item} from './shopping-list.item';
import Utils from '../shared/Utils';

@Injectable()
export class ShoppingListService {
  private readonly listUrl = '/api/shopping/activelist';

  constructor(private http: Http) { }

  getShoppingList(): Observable<Item[]> {
    return this.http.get(this.listUrl)
                    .map(Utils.extractData)
                    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    return Observable.throw('error');
  }
}
