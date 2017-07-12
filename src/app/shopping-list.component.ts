import { Component, OnInit } from '@angular/core';

import {ShoppingListService} from './shopping-list.service';
import {Item} from './shopping-list.item';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  items: Item[] = [];
  errorMessage: string;

  constructor(private listSvc: ShoppingListService){}

  getItems(){
    this.listSvc.getShoppingList()
                .subscribe(
                  items=> this.items = items,
                  error=>this.errorMessage = <any>error
                )
  }

  ngOnInit() {
    this.getItems();
  }

}
