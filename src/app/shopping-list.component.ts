import { Component, OnInit } from '@angular/core';

import {ShoppingListService} from './shopping-list.service';
import {Item} from './shopping-list.item';
import {GridMoneyComponent} from './grid-money/grid-money.component';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  items: Item[] = [];
  errorMessage: string;

  ngOnInit() {
  }

}
