import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular/main';

@Component({
  selector: 'app-grid-money',
  templateUrl: './grid-money.component.html',
  styleUrls: ['./grid-money.component.scss']
})
export class GridMoneyComponent implements ICellRendererAngularComp {

    public params:any;

    agInit(params:any):void {
        this.params = params;
    }

}
