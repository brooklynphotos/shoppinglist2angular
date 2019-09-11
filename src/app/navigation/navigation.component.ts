import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop/shop';
import { ShopService } from '../shop/shop.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  shops: Shop[];
  errMsg: string;

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.loadStores();
  }

  loadStores(): void {
    this.shopService.loadShops().subscribe(
      shops => this.shops = shops,
      errMsg => this.errMsg
    );
  }

  select(store: Shop): void {
    console.log(store.id);
  }

}
