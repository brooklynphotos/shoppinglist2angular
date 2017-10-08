import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdToolbarModule } from '@angular/material';
// ag-grid
import {AgGridModule} from "ag-grid-angular/main";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListComponent } from './shopping-list.component';
import { GridMoneyComponent } from './grid-money/grid-money.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    GridMoneyComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdToolbarModule,
    AgGridModule.withComponents(
      [GridMoneyComponent]
    )
  ],
  providers: [
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
