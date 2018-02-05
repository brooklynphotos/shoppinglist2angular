import { Component, OnInit } from '@angular/core';

import {ShoppingListService} from './shopping-list.service';
import { MatTableDataSource } from '@angular/material';
import { ShoppingElement, SHOPPING_DATA } from '../shared/shopping-element';
import {Item} from './shopping-list.item';
import {GridMoneyComponent} from '../grid-money/grid-money.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<ShoppingElement>(SHOPPING_DATA);

  ngOnInit() {
  }

}
