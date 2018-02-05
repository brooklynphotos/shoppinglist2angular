import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatTabsModule,
  MatTableModule,
  MatButtonToggleModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { GridMoneyComponent } from './grid-money/grid-money.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShopService } from './shop/shop.service';


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
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatButtonToggleModule
  ],
  providers: [
    ShoppingListService,
    ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
