import { Component, OnInit } from '@angular/core';

import {ShoppingListService} from './shopping-list.service';
import { MatTableDataSource } from '@angular/material';
import {Item} from './shopping-list.item';
import {GridMoneyComponent} from '../grid-money/grid-money.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  displayedColumns = ['priority', 'name', 'section', 'quantity', 'note'];
  dataSource = new MatTableDataSource<Item>([]);
  errMsg: string;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingListService.getShoppingList().subscribe(
      items => this.dataSource.data = items,
      errMsg => this.errMsg = errMsg
    );
  }
}
