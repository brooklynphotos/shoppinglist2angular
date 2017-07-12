import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Item} from './shopping-list.item';

@Injectable()
export class ShoppingListService {
  private readonly listUrl = '/api/shopping/list';

  constructor(private http: Http) { }

  getShoppingList(): Observable<Item[]>{
    return this.http.get(this.listUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response){
    let body = res.json();
    return body.data || {};
  }

  private handleError (error: Response | any) {
    return Observable.throw("error");
  }
}
