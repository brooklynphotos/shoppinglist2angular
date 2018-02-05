import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Shop } from './shop';

@Injectable()
export class ShopService {
  API_BASE = '/api/shop';

  constructor(private http: Http) { }

  loadShops(): Observable<Shop[]> {
    return this.http.get(`${this.API_BASE}/list`)
    .map(data => data.json())
    .catch(this.errorHandler);
  }

  errorHandler(error: any): any {
    Observable.throw(error);
  }
}
