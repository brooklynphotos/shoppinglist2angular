import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid/main';

import {ShoppingListService} from './shopping-list.service';
import {Item} from './shopping-list.item';
import {GridMoneyComponent} from './grid-money/grid-money.component'

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  items: Item[] = [];
  errorMessage: string;

  private gridOptions: GridOptions;

  constructor(private listSvc: ShoppingListService){
    this.gridOptions = <GridOptions>{
        onGridReady: () => {
            this.gridOptions.api.sizeColumnsToFit();
            this.listSvc.getShoppingList()
                        .subscribe(
                          rowData=> {
                            this.gridOptions.api.setRowData(rowData);
                          },
                          error=>this.errorMessage = <any>error
                        )
                }
    };
    this.gridOptions.columnDefs = [
        {headerName: "Name", field: "name"},
        {headerName: "Quantity", field: "quantity"},
        {
          headerName: "Price", 
          field: "price.value",
          cellRendererFramework: GridMoneyComponent
        }
    ];
  }

  ngOnInit() {
  }

}
